import React, { useState } from 'react';
import { FaPaperPlane, FaUserCircle, FaSearch, FaArrowLeft } from 'react-icons/fa';

const Messages = () => {
    const [chats] = useState([ // Removed setChats
        { id: 1, name: 'John Doe', lastMessage: 'See you later!', lastMessageTime: 'Yesterday' },
        { id: 2, name: 'Jane Smith', lastMessage: 'Okay, sounds good.', lastMessageTime: '2 days ago' },
        { id: 3, name: 'Peter Jones', lastMessage: 'Great work!', lastMessageTime: '3:15 PM' },
        { id: 4, name: 'Alice Johnson', lastMessage: 'Thanks for the update.', lastMessageTime: '10:00 AM' },
    ]);

    const [messages, setMessages] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [newMessage, setNewMessage] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleChatClick = (chat) => {
        setSelectedChat(chat);
        setMessages([
            { sender: 'User1', content: 'Hey there! How are you?', timestamp: '10:00 AM' },
            { sender: 'You', content: 'I\'m doing great, thanks! How about you?', timestamp: '10:02 AM' },
            { sender: 'User1', content: 'Not bad. Just working on a project.', timestamp: '10:05 AM' },
            { sender: 'You', content: 'Oh nice, what kind of project?', timestamp: '10:07 AM' },
            { sender: 'User1', content: 'It\'s a web application for...', timestamp: '10:09 AM' },
            { sender: 'You', content: 'Cool!', timestamp: '10:11 AM' },
        ]);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() !== "" && selectedChat) {
            setMessages([...messages, { sender: 'You', content: newMessage, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
            setNewMessage("");
        }
    }

    const handleBackClick = () => {
        setSelectedChat(null);
    };

    const filteredChats = chats.filter(chat =>
        chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gradient-to-r from-teal-100 to-blue-100 min-h-screen p-4 flex flex-col">
            <div className="md:flex md:flex-row h-full">
                {(selectedChat === null || window.innerWidth > 768) && (
                    <div className="md:w-1/2 w-full bg-white rounded-lg shadow-lg mr-0 md:mr-6 mb-4 md:mb-0 overflow-hidden h-full md:h-auto">
                        <div className="bg-gray-100 py-4 px-6 border-b border-gray-200 flex items-center">
                            <FaSearch className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search chats..."
                                className="flex-grow border-none bg-transparent focus:outline-none"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="overflow-y-auto h-full">
                            {filteredChats.map((chat) => (
                                <div
                                    key={chat.id}
                                    className={`px-6 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${selectedChat?.id === chat.id ? 'bg-blue-50' : ''}`}
                                    onClick={() => handleChatClick(chat)}
                                >
                                    <div className="flex items-center">
                                        <FaUserCircle className="text-3xl mr-3 text-gray-500" />
                                        <div>
                                            <h3 className="font-medium text-gray-800">{chat.name}</h3>
                                            <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {selectedChat && (
                    <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden h-full">
                        <div className="bg-gray-100 py-4 px-6 border-b border-gray-200 flex items-center justify-between">
                            <div className="flex items-center">
                                {window.innerWidth <= 768 && (
                                    <button onClick={handleBackClick} className="mr-3">
                                        <FaArrowLeft />
                                    </button>
                                )}
                                <h2 className="text-lg font-semibold text-gray-800">{selectedChat.name}</h2>
                            </div>
                        </div>

                        <div className="flex-grow overflow-y-auto p-6 space-y-4">
                            {messages.map((message, index) => (
                                <div key={index} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`bg-${message.sender === 'You' ? 'blue-500' : 'gray-200'} text-${message.sender === 'You' ? 'white' : 'gray-800'} rounded-lg px-4 py-2 max-w-xs`}>
                                        <p className="text-sm">{message.content}</p>
                                        <p className="text-xs text-gray-500 mt-1 text-right">{message.timestamp}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-100 p-4 border-t border-gray-200 flex items-center">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-grow border rounded-lg px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage() }}
                            />
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                onClick={handleSendMessage}
                            >
                                <FaPaperPlane />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Messages;