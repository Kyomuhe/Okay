import back from '../../assets/prof.png'
const Prof = () => {
    return (
        <div className='min-h-screen flex '>
            <div className='w-1/2 hidden lg:flex items-center justify-center'>
            <img
                src={back}
                className='h-screen w-full'
            />
            </div>
            <section className='w-1/2 flex flex-col gap-3 p-4'>
                <h1 className='text-2xl text-blue-500 font-semibold'>Professional Registration</h1>

                <form className='flex flex-col gap-4'>
                    <div className='flex space-x-4'>
                        <div>
                            <label className=''>First Name: </label>
                            <input
                                type='text'
                                name='firstName'
                                placeholder='Enter your full name'
                                className='border border-gray-400 rounded w-full p-2'
                            />
                        </div>
                        <div>
                            <label className=''>Last Name: </label>
                            <input
                                type='text'
                                name='last name'
                                placeholder='Enter your last name'
                                className='border border-gray-400 rounded w-full p-2'
                            />
                        </div>

                    </div>

                    <div>
                        <label className='block'>Email: </label>
                        <input
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            className='border border-gray-400 rounded w-full p-2'
                        />
                    </div>

                    <div>
                        <label className='block'>Speciality: </label>
                        <input
                            type='text'
                            name='speciality'
                            placeholder='Enter your speciality'
                            className='border border-gray-400 rounded w-full p-2'
                        />
                    </div>
                    <div>
                        <label className='block'>Password: </label>
                        <input
                            type='password'
                            name='password'
                            placeholder='Enter a strong password'
                            className='border border-gray-400 rounded w-full p-2'
                        />
                    </div>

                    <div>
                        <label className='block'>Are you willing to help people free of charge</label>
                        <div className=' flex gap-3 '>
                            <label>
                                <input
                                    type='radio'
                                    name='yes'
                                />
                                Yes
                            </label>

                            <label>
                                <input
                                    type='radio'
                                    name='no'
                                />
                                No
                            </label>
                        </div>
                    </div>

                    <div>
                        <label>Talk about your self </label>
                        <textarea
                        rows={3}
                            name='about your self'
                            className='border border-gray-400 rounded w-full h-full p-2'
                        />

                    </div>

                    <button
                    type='submit'
                    className='flex items-center justify-center w-full mt-10 rounded bg-blue-500 text-white p-2 '
                    >
                        Create Account
                    </button>


                </form>
            </section>

        </div>
    )
}
export default Prof;