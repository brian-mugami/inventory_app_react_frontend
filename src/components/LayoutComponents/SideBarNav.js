import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

import React from "react";
import { Form, NavLink } from "react-router-dom";

export default function SideBarNav() {
  const { collapseSidebar } = useProSidebar();
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <Menu>
          <MenuItem component={<NavLink to="/home" />}> Dashboard</MenuItem>
          <SubMenu label="Invoices">
            <MenuItem component={<NavLink to="invoice" />}> Invoices </MenuItem>
            <MenuItem component={<NavLink to="invoice/new" />}>
              {" "}
              Create New Invoice
            </MenuItem>
          </SubMenu>
          <SubMenu label="Receipts">
            <MenuItem component={<NavLink to="receipt" />}> Receipts </MenuItem>
            <MenuItem component={<NavLink to="receipt/new" />}>
              {" "}
              Create New Receipt{" "}
            </MenuItem>
          </SubMenu>
          <SubMenu label="Balances">
            <MenuItem component={<NavLink to="inventory-balance" />}>
              {" "}
              Inventory Balances{" "}
            </MenuItem>
            <MenuItem component={<NavLink to="bank-balances" />}>
              {" "}
              Bank Balances{" "}
            </MenuItem>
            <MenuItem component={<NavLink to="supplier-balance" />}>
              {" "}
              Supplier Balances{" "}
            </MenuItem>
            <MenuItem component={<NavLink to="customer-balance" />}>
              {" "}
              Customer Balances{" "}
            </MenuItem>
          </SubMenu>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
          <Form action="logout" method="post">
            <button className="btn btn-danger">Logout</button>
          </Form>
      </Sidebar>
      <main>
        <button className="btn btn-dark" onClick={() => collapseSidebar()}>
          <i class="bi bi-x-octagon"></i>
        </button>
      </main>
    </div>
  );
}
