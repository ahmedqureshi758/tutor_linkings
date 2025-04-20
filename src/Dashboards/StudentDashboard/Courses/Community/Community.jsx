import React, { useState, useEffect } from "react";

function Community() {
  const emojis = ["👍", "❤️", "😂", "😮", "😢", "😡"];

  // Load posts from localStorage or use a default value
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem("communityPosts");
    return storedPosts
      ? JSON.parse(storedPosts)
      : [
          {
            id: 1,
            author: "John Doe",
            role: "Tutor",
            content: "How do you approach solving complex math problems?",
            timestamp: "2 hours ago",
            comments: [
              {
                id: 1,
                commenter: "Jane Smith",
                role: "Student",
                text: "I start by breaking them into smaller steps!",
                reactions: {},
              },
            ],
          },
        ];
  });

  const [newPost, setNewPost] = useState("");

  // Save posts to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem("communityPosts", JSON.stringify(posts));
  }, [posts]);

  // Add a new post
  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const newEntry = {
        id: posts.length + 1,
        author: "You",
        role: "Student",
        content: newPost.trim(),
        timestamp: "Just now",
        comments: [],
      };
      setPosts([newEntry, ...posts]);
      setNewPost("");
    }
  };

  // Add a comment to a specific post
  const handleAddComment = (postId, commentText) => {
    if (!commentText.trim()) return;

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: post.comments.length + 1,
                  commenter: "You",
                  role: "Student",
                  text: commentText,
                  reactions: {},
                },
              ],
            }
          : post
      )
    );
  };

  // Handle emoji reactions
  const handleReaction = (postId, commentId, emoji) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? {
                      ...comment,
                      reactions: {
                        ...comment.reactions,
                        [emoji]: (comment.reactions[emoji] || 0) + 1,
                      },
                    }
                  : comment
              ),
            }
          : post
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Community Discussions
      </h2>
      <p className="text-lg mb-8 text-center text-gray-600">
        Connect, collaborate, and grow with fellow students and tutors!
      </p>

      {/* Post Creation Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <textarea
          className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
          rows="3"
          placeholder="What's on your mind? Start a discussion..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <button
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={handlePostSubmit}
        >
          Post
        </button>
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{post.author}</h3>
                <span className="text-sm text-gray-500">{post.role}</span>
              </div>
              <span className="text-sm text-gray-500">{post.timestamp}</span>
            </div>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Comments</h4>
              {post.comments.length > 0 ? (
                post.comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="border-b last:border-none pb-4 mb-4"
                  >
                    <p className="text-gray-800 font-medium">
                      {comment.commenter} ({comment.role})
                    </p>
                    <p className="text-gray-600 mb-2">{comment.text}</p>
                    {/* Reaction Section */}
                    <div className="flex items-center space-x-4">
                      {emojis.map((emoji) => (
                        <button
                          key={emoji}
                          className="text-xl"
                          onClick={() =>
                            handleReaction(post.id, comment.id, emoji)
                          }
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                    {/* Display Reactions */}
                    <div className="flex mt-2 space-x-2">
                      {Object.entries(comment.reactions).map(
                        ([emoji, count]) => (
                          <span
                            key={emoji}
                            className="flex items-center text-gray-700"
                          >
                            {emoji} {count}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No comments yet.</p>
              )}
              {/* Add Comment Section */}
              <div className="mt-4">
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Add a comment..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAddComment(post.id, e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;
