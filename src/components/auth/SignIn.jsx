import toast, { Toaster } from "react-hot-toast";
import { sendOtp } from "../../utils/auth";

function SignIn({ mobile, setMobile, password, setPassword, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();

    const { response, error } = await sendOtp(mobile, password);
    console.log({ response, error });
    if (error) return toast.error(error.response.data.message);
    if (!error) return setStep(2);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className=" mb-3 text-right p-2">
        <label htmlFor="mobile" className=" block text-neutral-600 mb-1">
          شماره همراه
        </label>
        <input
          type="text"
          id="mobile"
          className="w-full text-black p-2 px-3 rounded-lg bg-slate-200 focus:outline-none focus:border-none"
          placeholder="شماره همراه..."
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <Toaster />
      </div>
      <div className=" mb-3 text-right p-2">
        <label htmlFor="password" className=" block text-neutral-600 mb-1">
          رمز عبور
        </label>
        <input
          type="password"
          id="password"
          className="w-full text-black p-2 px-3 rounded-lg bg-slate-200 focus:outline-none focus:border-none"
          placeholder="رمز عبور..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="p-2">
        <button
          type="submit"
          className="border py-1 text-lg bg-sky-900 border-sky-900 mb-1 text-white rounded-lg transition duration-300 w-full py-2 hover:bg-transparent hover:text-sky-900 hover:border-sky-900"
        >
          ورود
        </button>
      </div>
    </form>
  );
}

export default SignIn;
