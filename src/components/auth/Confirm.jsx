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
      <div className=" mb-3 text-right p-2">
        <label htmlFor="password" className=" block text-neutral-600 mb-1">
          کد تایید ارسال شده به شماره "{mobile}" را وارد کنید
        </label>
        <input
          type="text"
          id="password"
          className="w-full text-black p-2 px-3 rounded-lg bg-slate-200 focus:outline-none focus:border-none"
          placeholder="کد تایید"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Toaster />
      </div>
      <div className="p-2">
        <button
          type="submit"
          className="border py-1 text-lg bg-sky-900 border-sky-900 mb-1 text-white rounded-lg transition duration-300 w-full py-2 hover:bg-transparent hover:text-sky-900 hover:border-sky-900"
        >
          تایید و ورود
        </button>
      </div>
    </form>
  );
}

export default Confirm;
