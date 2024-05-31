import { LoginForm } from "./components/LoginForm";
import { FormGrid } from "../../components/FormGrid";

const HomePage = () => {
  return (
    <>
      <FormGrid title="Login Page">
        <LoginForm />
      </FormGrid>
    </>
  );
};

export default HomePage;
