import React, { useState, useEffect } from "react";

const initialReviews = [
  {
    id: 1,
    userId: 1,
    name: "John Doe",
    rating: 5,
    comment: "Amazing content! I learned a lot about React and its hooks. Highly recommended!",
  },
  {
    id: 2,
    userId: 2,
    name: "Jane Smith",
    rating: 4,
    comment: "Great resources, but I wish there were more videos. Still very helpful overall.",
  },
  {
    id: 3,
    userId: 1,
    name: "Samuel Lee",
    rating: 5,
    comment: "Excellent tutorials! The videos are top-notch, and the articles are very informative.",
  },
];

function Reviews() {
  const loggedInUserId = 1; // Assume logged-in user has ID 1 for this example.

  const [reviews, setReviews] = useState(() => {
    // Retrieve reviews from localStorage, if available
    const savedReviews = localStorage.getItem("reviews");
    return savedReviews ? JSON.parse(savedReviews) : initialReviews;
  });

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 1,
    comment: "",
  });
  const [editReview, setEditReview] = useState(null); // To handle editing review
  const [formVisible, setFormVisible] = useState(false);

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  // Add a new review or update an existing one
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editReview) {
      // Update review if it's the current user's review
      if (editReview.userId === loggedInUserId) {
        const updatedReviews = reviews.map((review) =>
          review.id === editReview.id ? { ...editReview, ...newReview } : review
        );
        setReviews(updatedReviews);
        setEditReview(null);
      } else {
        alert("You can only edit your own reviews.");
      }
    } else {
      // Add new review with the logged-in user's ID
      const newReviewWithId = { ...newReview, id: reviews.length + 1, userId: loggedInUserId };
      setReviews([...reviews, newReviewWithId]);
    }
    setNewReview({ name: "", rating: 1, comment: "" });
    setFormVisible(false);
  };

  // Edit a review (only if it's the current user's review)
  const handleEdit = (review) => {
    if (review.userId === loggedInUserId) {
      setNewReview({
        name: review.name,
        rating: review.rating,
        comment: review.comment,
      });
      setEditReview(review);
      setFormVisible(true);
    } else {
      alert("You can only edit your own reviews.");
    }
  };

  // Delete a review (only if it's the current user's review)
  const handleDelete = (id) => {
    const reviewToDelete = reviews.find((review) => review.id === id);
    if (reviewToDelete.userId === loggedInUserId) {
      const filteredReviews = reviews.filter((review) => review.id !== id);
      setReviews(filteredReviews);
    } else {
      alert("You can only delete your own reviews.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-[#0063ff] mb-6">Customer Reviews</h1>

      {/* Reviews Section */}
      <div className="space-y-6">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="font-semibold text-[#0063ff]">{review.name}</div>
                <div className="text-yellow-400">{'★'.repeat(review.rating)}</div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
              <div className="flex justify-between mt-4">
                {review.userId === loggedInUserId && (
                  <>
                    <button
                      onClick={() => handleEdit(review)}
                      className="text-[#0063ff] hover:text-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(review.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No reviews yet. Be the first to share your experience!</p>
        )}
      </div>

      {/* Add Review Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => setFormVisible(true)}
          className="bg-[#0063ff] text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Add Your Review
        </button>
      </div>

      {/* Add/Update Review Form */}
      {formVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold text-[#0063ff] mb-4">
              {editReview ? "Edit Review" : "Write a Review"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md mt-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="rating" className="block text-gray-600">Rating</label>
                <div className="flex items-center space-x-1 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className={`text-2xl ${newReview.rating >= star ? "text-yellow-400" : "text-gray-300"}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="comment" className="block text-gray-600">Your Comment</label>
                <textarea
                  id="comment"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md mt-2"
                  required
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setFormVisible(false)}
                  className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#0063ff] text-white px-6 py-2 rounded-md hover:bg-blue-600"
                >
                  {editReview ? "Update" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reviews;
