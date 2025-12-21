import dep19 from '../../assets/login.png';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { makeRequest, showToast } from '../../Utils/util';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        userName: Yup.string()
            .required('username is required')
            .min(3, 'username must atleast be 3 characters'),
        password: Yup.string()
            .required('password is required')


    });
    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const loginData ={
                    username:values.userName,
                    password:values.password
                }
                const response = await makeRequest("login", "Auth", loginData)
                const data = response;

                if(data?.returnCode!==0){
                    const errorMessage = data?.returnMessage || 'there is a login issue'
                    showToast(errorMessage, 'error')
                    return;
                }
                const { token, user } = data?.returnObject || {};
                if(!token || !user){
                    const errorMessage ='server is misbehaving'
                    showToast(errorMessage, 'error');
                    return;
                }
                localStorage.setItem('accessToken', token);
                localStorage.setItem('user', JSON.stringify(user));
                formik.resetForm();

                showToast('Login successful', 'success')
                navigate('/main', {replace:true})

             }catch(error){
                console.error('login error', error)

             }finally{
                setSubmitting(false);
             }
        }
    });

    return (
        <div className="flex items-center justify-center bg-gray-100 h-screen">
            <section className="bg-white rounded-lg shadow-md p-6 w-full max-w-md ">
                <img
                    src={dep19}
                />
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col gap-3 mb-4">
                        <label className="text-sm">User Name</label>
                        <input
                            type="text"
                            id='userName'
                            value={formik.values.userName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`border border-gray-500 rounded-lg p-2 ${formik.touched.userName && formik.errors.userName
                                ? 'border-red-500 ring-red-400'
                                : 'focus:ring-green-400'

                                }`}
                            placeholder="Enter user name"
                        />
                        {formik.touched.userName && formik.errors.userName && (
                            <p className='mt-1 text-sm text-red-500'>{formik.errors.userName}</p>
                        )}

                        <label className="text-sm">Password</label>
                        <input
                            type="password"
                            id='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`border border-gray-500 rounded-lg p-2 ${formik.touched.password && formik.errors.password
                                ? 'border-red-500 ring-red-400'
                                : 'focus :ring-green-400'
                                }`}
                            placeholder="*******"
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className='mt-1 text-sm text-red-500'>{formik.errors.password}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={formik.isSubmitting}
                        className='flex items-center justify-center bg-blue-500 rounded-sm w-full text-white p-2'>
                        {formik.isSubmitting ? 'Logging in.....' : 'Login'}
                    </button>
                </form>

            </section>

        </div>
    )
}
export default Login;