import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Breadcrumbs } from "@material-tailwind/react";

function PurchasingNav() {
  return (
    <React.Fragment>
      <div className="flex space-x-11 py-5 ">
        <Breadcrumbs>
          <NavLink to="." className="opacity-60">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>

              <span> All Invoices</span>
            </div>
          </NavLink>
        </Breadcrumbs>

        <Breadcrumbs>
          <div className="flex justify">
            <ShoppingCartIcon strokeWidth={1} className="h-6 w-6" />
            <NavLink to="./new">Purchase</NavLink>
          </div>
        </Breadcrumbs>
      </div>
    </React.Fragment>
  );
}

export default PurchasingNav;
