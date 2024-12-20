import { useNavigate } from "react-router-dom";

function CTASection() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
        Ready to Start Learning?
      </h2>
      <p className="text-xl mb-8">
        Connect with expert tutors and start your learning journey today.
      </p>
      <button
        onClick={handleSignUp}
        className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
      >
        Sign Up Now
      </button>
    </section>
  );
}

export default CTASection;
