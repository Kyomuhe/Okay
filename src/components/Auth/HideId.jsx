import dep3 from '../../assets/dep.PNG'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { showToast, makeRequest } from '../../Utils/util';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { resetRegistration } from '../../store/Register';

const HideId = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.register)
    const validationSchema = Yup.object().shape({
        userName: Yup.string()
            .required("user name must be provided")
            .min(4, "username must atleast be 4 characters"),
        password: Yup.string()
            .required("password required"),

        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),


    });

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
            problem: '',
            details: '',
            email:''
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const userData = {
                    username: values.userName,
                    password: values.password,
                    userProblem: values.problem,
                    problemDetails: values.details,
                    email:values.email,
                    accountType: data.accountType,
                }
                const response = await makeRequest('signup', 'Auth', userData);
                if (response?.returnCode !== 0) {
                    const errorMessage = response?.returnMessage || 'Signup failed';
                    showToast(errorMessage, 'error');
                    return;
                }

                const { token, user } = response?.returnObject || {};

                if (!token || !user) {
                    const errorMessage = "Signup failed, no user data received";
                    showToast(errorMessage, 'error');
                    return;
                }

                localStorage.setItem('accessToken', token);
                localStorage.setItem('user', JSON.stringify(user));
                showToast('Account created successfully', 'success');
                formik.resetForm();
                dispatch(resetRegistration());
                navigate('/main');

            } catch (error) {
                console.error(error.message);
                showToast(error.message, 'error');
            } finally {
                setSubmitting(false);
            }
        }

    })
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

                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
                    <div className=" flex flex-col gap-2">
                        <label>User Name</label>
                        <input
                            type="text"
                            id='userName'
                            value={formik.values.userName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`border border-gray-500 rounded w-full p-1 ${formik.touched.userName && formik.errors.userName
                                ? "border-red-500 ring-red-400"
                                : "focus:ring-green-400"
                                }`}
                            placeholder="Enter user name"
                        />
                        {formik.touched.userName && formik.errors.userName && (
                            <p className='mt-1 text-sm text-red-500'>{formik.errors.userName}</p>
                        )}
                    </div>
                    <div className=" flex flex-col gap-2">
                        <label>Problem you are suffering from</label>
                        <input
                            type="text"
                            id='problem'
                            className="border border-gray-500 rounded w-full p-1 "
                            value={formik.values.problem}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your issue"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formik.touched.email && formik.errors.email
                                ? "border-red-500 ring-red-400"
                                : "focus:ring-blue-500"
                                }`}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className='mt-1 text-sm text-red-500'>{formik.errors.email}</p>
                        )}
                    </div>


                    <div className=" flex flex-col gap-2">
                        <label>More details about the problem you are suffering from</label>
                        <input
                            type="textArea"
                            id='details'
                            className="border border-gray-500 rounded w-full p-1"
                            value={formik.values.details}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your issue"
                        />
                    </div>
                    <div className=" flex flex-col gap-2">
                        <label>Password</label>
                        <input
                            type="password"
                            id='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`border border-gray-500 rounded w-full p-1 ${formik.touched.password && formik.errors.password
                                ? 'border-red-500 ring-red-400'
                                : 'focus:ring-green-400'
                                }`}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className='mt-1 text-sm text-red-500'>{formik.errors.password}</p>
                        )}
                    </div>

                    <button
                        type='submit'
                        disabled={formik.isSubmitting}
                        className="bg-blue-500 p-1 rounded-lg text-white">
                        {formik.isSubmitting ? 'Creating Account' : 'Create Account'}
                    </button>


                </form>
            </section>
        </div>

    )
}
export default HideId;