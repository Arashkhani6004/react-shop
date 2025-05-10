import { useState } from "react";
import SignIn from "../../components/auth/SignIn";
import Confirm from "../../components/auth/Confirm";
import styles from "./LoginPage.module.css"

function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);

  return (
    <div className={`min-h-screen ${styles.loginPage}`}>
      <div className="flex justify-start items-center max-w-container m-auto min-h-screen">
      <div className="rounded-3xl w-120 text-center ">
        {step == 1 && (
          <>
            <p className=" font-bold m-0 text-2xl mb-4">ورود به پنل مدیریت</p>
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
      
    </div>
  );
}

export default LoginPage;
