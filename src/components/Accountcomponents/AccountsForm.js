import { Form, redirect, useNavigate, useNavigation, json } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";



function AccountForm({method, title}){
    const navigate = useNavigate()  
    const navigation = useNavigation()

    const isSubmitting = navigation.state === 'submitting';
    function cancelHandler(){
        navigate('..')
    }

    return(
    <Form method="post">
        <h3>Create {title} Account</h3> 
        <p>
            <label>account name</label>
            <input placeholder="account name" type="text" name="accname" required></input>
        </p>
        <p>
            <label>account description</label>
            <input placeholder="account description" type="text" rows="5" name="accdesc" ></input>
        </p>
        <p>
            <label>account number</label>
            <input placeholder="account number" type="text"  name="accnum" required></input>
        </p>
        <div>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>)
}

export default AccountForm;

export async function action({request}){
    const method = request.method
    const data = await request.formData()
    const token = getAuthToken()

    const accountData = {
        account_name:data.get("accname"),
        account_description:data.get("accdesc"),
        account_number:data.get("accnum"),
        is_active:data.get("active")
    }

    let url = 'http://localhost:8000/supplier/account'
    if(method==='POST'){
        const response = await fetch(url,{
            method: method,
            headers: {
                'Content-Type':'application/json',
                'Authorization': "Bearer " + token,
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(accountData)
        });
        if (!response.ok){
            window.alert("failed")
            throw json ({message: "Failed to save the account"}, {status: 500})
        }

        return redirect("/account/supplier")
    }
}