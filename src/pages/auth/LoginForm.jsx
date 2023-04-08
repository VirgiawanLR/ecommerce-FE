import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginCheck } from "../../features/users/userSlice";
import { useEffect, useState } from "react";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state) => state.user.loginUser);
  const [response, setResponse] = useState(null);

  const onSubmit = async (values, action) => {
    try {
      const result = await dispatch(loginCheck(values));
      localStorage.setItem("token_shutter", result.data.token);
      if (result.data.isSuccess) {
        response(result.data);
        setResponse(null);
        navigate("/");
      } //redirect to home page after login success
      else {
        setResponse(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {}, [response]);

  return (
    <section className="dark:bg-gray-900 pt-20 px-4 lg:pt-32 secondary-font">
      <div className="flex flex-col lg:flex-row items-center gap-8 justify-center px-6 pt-8 mx-auto lg:py-0 relative">
        <div className="-mb-16 scale-105 lg:mb-0 lg:-mr-12 lg:scale-[1.15]">
          <img
            src={require("../../assets/images/cart-icon.png")}
            height={450}
            width={450}
            alt="login-img.avif"
            className="rounded-xl bg-teal-500 opacity-90"
          />
        </div>
        <div
          className="w-11/12 md:w-full bg-white shadow-xl rounded-lg dark:border md:mt-0 z-50
          sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 pb-12"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {!response?.isSuccess && (
              <div className="text-red-400 font-bold">{response?.message}</div>
            )}
            <h1 className="text-xl font-extrabold leading-tight text-dark md:text-2xl dark:text-white main-font tracking-normal">
              Sign in to your account
            </h1>
            {selector.isSuccessed && selector.message ? null : (
              <div className="text-red-600 text-xs px-1 font-semibold">
                {selector.message}
              </div>
            )}
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={onSubmit}
            >
              {(props) => {
                return (
                  <Form className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-dark dark:text-white"
                      >
                        Your email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-dark sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-dark dark:text-white"
                      >
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-dark sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="remember"
                            className="text-gray-500 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-primary hover:underline dark:text-primary"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-primary hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-teal-800 dark:focus:ring-primary"
                    >
                      Sign in
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?{" "}
                      <button
                        onClick={() => navigate("/register")}
                        className="font-medium text-primary hover:underline dark:text-primary"
                      >
                        Sign up
                      </button>
                    </p>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
