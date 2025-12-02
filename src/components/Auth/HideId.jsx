import dep3 from '../../assets/dep.PNG'

const HideId = () => {
    return (
        <div className="flex bg-white-100 min-h-screen">
            <div className='w-1/2 flex items-center justify-center'>
                <img
                src={dep3}
                className='h-screen object-cover'
                />
            </div>
            <section className='w-1/2 flex flex-col justify-center gap-3 p-3 h-screen'>
                <h1 className="flex items-center justify-center font-semibold text-2xl text-blue-500">You're Almost There</h1>
                <p className="text-sm text-gray-700 text-center">
                    Remember, even though you're not a medical professional, you can still help.
                </p>

                <form className="flex flex-col gap-5">
                    <div className=" flex flex-col gap-2">
                        <label>User Name</label>
                        <input
                            type="text"
                            className="border border-gray-500 rounded w-full p-1"
                            placeholder="Enter user name"
                        />
                    </div>
                    <div className=" flex flex-col gap-2">
                        <label>Problem you are suffering from</label>
                        <input
                            type="text"
                            className="border border-gray-500 rounded w-full p-1"
                            placeholder="Enter your issue"
                        />
                    </div>

                    <div className=" flex flex-col gap-2">
                        <label>More details about the problem you are suffering from</label>
                        <input
                            type="textArea"
                            className="border border-gray-500 rounded w-full p-1"
                            placeholder="Enter your issue"
                        />
                    </div>
                    <div className=" flex flex-col gap-2">
                        <label>Password</label>
                        <input
                            type="password"
                            className="border border-gray-500 rounded w-full p-1"
                        />
                    </div>

                    <button className="bg-blue-500 p-1 rounded-lg text-white">
                        Create Account
                    </button>


                </form>
            </section>
        </div>

    )
}
export default HideId;