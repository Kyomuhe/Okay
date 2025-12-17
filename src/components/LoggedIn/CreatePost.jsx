import React, { useState } from 'react';
import { Image, X } from 'lucide-react';
import Header from './Header';

const CreatePostPage = () => {
    const [postText, setPostText] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setSelectedImage(null);
        setImagePreview(null);
    };

    const handleSubmit = () => {
        console.log('Post created:', { text: postText, image: selectedImage });
        setPostText('');
        setSelectedImage(null);
        setImagePreview(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 ">
            <Header />

            <div className="max-w-3xl mx-auto py-10">
                <div className="mb-8">
                    <h1 className="text-3xl font-serif text-gray-900 mb-2">
                        Create Post
                    </h1>
                    <p className="text-gray-600">Share your thoughts with the community</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                    <div className="flex items-center mb-6 pb-6 border-b border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-lg">
                            U
                        </div>
                        <div className="ml-3">
                            <h3 className="font-medium text-gray-900">Your Name</h3>
                            <p className="text-sm text-gray-500">Public post</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <textarea
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                            placeholder="What would you like to share?"
                            className="w-full min-h-40 p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none resize-none text-gray-900 placeholder-gray-400"
                        />
                        <div className="text-right mt-2">
                            <span className={`text-sm ${postText.length > 500 ? 'text-red-500' : 'text-gray-400'}`}>
                                {postText.length} / 500
                            </span>
                        </div>
                    </div>

                    {imagePreview && (
                        <div className="mb-6 relative">
                            <img
                                src={imagePreview}
                                alt="Upload preview"
                                className="w-full rounded-lg max-h-96 object-cover border border-gray-200"
                            />
                            <button
                                onClick={removeImage}
                                className="absolute top-3 right-3 bg-white hover:bg-gray-100 text-gray-700 p-2 rounded-full shadow-md transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    )}

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <div className="flex gap-2">
                            <label className="cursor-pointer px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2">
                                <Image className="w-5 h-5 text-gray-600" />
                                <span className="text-sm text-gray-700">Add Image</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                            </label>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={!postText.trim() && !selectedImage}
                            className={`px-6 py-2 rounded-lg font-medium transition-colors ${postText.trim() || selectedImage
                                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            Publish Post
                        </button>
                    </div>
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-6">
                    <h3 className="font-medium text-gray-900 mb-3">Community Guidelines</h3>
                    <ul className="text-sm text-gray-700 space-y-2">
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Be respectful and supportive of all community members</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Share content that is appropriate and constructive</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Respect privacy and do not share personal information of others</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>Report any content that violates our terms of service</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CreatePostPage;