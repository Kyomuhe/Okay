import dep1 from '../../assets/dep2.png';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { showToast, makeRequest } from '../../Utils/util';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { resetRegistration } from '../../store/Register';

const DontHide = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.register)
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required("First name is required")
            .min(2, "First name must be at least 2 characters"),
        lastName: Yup.string()
            .required("Last name is required")
            .min(2, "Last name must be at least 2 characters"),
        userName: Yup.string()
            .required("Username is required")
            .min(4, "Username must be at least 4 characters"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
        problem: Yup.string()
            .required("Please specify your problem"),
        details: Yup.string()
            .required("Please provide more details about your problem")

    })
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            problem: '',
            details: '',

        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const userData = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    username: values.userName,
                    email: values.email,
                    password: values.password,
                    userProblem: values.problem,
                    problemDetails: values.details,
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

            }


            catch (error) {
                console.error(error.message)
                showToast(error.message, 'error')
            } finally {
                setSubmitting(false);
            }
        }
    })

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

                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id='firstName'
                                    name='firstName'
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formik.touched.firstName && formik.errors.firstName
                                        ? "border-red-500 ring-red-400"
                                        : "focus:ring-blue-500"
                                    }`}
                                />
                                {formik.touched.firstName && formik.errors.firstName && (
                                    <p className='mt-1 text-sm text-red-500'>{formik.errors.firstName}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id='lastName'
                                    name='lastName'
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formik.touched.lastName && formik.errors.lastName
                                        ? "border-red-500 ring-red-400"
                                        : "focus:ring-blue-500"
                                    }`}
                                />
                                {formik.touched.lastName && formik.errors.lastName && (
                                    <p className='mt-1 text-sm text-red-500'>{formik.errors.lastName}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                type="text"
                                id='userName'
                                name='userName'
                                value={formik.values.userName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formik.touched.userName && formik.errors.userName
                                    ? "border-red-500 ring-red-400"
                                    : "focus:ring-blue-500"
                                }`}
                            />
                            {formik.touched.userName && formik.errors.userName && (
                                <p className='mt-1 text-sm text-red-500'>{formik.errors.userName}</p>
                            )}
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

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id='password'
                                name='password'
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formik.touched.password && formik.errors.password
                                    ? "border-red-500 ring-red-400"
                                    : "focus:ring-blue-500"
                                }`}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <p className='mt-1 text-sm text-red-500'>{formik.errors.password}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Problem you are suffering from
                            </label>
                            <input
                                type="text"
                                id='problem'
                                value={formik.values.problem}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${formik.touched.problem && formik.errors.problem
                                    ? "border-red-500 ring-red-400"
                                    : "focus:ring-blue-500"
                                }`}
                            />
                            {formik.touched.problem && formik.errors.problem && (
                                <p className='mt-1 text-sm text-red-500'>{formik.errors.problem}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                More details about the problem
                            </label>
                            <textarea
                                rows={4}
                                id='details'
                                name='details'
                                value={formik.values.details}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${formik.touched.details && formik.errors.details
                                    ? "border-red-500 ring-red-400"
                                    : "focus:ring-blue-500"
                                }`}
                            />
                            {formik.touched.details && formik.errors.details && (
                                <p className='mt-1 text-sm text-red-500'>{formik.errors.details}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={formik.isSubmitting}
                            className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl mt-2"
                        >
                            {formik.isSubmitting ? 'Creating Account....' : 'Create Account'}
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default DontHide;