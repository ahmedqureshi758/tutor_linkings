import React, { useState, useEffect } from 'react';

function Profile({ initialData }) {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('userData');
        if (storedUser) {
            return JSON.parse(storedUser);
        } else if (initialData) {
            return initialData;
        } else {
            return {
                name: '',
                email: '',
                phone: '',
                major: '',
                university: '',
                // profilePicture: null,
            };
        }
    });

    const [isEditing, setIsEditing] = useState(false);
    const [imagePreview, setImagePreview] = useState(user.profilePicture);

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        setImagePreview(user.profilePicture);
    }, [user.profilePicture]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
            setUser((prevUser) => ({
                ...prevUser,
                profilePicture: imageUrl,
            }));
        }
    };

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
        if (!isEditing) {
            setImagePreview(user.profilePicture);
        }
    };

    const handleSave = () => {
        setIsEditing(false);
        console.log('Updated user data:', user);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Your Profile</h2>

            <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="mb-6 md:mr-8">
                    <img
                        src={imagePreview || "https://via.placeholder.com/150"}
                        alt="Profile"
                        className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/150";
                        }}
                    />
                    {isEditing && (
                        <div className="mt-4">
                            <label className="block text-gray-700 mb-2">Update Profile Picture</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="p-2 border rounded-md"
                            />
                        </div>
                    )}
                </div>

                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Name:</label>
                            {isEditing ? (
                                <input type="text" name="name" value={user.name} onChange={handleChange} className="p-2 border rounded-md w-full" />
                            ) : (
                                <p className="font-semibold">{user.name || "Not set"}</p>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Email:</label>
                            {isEditing ? (
                                <input type="email" name="email" value={user.email} onChange={handleChange} className="p-2 border rounded-md w-full" />
                            ) : (
                                <p>{user.email || "Not set"}</p>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Phone:</label>
                            {isEditing ? (
                                <input type="text" name="phone" value={user.phone} onChange={handleChange} className="p-2 border rounded-md w-full" />
                            ) : (
                                <p>{user.phone || "Not set"}</p>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Major:</label>
                            {isEditing ? (
                                <input type="text" name="major" value={user.major} onChange={handleChange} className="p-2 border rounded-md w-full" />
                            ) : (
                                <p>{user.major || "Not set"}</p>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">University:</label>
                            {isEditing ? (
                                <input type="text" name="university" value={user.university} onChange={handleChange} className="p-2 border rounded-md w-full" />
                            ) : (
                                <p>{user.university || "Not set"}</p>
                            )}
                        </div>
                    </div>

                    <div className="mt-8">
                        {isEditing ? (
                            <button onClick={handleSave} className="bg-[#0063ff] hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save Profile</button>
                        ) : (
                            <button onClick={toggleEditMode} className="bg-[#0063ff] hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Edit Profile</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;