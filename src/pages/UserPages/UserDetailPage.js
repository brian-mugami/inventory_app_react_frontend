import { json, redirect, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";
import UserItem from "../../components/UserComponents/UserItem";
import React from "react";

function UserDetailPage(){
    const user = useRouteLoaderData('user-detail') 
    return(
    <React.Fragment>
    <UserItem user = {user}/>
    </React.Fragment>)
}

export default UserDetailPage;

export async function loader({params, request}){

    const id = params.userId
    const response = await fetch('http://localhost:8000/user/' + id)
    if (!response.ok){
        throw json(
            {message:'Could not get details of the user'},
            {status: 500}
        );
    }else{
        const resData = await response.json()
        return resData;
    }
} 

export async function action({params, request}){
    const token = getAuthToken()
    const id = params.userId
    const response = await fetch('http://localhost:8000/user/' + id, {
        method: request.method,
        headers: {
            'Authorization': "Bearer "+ token
        }
    });
    if(!response.ok){
        throw json(
            {message: 'Could not delete user'},
            {status: 500}
        )
    };
    return redirect ('/user')
}