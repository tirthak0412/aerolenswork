import { useState } from "react";
import { useHistory } from "react-router-dom";

const useLoginController = () => {
  const history = useHistory();

  const [userEmailAddress, setUserEmailAddress] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const onUpdateUserEmail = (email: string) => {
    setTimeout(() => {
      setUserEmailAddress(email);
    }, 1000);
  };

  const onUpdateUserPassword = (password: string) => {
    setTimeout(() => {
      setUserPassword(password);
    }, 1000);
  };

  const onLoginUser = () => {
    history.push("/home");
    localStorage.setItem(
      "loginData",
      JSON.stringify({ email: userEmailAddress, password: userPassword })
    );
  };

  return {
    onUpdateUserEmail,
    onUpdateUserPassword,
    onLoginUser,
  };
};

export default useLoginController;
