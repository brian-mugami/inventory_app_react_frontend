import { Suspense } from "react";
import { defer, json, Await, useRouteLoaderData} from "react-router-dom";
import AccountsList from "../../../components/AccountComponents/AccountsList";
import { getAuthToken } from "../../../util/Auth";

function ItemAccountsPage(){
    const {accounts} = useRouteLoaderData('item')

    return(
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading....</p>}>
            <Await resolve={accounts}>
                {(loadedAccounts) => <AccountsList accounts={loadedAccounts} title="Category"/>}
            </Await>
        </Suspense>
    )
}
export default ItemAccountsPage;

async function AccountLoader(){
    const token = getAuthToken()
   
    const response = await fetch('https://flask-inventory.onrender.com/category/account', {
        method: "get",
        headers: {
            'Authorization': 'Bearer '+ token,
            "Access-Control-Allow-Origin": "*",
        }
    })
    if(!response.ok){
        throw json({message: "The response was not ok"},{status: 500})
    }else{
        const resData = await response.json()
        return resData
    }
};

export function loader(){
    return (defer({
        accounts: AccountLoader()
    }))
}
