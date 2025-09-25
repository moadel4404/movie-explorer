import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}) {
  const { isLoggedIn } = useAuth();
  console.log("isLoggedIn:", isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
