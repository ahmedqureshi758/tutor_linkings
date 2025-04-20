import React from 'react';
import { FaExternalLinkAlt, FaTag, FaCalculator, FaAtom, FaPencilAlt, FaCode, FaFlask, FaGlobe } from 'react-icons/fa'; // Import all icons directly

const resources = [
  {
    id: 1,
    title: 'Introduction to Algebra',
    description: 'A comprehensive guide to basic algebraic concepts, including equations, inequalities, and graphing.',
    link: 'https://www.khanacademy.org/math/algebra',
    category: 'Math',
    icon: FaCalculator, // Use the imported icon component
  },
  {
    id: 2,
    title: 'Physics for Beginners',
    description: 'Learn the fundamentals of physics with clear explanations and interactive simulations covering mechanics, electricity, and magnetism.',
    link: 'https://www.physicsclassroom.com/',
    category: 'Physics',
    icon: FaAtom,
  },
  {
    id: 3,
    title: 'The Elements of Style',
    description: 'A classic guide to writing style and grammar, providing essential rules and advice for clear and effective writing.',
    link: 'https://www.bartleby.com/141/',
    category: 'Writing',
    icon: FaPencilAlt,
  },
  {
    id: 4,
    title: 'Introduction to Computer Science',
    description: 'Learn the fundamentals of computer science with clear explanations and interactive exercises covering programming, algorithms, and data structures.',
    link: 'https://www.codecademy.com/',
    category: 'Computer Science',
    icon: FaCode,
  },
  {
    id: 5,
    title: 'Organic Chemistry',
    description: 'Explore the fascinating world of organic chemistry, covering the structure, properties, and reactions of organic compounds.',
    link: 'https://www.khanacademy.org/science/organic-chemistry',
    category: 'Chemistry',
    icon: FaFlask,
  },
  {
    id: 6,
    title: 'World History',
    description: 'Explore the major events and trends that have shaped human history from ancient civilizations to the modern world.',
    link: 'https://www.worldhistory.org/',
    category: 'History',
    icon: FaGlobe,
  },
];

function Resources() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Resources</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300 flex flex-col h-full"
          >
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <resource.icon className="mr-2 text-gray-500" /> {/* Render icon directly */}
                {resource.title}
              </h3>
              <p className="text-gray-700 text-sm mb-3">{resource.description}</p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <div className="flex items-center text-gray-500 text-xs">
                <FaTag className="mr-1" />
                {resource.category}
              </div>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0063ff] hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 flex items-center"
              >
                Learn More
                <FaExternalLinkAlt className="ml-2 text-xs" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;