import { useRouteLoaderData } from "react-router-dom";
import SalesAccountForm from "../../components/AccountComponents/SaleAccountForm";

function EditSalesAccountPage() {
  const { account } = useRouteLoaderData("sales-account-detail");
  return (
    <SalesAccountForm method="patch" title="Sales" account={account} />
  );
}
export default EditSalesAccountPage;