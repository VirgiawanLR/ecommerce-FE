import React from "react";
import { useField } from "formik";

function CustomForm({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? "placeholder-red-400 bg-red-50 border-2 border-red-500 text-red-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-2 dark:border-red-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            : "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }
      />
      {meta.touched && meta.error && (
        <div className=" text-red-600 text-xs py-1 px-1 font-semibold">
          {meta.error}
        </div>
      )}
    </>
  );
}

export default CustomForm;
