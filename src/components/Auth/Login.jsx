import dep19 from '../../assets/login.png';

const Login = () =>{
    return(
        <div className="flex items-center justify-center bg-gray-100 h-screen">
            <section className="bg-white rounded-lg shadow-md p-6 w-full max-w-md ">
                <img
                src = {dep19}
                />
                <form>
                    <div className="flex flex-col gap-3 mb-4">
                    <label className="text-sm">User Name</label>
                    <input
                    type="username"
                    className="border border-gray-500 rounded-lg p-2"
                    placeholder="Enter user name"
                    />

                    <label className="text-sm">Password</label>
                    <input
                    type="password"
                    className="border border-gray-500 rounded-lg p-2"
                    placeholder="*******"
                    />
                    </div>

                    <button
                    type = "submit"
                    className='flex items-center justify-center bg-blue-500 rounded-sm w-full text-white p-2'
                    >Login</button>
                </form>

            </section>

        </div>
    )
}
export default Login;