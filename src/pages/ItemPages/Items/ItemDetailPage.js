import React from "react";
import { json,useRouteLoaderData, redirect } from "react-router-dom";
import Item from "../../../components/ItemComponents/ItemsComponents/Item";
import { getAuthToken } from "../../../util/Auth";

function ItemDetailPage(){
    const item = useRouteLoaderData("item-main")
    return(
        <React.Fragment>
                    <Item item={item}/>
        </React.Fragment>
    )
    
}

export default ItemDetailPage;

export async function loader({request, params}){
    let url = 'https://flask-inventory.onrender.com/item/'
    const token = getAuthToken()
    const id = params.id
    const response = await fetch(url + id, {
        method:"get",
        headers:{
            "Authorization": "Bearer " + token,
            "Access-Control-Allow-Origin": "*",
        }
    })

    if(!response.ok){
        throw json({message: "Wrong Url"}, {status: 404})
    }

    const resData = await response.json()
    return resData
}


export async function action({request,params}){
    const token = getAuthToken();

    const id = params.id;
    const response = await fetch("https://flask-inventory.onrender.com/item/" + id, {
        method: request.method,
        headers : {
            'Authorization': 'Bearer ' + token,
            "Access-Control-Allow-Origin": "*",

            
        }
    });
    if (!response.ok) {
        throw json(
          { message: 'Could not delete item.' },
          {
            status: 500,
          }
        );
      }
      return redirect("/item/main")
}