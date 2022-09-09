import { gql, useMutation, useQuery } from "@apollo/client";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
import { CHANGE_PASSWORD } from "../../gql/mutations";
import { GET_ALL_PRODUCTS } from "../../gql/queries";
import { Gqlclient } from "../../apollo-client";

const Index = () => {
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password, currentPassword, confirmPassword);
    if (password != confirmPassword) {
      alert("confirm password Failed!!!");
      return;
    }
    setLoading(true);
    Gqlclient.mutate({
      mutation: CHANGE_PASSWORD,
      variables: {
        currentPassword,
        password,
        passwordConfirmation: confirmPassword,
      },
    })
      .then((res) => {
        const jwt = res.data.changePassword.jwt;
        localStorage.setItem("jwt", jwt);
        console.log(res);
       
      })
      .catch((err) => console.log("err", err))
      .finally(()=> setLoading(false));
  };

  const { loading, error, data } = useMutation(CHANGE_PASSWORD);
  if (data || error) {
    console.log("data", data, error);
  }
  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      Router.push("/");
    }
  }, []);

  return (
    <div className="flex justify-center flex-col items-center py-6 w-full">
      <div className="shadow-md border-red-100 grid place-items-center w-full md:w-2/4 hover:drop-shadow-xl">
        <Image
          className="cursor-pointer"
          height={180}
          width={180}
          src="https://www.kindpng.com/picc/m/146-1468319_edit-profile-female-icon-png-transparent-png.png"
          alt="profile "
          onClick={() => {
            alert("To do");
          }}
        />
        <div className=" p-4 rounded-lg">
          <h3>Name : Rohan Karankot</h3>
          <h3>Email : Rohan@Karankot.com</h3>
          <a
            className="text-blue-700 underline cursor-pointer"
            onClick={() => {
              setShowPasswordInput(showPasswordInput ? false : true);
            }}
          >
            click to change password
          </a>
          {showPasswordInput ? (
            <div className="my-4">
              <form onSubmit={handleSubmit}>
                <input
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  value={currentPassword}
                  type="text"
                  placeholder="Current Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-2"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="text"
                  placeholder="New Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-2"
                />
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  type="text"
                  placeholder="Confirm Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-2"
                />
                <button
                  type="submit"
                  disabled={Loading}
                  className={
                    !Loading
                      ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mx-14"
                      : "text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mx-14 cursor-not-allowed"
                  }
                >
                  {Loading && (
                    <svg
                      role="status"
                      className="inline mr-3 w-4 h-4 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                  Submit
                </button>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
