import AuthForm from "../../components/UserComponents/Register";
import { json, redirect } from "react-router-dom";

function AuthentificationPage(){
    return(
        <AuthForm/>
    )
}

export async function action ({request}){
    const searchParams = new URL(request.url).searchParams
    const mode = searchParams.get('mode') || 'login'

    if (
        mode !== 'login' && mode !== 'register'
      ){
        throw json({message: "Route not found."}, {status:404})
      }
    const data = await request.formData()

    const regData = {
    first_name: data.get('fname'),
    last_name: data.get('lname'),
    email: data.get('email'),
    password1: data.get('password1'),
    password2: data.get('password2'),
    }

    const loginData = {
    email: data.get('email'),
    password: data.get('password'),        
    }

    if (mode==='login'){
        const response = await fetch('http://localhost:8000/login', {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(loginData)
        })
        if (!response){
            return json ({message:"Could not authenticate user"}, {status: 500})
          }
          if(response.status === 401){
            return json({message:"Unauthorized", status:401})
          }

          const resData = await response.json();
          const access_token = resData.access_token;
          const refresh_token = resData.refresh_token;
        
          localStorage.setItem('access_token', access_token)
          localStorage.setItem('refresh_token', refresh_token)
          const expiration = new Date()
          expiration.setHours(expiration.getHours() + 24)
          localStorage.setItem('expiration', expiration.toISOString())
        
          // manage tokens
          return redirect("/")}
        
    if(mode==='register'){
        const response = await fetch('http://localhost:8000/register', {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify(regData)
        })
        if(response.status === 409){
            return response
          } 

        if(response.status === 417){
            return response
          } 
        if (!response.ok){
            throw json ({message:"Could not register user"}, {status: 500})
          }

          return redirect("/")
    }
}

export default AuthentificationPage