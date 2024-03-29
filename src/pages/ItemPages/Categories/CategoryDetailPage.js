import React from "react";
import { json,useRouteLoaderData, redirect } from "react-router-dom";
import CategoryItem from "../../../components/ItemComponents/CategoryComponents/CategoryItem";
import { getAuthToken } from "../../../util/Auth";

function CategoryDetailPage(){
    const category = useRouteLoaderData("category-detail")
    return(
        <React.Fragment>
                    <CategoryItem category={category}/>
        </React.Fragment>
    )
    
}

export default CategoryDetailPage;

export async function loader({request, params}){
    let url = 'https://flask-inventory.onrender.com/item/category/'
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
    const response = await fetch("https://flask-inventory.onrender.com/item/category/" + id, {
        method: request.method,
        headers : {
            'Authorization': 'Bearer ' + token,
            "Access-Control-Allow-Origin": "*",
        }
    });
    if (!response.ok) {
        throw json(
          { message: 'Could not delete category.' },
          {
            status: 500,
          }
        );
      }
      return redirect("/item/category")
}