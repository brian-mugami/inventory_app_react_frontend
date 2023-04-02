import { useRouteLoaderData } from "react-router-dom";
import ExpenseAccountForm from "../../components/Accountcomponents/ExpenseAccountForm";

function EditExpenseAccountPage() {
  const { account } = useRouteLoaderData("expense-account-detail");
  return (
    <ExpenseAccountForm method="patch" title="Expense" account={account} />
  );
}
export default EditExpenseAccountPage;
