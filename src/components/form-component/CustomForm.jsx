import React from "react";
import { useField } from "formik";

function CustomForm({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      {props.name === "description" ? (
        <>
          <textarea
            {...field}
            {...props}
            rows="4"
            className={
              meta.touched && meta.error
                ? " border-red-500 focus:ring-red-500 border-2 rounded-lg bg-red-50" +
                  " placeholder-red-400 block p-2.5 w-full text-sm text-red-900" +
                  " focus:border-red-500 dark:bg-red-700 dark:border-red-600" +
                  " lg:placeholder:text-base dark:placeholder-red-400 dark:text-white" +
                  " dark:focus:ring-red-500 dark:focus:border-red-500"
                : " block p-2.5 w-full text-sm text-gray-900 bg-gray-50" +
                  " rounded-lg border border-gray-300 focus:ring-blue-500" +
                  " focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600" +
                  " lg:placeholder:text-base dark:placeholder-gray-400 dark:text-white" +
                  " dark:focus:ring-blue-500 dark:focus:border-blue-500"
            }
          ></textarea>
          {meta.touched && meta.error && (
            <div className=" text-red-600 text-xs py-1 px-1 font-semibold">
              {meta.error}
            </div>
          )}
        </>
      ) : (
        <>
          <input
            {...field}
            {...props}
            className={
              meta.touched && meta.error
                ? " placeholder:text-sm text-sm placeholder-red-400 bg-red-50 border-2" +
                  " border-red-500 text-red-900 h-10 my-auto" +
                  " sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full" +
                  " p-2.5 dark:bg-gray-700 dark:border-2 dark:border-red-600 dark:placeholder-gray-400" +
                  " dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" +
                  " lg:placeholder:text-base lg:text-base"
                : " placeholder:text-sm text-sm bg-gray-50 border border-gray-300 text-gray-900" +
                  " sm:text-sm rounded-lg h-10 my-auto" +
                  " focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700" +
                  " dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" +
                  " dark:focus:ring-blue-500 dark:focus:border-blue-500" +
                  " lg:placeholder:text-base lg:text-base"
            }
          />
          {meta.touched && meta.error && (
            <div className=" text-red-600 text-xs py-1 px-1 font-semibold">
              {meta.error}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default CustomForm;
