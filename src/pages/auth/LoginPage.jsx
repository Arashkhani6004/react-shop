import { useState } from "react";
import SignIn from "../../components/auth/SignIn";
import Confirm from "../../components/auth/Confirm";

function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);

  return (
    <div className="flex justify-center items-center max-w-xl m-auto min-h-screen">
      <div className="bg-orange-200 rounded-xl w-full text-center p-2">
        {step == 1 && (
          <>
            <p className=" font-bold m-0">Login</p>
            <SignIn
              mobile={mobile}
              setMobile={setMobile}
              password={password}
              setPassword={setPassword}
              setStep={setStep}
            />
          </>
        )}
        {step == 2 && (
          <>
            <p className=" font-bold m-0">ConfirmCode</p>
            <Confirm mobile={mobile} />
          </>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
