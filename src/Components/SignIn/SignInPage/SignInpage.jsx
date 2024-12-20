import { useNavigate } from "react-router-dom";

function SignInPage() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleSignIn = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-b from-[#ffcf3a] to-[#0063ff] text-white">
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Welcome Back!
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Sign in to access personalized learning tools and connect with expert tutors.
        </p>
        <button
          onClick={handleSignUp}
          className="bg-white text-[#0063ff] hover:bg-[#0052cc] hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
        >
          Create an Account
        </button>
      </div>

      {/* Right Section - Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-8 relative">
        <div className="w-full max-w-md bg-white text-[#0063ff] p-8 rounded-lg shadow-lg relative z-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#0063ff]"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#0063ff]"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="button"
              onClick={handleSignIn}
              className="w-full bg-[#0063ff] hover:bg-[#0052cc] text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
            >
              Sign In
            </button>

            <div className="text-center mt-4 text-sm">
              <p>
                Forgot your password? <span className="text-[#0052cc] hover:underline cursor-pointer">Reset it</span>
              </p>
            </div>
          </form>
        </div>

        {/* Optional Overlay for Visual Appeal */}
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      </div>
    </div>
  );
}

export default SignInPage;
