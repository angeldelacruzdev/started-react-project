import { SubmitHandler, useForm } from "react-hook-form";
import FormFooter from "../../../components/FormFooter";
import { Link } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;

};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  console.log(watch("email"));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
          >
            Email Address
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            id="email"
            placeholder="example@example.com"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>
        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <label
              htmlFor="password"
              className="text-sm text-gray-600 dark:text-gray-200"
            >
              Password
            </label>
            <a
              href="#"
              className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            {...register("password", { required: true })}
            id="password"
            placeholder="Your Password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            Sign in
          </button>
        </div>
      </form>
      <FormFooter>
      Don't have an account yet?{" "}
        <Link
          to="/register"
          className="text-blue-500 focus:outline-none focus:underline hover:underline"
        >
          Sign up
        </Link>
        .
      </FormFooter>
    </>
  );
};
