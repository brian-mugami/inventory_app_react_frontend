import React, { useState } from "react";

import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  redirect,
  json,
  useLoaderData,
  defer,
} from "react-router-dom";
import { getAuthToken } from "../../util/Auth";
import {
  currencyTypes,
  destinationTypes,
  purchaseTypes,
} from "../../data/paymentTypes";

let itemList = [];
let invoiceBalanced = false;
let isExpense = false;
let existingData 

function InvoiceForm({ invoiceData, title, method }) {
  existingData = invoiceData
  const navigate = useNavigate();
  const [numberIsValid, setNumberIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [tableRows, setTableRows] = useState([
    {
      item_name: "",
      item_quantity: 0,
      buying_price: 0,
      item_cost: 0,
    },
  ]);
  const [invoiceTotal, setInvoiceTotal] = useState(0);
  const navigation = useNavigation();
  const date = new Date().toISOString().slice(0, 10);
  const { suppliers, items, expenseAccounts } = useLoaderData();
  const data = useActionData();
  const [expense, setExpense] = useState(false);

  const handleAddRow = () => {
    setTableRows((rows) => [
      ...rows,
      {
        item_name: " ",
        item_quantity: 0,
        buying_price: 0,
        item_cost: 0,
      },
    ]);
  };

  const handleRemoveRow = (index) => {
    setTableRows((rows) => rows.filter((row, i) => i !== index));
  };

  function checkInvoiceNumberHandler(event) {
    if (event.target.value.length >= 3) {
      setNameIsValid(true);
    }
  }

  function checkExpenseHandler(event) {
    if (event.target.value === "expense") {
      setExpense(true);
    }
  }

  isExpense = expense
  function checkInvoiceAmountHandler(event) {
    if (event.target.value > 0) {
      const value = parseFloat(event.target.value);
      setInvoiceTotal(value);
      setNumberIsValid(true);
    }
  }

  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }

  const totalSum = tableRows.reduce((acc, row) => acc + row.item_cost, 0);
  const isInvoiceBalanced = totalSum === invoiceTotal;
  if (isInvoiceBalanced === true) {
    invoiceBalanced = true;
  }

  const handleInputChange = (event, index, key) => {
    const value = event.target.value;
    setTableRows((rows) => {
      const newRows = [...rows];
      newRows[index][key] = value;
      if (key === "item_quantity" || key === "buying_price") {
        newRows[index].item_cost =
          newRows[index].item_quantity * newRows[index].buying_price;
      }
      return newRows;
    });
  };

  itemList = tableRows;

  let itemsAvailable = false;
  if (invoiceData) {
    itemsAvailable = (invoiceData.purchase_items.length > 0) === true;
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
      {data && data.message && <p>{data.message}</p>}

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
                invoice number
              </label>
              <div className="mt-2">
                <input
                  placeholder="Invoice Number"
                  name="inv_number"
                  type="text"
                  onChange={checkInvoiceNumberHandler}
                  required
                  defaultValue={invoiceData ? invoiceData.invoice_number : ""}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Invoice Amount
              </label>
              <div className="mt-2">
                <input
                  required
                  placeholder="Invoice Amount"
                  name="inv_amount"
                  type="number"
                  step="0.0001"
                  onChange={checkInvoiceAmountHandler}
                  defaultValue={invoiceData ? invoiceData.amount : invoiceTotal}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="Item-Volume"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <input
                  placeholder="Description"
                  name="description"
                  type="text"
                  defaultValue={invoiceData ? invoiceData.description : ""}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Select currency
              </label>
              <div className="mt-2">
                <select
                  placeholder="Currency"
                  name="currency"
                  type="text"
                  defaultValue={invoiceData ? invoiceData.currency : "KES"}
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
                Destination Type
              </label>
              <div className="mt-2">
                <select
                  name="destinationType"
                  type="text"
                  required
                  defaultValue={
                    invoiceData ? invoiceData.destination_type : "stores"
                  }
                  onChange={checkExpenseHandler}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {destinationTypes.map((type) => (
                    <option key={type.id} value={type.destination_type}>
                      {" "}
                      {type.destination_type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Supplier
              </label>
              <div className="mt-2">
                <select
                  name="supplier"
                  type="text"
                  required
                  defaultValue={
                    invoiceData ? invoiceData.supplier.supplier_name : ""
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {suppliers.map((supplier) => (
                    <option key={supplier.id} value={supplier.supplier_name}>
                      {" "}
                      {supplier.supplier_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Purchase Type
              </label>
              <div className="mt-2">
                <select
                  name="purchase_type"
                  type="text"
                  required
                  defaultValue={
                    invoiceData ? invoiceData.purchase_type : "cash"
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
            {expense=== true ? (
              <p>
                <label>Expense Account</label>
                <select
                  name="expense_account"
                  type="text"
                  required
                  defaultValue={
                    invoiceData ? invoiceData.expense_account.account_name : ""
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {" "}
                  {expenseAccounts.map((account) => (
                    <option key={account.id} value={account.account_name}>
                      {" "}
                      {account.account_name}
                    </option>
                  ))}
                </select>
              </p>
            ): ""}

            <p>
              <label>Date</label>
              <input
                name="inv_date"
                type="date"
                defaultValue={invoiceData ? invoiceData.date : date}
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
              disabled={
                isSubmitting ||
                !nameIsValid ||
                !numberIsValid ||
                !isInvoiceBalanced
              }
              className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              {isSubmitting ? "Submitting..." : "Save"}
            </button>
          </div>
        </div>
        <div>
          <button className="btn btn-secondary" onClick={handleAddRow}>
            Add Row
          </button>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Line Number</th>
                <th scope="col">Item Name</th>
                <th scope="col">Item Quantity</th>
                <th scope="col">Buying Price</th>
                <th scope="col">Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {itemsAvailable
                ? invoiceData.purchase_items.map((item, index) => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>
                        <input
                          name="item_name"
                          type="text"
                          defaultValue={item.item.item_name}
                          list="options"
                          onChange={(e) =>
                            handleInputChange(e, index, "item_name")
                          }
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        />
                        <datalist id="options">
                          {items.map((item) => (
                            <option key={item.id} value={item.item_name} />
                          ))}
                        </datalist>
                      </td>
                      <td>
                        <input
                          required
                          type="number"
                          name="item_quantity"
                          min="1"
                          defaultValue={item.item_quantity}
                          onChange={(e) =>
                            handleInputChange(e, index, "item_quantity")
                          }
                        />
                      </td>
                      <td>
                        <input
                          required
                          type="number"
                          min="1"
                          step="0.01"
                          defaultValue={item.buying_price}
                          onChange={(e) =>
                            handleInputChange(e, index, "buying_price")
                          }
                        />
                      </td>
                      <td>{item.item_cost}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleRemoveRow(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                : tableRows.map((row, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <input
                          name="item_name"
                          type="text"
                          value={row.item_name}
                          list="options"
                          onChange={(e) =>
                            handleInputChange(e, index, "item_name")
                          }
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        />
                        <datalist id="options">
                          {items.map((item) => (
                            <option key={item.id} value={item.item_name} />
                          ))}
                        </datalist>
                      </td>
                      <td>
                        <input
                          required
                          type="number"
                          name="item_quantity"
                          min="1"
                          value={row.item_quantity}
                          onChange={(e) =>
                            handleInputChange(e, index, "item_quantity")
                          }
                        />
                      </td>
                      <td>
                        <input
                          required
                          type="number"
                          min="1"
                          step="0.01"
                          value={row.buying_price}
                          onChange={(e) =>
                            handleInputChange(e, index, "buying_price")
                          }
                        />
                      </td>
                      <td>{row.item_cost}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleRemoveRow(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </Form>
    </React.Fragment>
  );
}

export default InvoiceForm;

export async function suppliersLoader() {
  const token = getAuthToken();
  const response = await fetch("/supplier", {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (!response.ok) {
    throw json({ message: "Cant get suppliers" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}

async function ItemsLoader() {
  const token = getAuthToken();

  const response = await fetch("/item", {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (!response.ok) {
    throw json({ message: "The response was not ok" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}

async function AccountLoader() {
  const token = getAuthToken();

  const response = await fetch("/expense/account", {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (!response.ok) {
    throw json({ message: "The response was not ok" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}

export async function Loader() {
  return defer({
    items: await ItemsLoader(),
    suppliers: await suppliersLoader(),
    expenseAccounts: await AccountLoader(),
  });
}

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();
  let InvoiceData;

  if (isExpense === true) {
    InvoiceData = {
      invoice_number: data.get("inv_number"),
      amount: data.get("inv_amount"),
      currency: data.get("currency"),
      description: data.get("description"),
      destination_type: data.get("destinationType"),
      date: data.get("inv_date"),
      purchase_type: data.get("purchase_type"),
      supplier_name: data.get("supplier"),
      expense_account_name: data.get("expense_account"),
    };
  } else {
    InvoiceData = {
      invoice_number: data.get("inv_number"),
      amount: data.get("inv_amount"),
      currency: data.get("currency"),
      description: data.get("description"),
      destination_type: data.get("destinationType"),
      date: data.get("inv_date"),
      purchase_type: data.get("purchase_type"),
      supplier_name: data.get("supplier"),
    };
  }
    const InvoiceUpdateData = {
      invoice_number: data.get("inv_number"),
      amount: data.get("inv_amount"),
      currency: data.get("currency"),
      description: data.get("description"),
      destination_type: data.get("destinationType"),
      purchase_type: data.get("purchase_type"),
      supplier_name: data.get("supplier"),
      expense_account_name: data.get("expense_account"),
    };

    let url = "/invoice";
    if (method === "POST") {
      const response = await fetch(url, {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(InvoiceData),
      });
      if (response.status === 400) {
        return response;
      }
      if (response.status === 404) {
        return response;
      }
      if (response.status === 500) {
        return response;
      }
      if (!response.ok) {
        window.alert("Please enter a valid invoice");
        return redirect("./");
      }
      console.log(response)
      const invoiceId = (await response.json()).id;
      const lines = {
        invoice_id: invoiceId,
        items_list: itemList.map((item) => ({
          item_name: item.item_name,
          buying_price: item.buying_price,
          item_quantity: item.item_quantity,
        })),
      };
      const invoiceLines = await fetch("/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(lines),
      });
      if (invoiceLines.status === 400) {
        return invoiceLines;
      }
      if (invoiceLines.status === 500) {
        return invoiceLines;
      }
      if (invoiceLines.status === 404) {
        return invoiceLines;
      }
      if (!invoiceLines.ok) {
        window.alert("error in invoice lines");
        return redirect("./");
      }
      if (invoiceBalanced === false) {
        window.alert("Invoice lines amount does not match header amount!");
      }
      return redirect("/invoice");
    } else {
      const id = params.id;
      url = "/invoice/" + id;
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(InvoiceUpdateData),
      });
      if (response.status === 404) {
        return response;
      }
      if (response.status === 400) {
        return response;
      }
      if (!response.ok) {
        window.alert("failed update");
        throw json({ message: "Failed to update" }, { status: 500 });
      }
      const invoiceUpdateLines = {
        invoice_id: id,
        item_list:itemList.map((item) => ({
          item_name: item.item_name,
          buying_price: item.buying_price,
          item_quantity: item.item_quantity,
        })),
      };
      for(let item of existingData.purchase_items){
        const lineResponse = await fetch("/purchase/"+item.id,{
          method:"PATCH",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(invoiceUpdateLines)
        });
        if (lineResponse.status===400){
          return lineResponse
        }
        if(lineResponse.status===404){
          return lineResponse
        }
      }
      return redirect("/invoice");
    }
  }

