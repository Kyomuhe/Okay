import dep1 from '../../assets/dep2.png';

const DontHide = () => {
    return (
        <div className="min-h-screen bg-white flex">
            <div className="w-1/2 flex items-center justify-center">
                <img
                    src={dep1}
                    alt="Illustration"
                    className="h-screen w-full object-cover"
                />
            </div>

            <div className="w-1/2 flex items-center justify-center p-8">
                <section className="w-full max-w-md">
                    <div className="mb-6">
                        <h1 className="text-blue-500 font-bold text-3xl mb-3">
                            You're Almost There
                        </h1>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Remember, even though you're not a medical professional, you can still help.
                        </p>
                    </div>

                    <form className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Problem you are suffering from
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                More details about the problem
                            </label>
                            <textarea
                                rows={4}
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl mt-2"
                        >
                            Create Account
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default DontHide;