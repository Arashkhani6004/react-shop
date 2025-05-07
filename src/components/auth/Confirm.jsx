import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { checkOtp } from "../../utils/auth";
import { setToken } from "../../cookie/token";
import { useNavigate } from "react-router";

function Confirm({ mobile }) {
  const [code, setCode] = useState("");
  let navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    const { response, error } = await checkOtp(mobile, code);
    console.log({ response, error });
    if (error) return toast.error(error.response.data.message);
    if (response) {
      toast.success("ورود با موفقیت انجام شد!");
      setToken(response.token);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className=" mb-3 text-left p-2">
        <label htmlFor="password" className=" block text-neutral-600 mb-1">
          ConfirmCode
        </label>
        <input
          type="text"
          id="password"
          className="w-full text-black p-2 rounded-md bg-white focus:bg-white focus:outline-none focus:border-none"
          placeholder="ConfirmCode..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Toaster />
      </div>
      <div className="p-2">
        <button
          type="submit"
          className="border py-1 bg-neutral-800 border-neutral-800 mb-1 text-white rounded-lg transition duration-300 w-full py-2 hover:bg-transparent hover:text-neutral-800 hover:border-neutral-800"
        >
          Confirm
        </button>
      </div>
    </form>
  );
}

export default Confirm;
