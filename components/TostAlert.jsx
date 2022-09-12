import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TostAlert = (props) => {
  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

const msgProps = {
  position: "bottom-left",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
export const tostSuccess = (message) => {
  toast.success(message, msgProps);
};
export const tostWarn = (message) => {
  toast.warn(message, msgProps);
};
export const tostEror = (message) => {
  toast.error(message, msgProps);
};

export default TostAlert;
