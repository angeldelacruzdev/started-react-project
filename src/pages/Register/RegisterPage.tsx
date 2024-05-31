import { Link } from "react-router-dom";
import FormFooter from "../../components/FormFooter";
import { FormGrid } from "../../components/FormGrid";
import { RegisterForm } from "./components/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <FormGrid title="Register Form">
        <RegisterForm />
        <FormFooter>
          Do you have a account yet?{" "}
          <Link
            to="/"
            className="text-blue-500 focus:outline-none focus:underline hover:underline"
          >
            Log In
          </Link>
          .
        </FormFooter>
      </FormGrid>
    </>
  );
};

export default RegisterPage;
