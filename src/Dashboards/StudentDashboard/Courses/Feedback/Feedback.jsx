import React, { useState, useEffect } from "react";

function Feedback() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const storedFeedbacks = localStorage.getItem("userFeedbacks");
    return storedFeedbacks ? JSON.parse(storedFeedbacks) : [];
  });

  const [newFeedback, setNewFeedback] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    localStorage.setItem("userFeedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const handleSubmitFeedback = () => {
    if (newFeedback.trim() && rating > 0) {
      const newEntry = {
        id: feedbacks.length + 1,
        content: newFeedback.trim(),
        rating,
        timestamp: new Date().toLocaleString(),
      };
      setFeedbacks([newEntry, ...feedbacks]);
      setNewFeedback("");
      setRating(0);
    }
  };

  const emojis = ["😡", "😟", "😐", "😊", "🤩"];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Feedback
      </h2>
      <p className="text-lg mb-8 text-center text-gray-600">
        Share your thoughts and help us improve the Tutor Linking platform.
      </p>

      {/* Feedback Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <textarea
          className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
          rows="3"
          placeholder="Write your feedback..."
          value={newFeedback}
          onChange={(e) => setNewFeedback(e.target.value)}
        ></textarea>
        <div className="flex items-center mt-4">
          <span className="mr-4">Rate Us:</span>
          {emojis.map((emoji, index) => (
            <button
              key={index}
              className={`text-2xl mx-1 ${
                rating === index + 1 ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setRating(index + 1)}
            >
              {emoji}
            </button>
          ))}
        </div>
        <button
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={handleSubmitFeedback}
        >
          Submit Feedback
        </button>
      </div>

      {/* Feedback Display */}
      <div className="space-y-6">
        {feedbacks.length === 0 ? (
          <p className="text-center text-gray-600">No feedback yet. Be the first to share!</p>
        ) : (
          feedbacks.map((feedback) => (
            <div key={feedback.id} className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-800 text-lg">{feedback.content}</span>
                <span className="text-2xl">{emojis[feedback.rating - 1]}</span>
              </div>
              <span className="text-sm text-gray-500">
                {feedback.timestamp}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Feedback;
