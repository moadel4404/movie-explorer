import { useContext } from "react";
import AuthContext from "../auth-context/AuthContext";


function useAuth() {
  const data = useContext(AuthContext);

  if (data === null) {
    throw new Error("Please Wrap Your Component Within AuthContextProvider");
  }

  return data;
}

export default useAuth;