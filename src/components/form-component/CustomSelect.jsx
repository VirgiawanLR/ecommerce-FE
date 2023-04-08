import { useField } from "formik";
import React from "react";

function CustomSelect({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <select
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? " bg-red-50 border-red-500 text-red-400 border-2" +
              " text-sm rounded-lg focus:ring-red-500 focus:border-red-500" +
              " block w-full p-2.5 dark:bg-red-700 dark:border-red-600" +
              " dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500" +
              " dark:focus:border-red-500"
            : " bg-gray-50 border border-gray-300 text-gray-900" +
              " text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500" +
              " block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600" +
              " dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" +
              " dark:focus:border-blue-500"
        }
      />
    </>
  );
}

export default CustomSelect;
