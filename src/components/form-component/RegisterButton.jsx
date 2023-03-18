import React from "react";

function RegisterButton(props) {
  return (
    <button
      type="submit"
      className="w-full text-white bg-green-600 hover:bg-green-700 
      focus:ring-4 focus:outline-none focus:ring-green-300 font-medium 
      rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 
    dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      {props.text}
    </button>
  );
}

export default RegisterButton;
