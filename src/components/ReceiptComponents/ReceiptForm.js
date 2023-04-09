import React from "react";

import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  redirect,
  json,
  useLoaderData,
} from "react-router-dom";
import { getAuthToken } from "../../util/Auth";
import { currencyTypes, purchaseTypes } from "../../data/paymenttypes";

function ReceiptForm({ receiptData, title, method }) {
  const customers = useLoaderData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const date = new Date().toISOString().slice(0, 10);
  const data = useActionData();

  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }
  return (
    <React.Fragment>
      
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}

      <Form method={method}>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Create {title}
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Input details here.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Receipt Number
              </label>
              <div className="mt-2">
                <input
                  placeholder="Receipt Number"
                  name="receipt_number"
                  type="text"
                  disabled
                  defaultValue={receiptData ? receiptData.receipt_number : ""}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Receipt Amount
              </label>
              <div className="mt-2">
                <input
                  placeholder="Receipt Amount"
                  name="receipt_amount"
                  type="number"
                  step="0.0001"
                  defaultValue={receiptData ? receiptData.amount : 0}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="Description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <input
                  placeholder="Description"
                  name="description"
                  type="text"
                  defaultValue={receiptData ? receiptData.description : ""}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Select currency
              </label>
              <div className="mt-2">
                <select
                  placeholder="Currency"
                  name="currency"
                  type="text"
                  defaultValue={receiptData ? receiptData.currency : "KES"}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                 {currencyTypes.map((type) => (
                    <option key={type.id} value={type.currency_type}>
                      {" "}
                      {type.currency_type}
                    </option>
                  ))}



                </select>
              </div>
            </div>

            <div className="">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Customer
              </label>
              <div className="mt-2">
                <select
                  name="customer"
                  type="text"
                  required
                  defaultValue={
                    receiptData ? receiptData.customer.customer_name : ""
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {customers.map((customer) => (
                    <option key={customer.id} value={customer.customer_name}>
                      {" "}
                      {customer.customer_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Sale Type
              </label>
              <div className="mt-2">
                <select
                  name="sale_type"
                  type="text"
                  required
                  defaultValue={
                    receiptData ? receiptData.purchase_type : "cash"
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {purchaseTypes.map((type) => (
                    <option key={type.id} value={type.purchase_type}>
                      {" "}
                      {type.purchase_type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p>
              <label>Date</label>
              <input
                name="date"
                type="date"
                required
                defaultValue={receiptData ? receiptData.date : date}
              ></input>
            </p>
          </div>

          <div className=" px-4 py-3 pb-10 text-right sm:px-6">
            <button
              type="button"
              onClick={cancelHandler}
              disabled={isSubmitting}
              className="inline-flex justify-center rounded-md bg-indigo-600 mr-5 py-2 px-3 text-sm font-semibold text-white  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Cancel
            </button>
            <button
              disabled={isSubmitting}
              className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              {isSubmitting ? "Submitting..." : "Save"}
            </button>
          </div>
        </div>
      </Form>
    </React.Fragment>
  );
}

export default ReceiptForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();

  const ReceiptData = {
    currency: data.get("currency"),
    description: data.get("description"),
    date: data.get("date"),
    sale_type: data.get("sale_type"),
    customer_name: data.get("customer"),
  };

  let url = "/receipt";
  if (method === "POST") {
    const response = await fetch(url, {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(ReceiptData),
    });
    if (!response.ok) {
      window.alert("failed");
      throw json({ message: "Failed to save the invoice" }, { status: 500 });
    }
    return redirect("/receipt");
  } else {
    const id = params.id;
    url = "/receipt/" + id;
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(ReceiptData),
    });
    if (!response.ok) {
      window.alert("failed update");
      throw json({ message: "Failed to update" }, { status: 500 });
    }

    return redirect("/receipt");
  }
}

export async function Loader() {
  const token = getAuthToken();
  const response = await fetch("/customer", {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (!response.ok) {
    throw json({ message: "Cant get customers" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}
