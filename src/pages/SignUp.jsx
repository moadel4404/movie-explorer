import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if(password !== confPassword) {
      window.alert("Confirm Password and the Passowrd is not matched !!")
    }else {
      console.log(email);
      console.log(password);
    }
    
  };

  return (
    <>
      <main className="flex-1 flex items-center justify-center py-12 px-0 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-md space-y-8 bg-gray-900 p-0 sm:p-10 rounded-lg shadow-lg">
          <div>
            <div className="flex items-center justify-center gap-4 text-white mb-6">
              <span
                className="material-symbols-outlined text-[#ea2a33]"
                style={{ fontSize: 48 }}
              >
                
              </span>
              <h2 className="text-center text-3xl font-bold tracking-tight text-white">
                Create an account
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
                  className="relative block w-full appearance-none rounded-md border border-gray-700 bg-gray-800 px-3 py-3 text-white placeholder-gray-400 focus:z-10 focus:border-[#ea2a33] focus:outline-none focus:ring-[#ea2a33] sm:text-sm"
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
                  autoComplete="new-password"
                  className="relative block w-full appearance-none rounded-md border border-gray-700 bg-gray-800 px-3 py-3 text-white placeholder-gray-400 focus:z-10 focus:border-[#ea2a33] focus:outline-none focus:ring-[#ea2a33] sm:text-sm"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="confirm-password">
                  Confirm Password
                </label>
                <input
                  autoComplete="new-password"
                  className="relative block w-full appearance-none rounded-md border border-gray-700 bg-gray-800 px-3 py-3 text-white placeholder-gray-400 focus:z-10 focus:border-[#ea2a33] focus:outline-none focus:ring-[#ea2a33] sm:text-sm"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Confirm Password"
                  required
                  type="password"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#ea2a33] py-3 px-4 text-sm font-bold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-[#ea2a33] focus:ring-offset-2 focus:ring-offset-gray-900"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center text-sm text-gray-400">
            Already have an account?
            <Link to={"/login"}>
              <span className="font-medium text-[#ea2a33] hover:text-red-500">Login</span>
            </Link>
            
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUp;
