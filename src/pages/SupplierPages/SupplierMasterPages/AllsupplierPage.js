import React, { Suspense } from "react"
import { Await,json, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../../../util/Auth";
import SupplierList from "../../../components/SupplierComponents/Supplierlist";
import { defer } from "react-router-dom";

function SupplierPage(){
    const {suppliers} = useRouteLoaderData("suppliers")
    return(
        <React.Fragment>
            <Suspense fallback={<p style={{textAlign: 'center'}}>Loading....</p>}>
            <Await resolve={suppliers}>
                    {(lloadedSuppliers) => <SupplierList suppliers={lloadedSuppliers}/>}
                </Await>
            </Suspense>
        </React.Fragment>
    )
}

export default SupplierPage;

async function suppliersLoader(){
    const token = getAuthToken()
    const response = await fetch("http://localhost:8000/supplier", {
        method:"get",
        headers:{
            "Authorization": "Bearer "+ token
        }
    })
    if(!response.ok){
        throw json({message:"Cant get suppliers"}, {status:500})
    }else{
        const resData = await response.json()
        return resData
    };
}

export function loader (){
    return(
        defer({
            suppliers: suppliersLoader()
        })
    )}