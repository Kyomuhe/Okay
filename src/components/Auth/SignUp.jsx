import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dep18 from '../../assets/dep1.png';
import { setAccountType } from '../../store/Register';
import { useDispatch } from 'react-redux';

const SignUp = () => {
    const dispatch = useDispatch();
    // const data = useSelector((state)=> state.register)

    const [accountType, setAccount] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (accountType === 'ProfessionalUser') {
            dispatch(setAccountType(accountType))
            navigate('/prof'); 
            return;
        } 
        if (accountType === 'NormalUser') {
            dispatch(setAccountType(accountType))
            navigate('/normal'); 
            return;
        } 
    };

    return (
        <div className="flex items-center justify-center bg-gray-100 h-screen">
            <section className="flex flex-col gap-3 bg-white rounded-lg shadow-md p-6 w-full max-w-md">
                <h1 className="flex items-center justify-center font-semibold text-blue-500 text-2xl">
                    Choose Type of Account
                </h1>
                <p className="text-sm text-gray-600">
                    Note: Professional accounts are for medical personnel
                </p>
                <img src={dep18} alt="Account type" />
                
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            name="accountType"
                            value="ProfessionalUser"
                            checked={accountType === 'ProfessionalUser'}
                            onChange={(e) => setAccount(e.target.value)}
                        />
                        <span>Professional Account</span>
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="radio"
                            name="accountType"
                            value="NormalUser"
                            checked={accountType === 'NormalUser'}
                            onChange={(e) => setAccount(e.target.value)}
                        />
                        <span>Normal Account</span>
                    </div>

                    <button
                        type="submit"
                        className="flex items-center justify-center w-full bg-blue-500 rounded p-1 text-white mt-5"
                    >
                        Continue
                    </button>
                </form>
            </section>
        </div>
    );
};

export default SignUp;