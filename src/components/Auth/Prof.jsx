import back from '../../assets/prof.png'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { showToast, makeRequest } from '../../Utils/util';
import { useNavigate } from 'react-router-dom';
import { resetRegistration } from '../../store/Register';

const Prof = () => {
    const data = useSelector((state) => state.register);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(3, "first name must be atleast 3 characters"),
        lastName: Yup.string()
            .min(3, "Atleast 3 characters are required"),
        email: Yup.string()
            .required("Email is required"),
        speciality: Yup.string()
            .min(3, "Please provide atleast 3 characters are required"),
        password: Yup.string()
            .required("hey, password is required")

    });
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            speciality: '',
            password: '',
            details: '',
            userName:'',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const ProfessionalData = {
                    accountType: data.accountType,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    speciality: values.speciality,
                    password: values.password,
                    professionalDetails: values.details,
                    username: values.userName

                };
                console.log("this is the data iam sending")
                console.log(ProfessionalData)

                const response = await makeRequest('signup', 'Auth', ProfessionalData);
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
                console.error(error.message)
                showToast(error.message, 'error')
            } finally {
                setSubmitting(false);
            }
        }
    })
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

                <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
                    <div className='flex space-x-4'>
                        <div>
                            <label>First Name: </label>
                            <input
                                type='text'
                                id='firstName'
                                name='firstName'
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder='Enter your full name'
                                className={`border border-gray-400 rounded w-full p-2 ${formik.touched.firstName && formik.errors.firstName
                                    ? 'border-red-500 ring-red-400'
                                    : 'focus:ring-green-400'
                                    }`}
                            />
                            {formik.touched.firstName && formik.errors.firstName && (
                                <p className='mt-1 text-sm text-red-500'>{formik.errors.firstName}</p>
                            )}
                        </div>
                        <div>
                            <label>Last Name: </label>
                            <input
                                id='lastName'
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type='text'
                                name='lastName'
                                placeholder='Enter your last name'
                                className={`border border-gray-400 rounded w-full p-2 ${formik.touched.lastName && formik.errors.lastName
                                    ? 'border-red-500 ring-red-400'
                                    : 'focus:ring-green-400'
                                    }`}
                            />
                            {formik.touched.lastName && formik.errors.lastName && (
                                <p className='mt-1 text-sm text-red-500'>{formik.errors.lastName}</p>
                            )}
                        </div>

                    </div>

                    <div>
                        <label className='block'>Email: </label>
                        <input
                            type='email'
                            id='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='email'
                            placeholder='Enter your email'
                            className={`border border-gray-400 rounded w-full p-2 ${formik.touched.email && formik.errors.email
                                ? 'border-red-500 ring-red-400'
                                : 'focus:ring-green-400'
                                }`}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className='mt-1 text-sm text-red-500'>{formik.errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label className='block'>Speciality: </label>
                        <input
                            type='text'
                            id='speciality'
                            value={formik.values.speciality}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='speciality'
                            placeholder='Enter your speciality'
                            className='border border-gray-400 rounded w-full p-2'
                        />
                    </div>

                    <div>
                        <label className='block'>User Name: </label>
                        <input
                            type='text'
                            id='userName'
                            value={formik.values.userName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='userName'
                            placeholder='Enter your user Name'
                            className='border border-gray-400 rounded w-full p-2'
                        />
                    </div>

                    <div>
                        <label className='block'>Password: </label>
                        <input
                            type='password'
                            id='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='password'
                            placeholder='Enter a strong password'
                            className={`border border-gray-400 rounded w-full p-2 ${formik.touched.password && formik.errors.password
                                ? 'border-red-500 ring-red-400'
                                : 'focus:ring-green-400'
                                }`}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className='mt-1 text-sm text-red-500'>{formik.errors.password}</p>
                        )}
                    </div>

                    <div>
                        <label className='block'>Are you willing to help people free of charge</label>
                        <div className=' flex gap-3 '>
                            <label>
                                <input
                                    type='radio'
                                    name='helpFree'
                                />
                                Yes
                            </label>

                            <label>
                                <input
                                    type='radio'
                                    name='helpFree'
                                />
                                No
                            </label>
                        </div>
                    </div>

                    <div>
                        <label>Talk about your self </label>
                        <textarea
                            rows={3}
                            id='details'
                            value={formik.values.details}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='details'
                            className='border border-gray-400 rounded w-full h-full p-2'
                        />

                    </div>

                    <button
                        type='submit'
                        disabled={formik.isSubmitting}
                        className='flex items-center justify-center w-full mt-10 rounded bg-blue-500 text-white p-2 '
                    >
                        {formik.isSubmitting ? 'Creating Account...' : 'Create Account'}
                    </button>


                </form>
            </section>

        </div>
    )
}
export default Prof;