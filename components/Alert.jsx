import React, { useEffect, useState } from "react";

const Alert = ({ type = "SUCCESS", message }) => {
  const [showAlert, setShowAlert] = useState(true);
  let msgType = getMsgType(type);
  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }, []);

  function getMsgType(type) {
    let msg;
    switch (type) {
      case "ERROR":
        msg = "red";
        break;
      case "WARNING":
        msg = "yellow";
        break;
      default:
        msg = "green";
    }
    return msg;
  }
  return (
    showAlert && (
      <div>
        <div
          className={`alert bg-${msgType}-100 rounded-lg py-5 px-6 mb-3 text-base text-${msgType}-700 inline-flex items-center w-full alert-dismissible fade show`}
          role="alert"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times-circle"
            className="w-4 h-4 mr-2 fill-current"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
            ></path>
          </svg>
          <strong className="mr-1">{type} :</strong>
          {message}
          <button
            type="button"
            className="btn-close box-content w-4 h-4 p-1 ml-auto text-yellow-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
};

export default Alert;
