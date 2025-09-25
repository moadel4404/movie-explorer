import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const success = login(email, password);
    if (success) {
      setEmail("");
      setPassword("")
      navigate("/");
    } else {
      alert("❌ Email or password is incorrect");
    }
  };

  return (
    <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-0 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-gray-900 rounded-lg shadow-lg p-0 sm:p-10">
        <div>
          <div className="flex items-center justify-center gap-4 text-white mb-6">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white">
              Login to Movie <span className="text-[#ea2a33]">Explorer</span>
            </h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-4 rounded-md">
            <div>
              <label className="sr-only" htmlFor="email-address">
                Email address
              </label>
              <input
                autoComplete="email"
                className="relative block w-full appearance-none rounded-md border border-gray-700 bg-gray-800 px-3 py-3 text-white placeholder-gray-400 focus:z-10 focus:border-[white] focus:outline-none focus:ring-[#ea2a33] sm:text-sm"
                id="email-address"
                name="email"
                placeholder="Email address"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <input
                autoComplete="current-password"
                className="relative block w-full appearance-none rounded-md border border-gray-700 bg-gray-800 px-3 py-3 text-white placeholder-gray-400 focus:z-10 focus:border-[white] focus:outline-none focus:ring-[#ea2a33] sm:text-sm"
                id="password"
                name="password"
                placeholder="Password"
                minLength={8}
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                className="font-medium text-[#ea2a33] hover:text-red-500"
                href="#"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#ea2a33] py-3 px-4 text-sm font-bold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-[#ea2a33] focus:ring-offset-2 focus:ring-offset-gray-900"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link to={"/signup"}>
            <span className="font-medium text-[#ea2a33] hover:text-red-500">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;
