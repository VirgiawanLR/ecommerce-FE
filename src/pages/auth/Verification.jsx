import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Verification(props) {
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let routerString = location.pathname;
  routerString = routerString.split("/verification/")[1];

  const verifying = async () => {
    const response = await axios.patch(
      `http://localhost:3001/user/verify/account`,
      {},
      {
        headers: {
          Authorization: `Bearer ${routerString}`,
        },
      }
    );
    console.log(response);
    if (response.data.isSuccess) {
      setVerified(true);
    }
  };

  useEffect(() => {
    verifying();
  }, []);

  return (
    <div
      className=" pt-60 px-4 lg:pt-64 primary-font font-bold flex flex-col
     justify-center items-center text-3xl text-secondary"
    >
      {" "}
      {verified ? (
        <div>
          <h1 className="pb-8">Your account is verified! </h1>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="w-full text-white bg-teal-500 hover:bg-teal-700 
            focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium 
            rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 
          dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            Go to Login Page
          </button>
        </div>
      ) : (
        "Loading . . ."
      )}
    </div>
  );
}

export default Verification;
