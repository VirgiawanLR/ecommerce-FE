import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomForm from "../../components/form-component/CustomForm";
import CustomCheckbox from "../../components/form-component/CustomCheckbox";
import { postUserData } from "../../features/users/userSlice";
import { useDispatch } from "react-redux";
import RegisterButton from "../../components/form-component/RegisterButton";
import { useNavigate } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [termsValue, setTermsValue] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const registerSchema = Yup.object().shape({
    fullname: Yup.string().required("Must not blank"),
    username: Yup.string().required("Must not blank"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Must not blank"),
    password: Yup.string()
      .min(3, "password must at least 3 characters")
      .required("Must not blank"),
  });

  const onSubmit = (values, actions) => {
    if (!values.terms) {
      setTermsValue(true);
    } else {
      const { email, fullname, username, password } = values;
      dispatch(
        postUserData({
          fullname: fullname.toLowerCase(),
          username,
          email,
          password,
        })
      );
      setTermsValue(false);

      setIsSubmit(true);
      actions.resetForm();
    }
  };

  return (
    <section className="background-curves pb-24 bg-gray-50 dark:bg-gray-900 pt-16 px-8 secondary-font">
      <div
        className="z-auto flex flex-col items-center text-center justify-center px-6 
      pt-8 mx-auto"
      >
        <div
          className="w-full bg-white rounded-lg shadow dark:border 
        md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 text-left"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {termsValue && (
              <h1
                className="placeholder-red-400 bg-red-50 border-2 border-red-500 
              text-red-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 
              block w-full p-2.5 dark:bg-gray-700 dark:border-2 dark:border-red-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 
              dark:focus:border-red-500"
              >
                Please accept the service's terms and condition
              </h1>
            )}
            {isSubmit && (
              <h1
                className="placeholder-sky-400 bg-sky-50 border-2 border-sky-500 
              text-sky-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 
              block w-full p-2.5 dark:bg-gray-700 dark:border-2 dark:border-sky-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 
              dark:focus:border-sky-500"
              >
                Check your email for verification
              </h1>
            )}
            <h1
              className="text-xl font-extrabold text-primary main-font leading-tight tracking-tight 
              md:text-2xl dark:text-white"
            >
              Create an account
            </h1>
            <Formik
              initialValues={{
                fullname: "",
                username: "",
                email: "",
                password: "",
              }}
              validationSchema={registerSchema}
              onSubmit={onSubmit}
            >
              {(props) => {
                return (
                  <Form className="space-y-4 md:space-y-6">
                    <div>
                      <CustomForm
                        name="fullname"
                        type="text"
                        id="fullname"
                        placeholder="Fullname"
                      />
                    </div>
                    <div>
                      <CustomForm
                        name="username"
                        type="text"
                        id="username"
                        placeholder="Username"
                      />
                    </div>
                    <div>
                      <CustomForm
                        name="email"
                        type="text"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <CustomForm
                        name="password"
                        type="password"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <CustomCheckbox
                      type="checkbox"
                      id="terms"
                      name="terms"
                      aria-describedby="terms"
                    />
                    <RegisterButton text="Register" />
                  </Form>
                );
              }}
            </Formik>
            <div className="space-y-4 md:space-y-6" action="#">
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="font-medium text-teal-600 hover:underline 
                  dark:text-teal-500"
                >
                  Login here
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-36">
          <span className=" font-medium text-sm text-white">
            ©2023, Virgiawan Listanto Rahagung
          </span>
        </div>
      </div>
    </section>
  );
}

export default Register;
