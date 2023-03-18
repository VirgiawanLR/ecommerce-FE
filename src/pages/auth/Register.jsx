import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomForm from "../../components/form-component/CustomForm";
import CustomCheckbox from "../../components/form-component/CustomCheckbox";
import { postUserData } from "../../features/users/userSlice";
import { useDispatch } from "react-redux";
import RegisterButton from "../../components/form-component/RegisterButton";

function Register() {
  const dispatch = useDispatch();

  const loginSchema = Yup.object().shape({
    fullname: Yup.string().required("Must not blank"),
    username: Yup.string().required("Must not blank"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Must not blank"),
    password: Yup.string()
      .min(3, "password must at least 3 characters")
      .required("Must not blank"),
    terms: Yup.boolean().oneOf(
      [true],
      "Please accept the service's terms and condition"
    ),
  });

  const onSubmit = (values, actions) => {
    const { email, fullname, username, password } = values;
    dispatch(
      postUserData({
        fullname: fullname.toLowerCase(),
        username,
        email,
        password,
        isVerified: false,
        role: "user",
      })
    );
    actions.resetForm();
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 secondary-font">
      <div
        className="flex flex-col items-center text-center justify-center px-6 
      py-8 mx-auto md:h-screen lg:py-0"
      >
        <h1 className="mt-10 mb-6 main-font font-extrabold text-dark">
          Register now!
        </h1>
        <h3 className=" font-extralight mb-10 text-lg text-secondary">
          Register now and start shopping in the most affordable ecommerce
          platform
        </h3>
        <div
          className="w-full bg-white rounded-lg shadow dark:border 
        md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 text-left"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
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
              validationSchema={loginSchema}
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
                <a
                  href="#terms"
                  className="font-medium text-sky-600 hover:underline 
                  dark:text-sky-500"
                >
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
