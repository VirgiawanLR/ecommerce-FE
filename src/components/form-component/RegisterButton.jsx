import React from "react";

function RegisterButton(props) {
  return (
    <button
      type="submit"
      className="w-full text-white bg-sky-600 hover:bg-sky-700 
      focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium 
      rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 
    dark:hover:bg-sky-700 dark:focus:ring-sky-800"
    >
      {props.text}
    </button>
  );
}

export default RegisterButton;
