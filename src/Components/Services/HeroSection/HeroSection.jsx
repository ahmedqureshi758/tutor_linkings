import React from "react";

const features = [
  { title: "Expert Tutors", icon: "🎓", description: "Learn from verified and experienced tutors." },
  { title: "Flexible Scheduling", icon: "⏰", description: "Book sessions at your convenience." },
  { title: "Wide Range of Subjects", icon: "📚", description: "From academics to skills, we have it all." },
  { title: "Secure Platform", icon: "🔒", description: "Safe and trusted learning environment." },
];

function HeroSection() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">Why Choose Tutor Links?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
