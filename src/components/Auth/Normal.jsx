import { useNavigate } from 'react-router-dom';
import dep from '../../assets/dep.PNG'
import { useState } from 'react';
const Normal = () => {
    const navigate = useNavigate();
    const [accountType, setAccountType] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(accountType == 'dont'){
            navigate('/dont');
            return;
        }
        if(accountType == 'hide'){
            navigate('/hide')
            return
        }

    }

    return (
        <div className="flex items-center justify-center bg-gray-100 h-screen">
            <section className="flex flex-col gap-3 bg-white ronded-lg shadow-md p-6 w-full max-w-md rounded-lg">
                <h1 className="text-2xl text-blue-500 font-semibold text-center">Express your Self</h1>
                <p className="text-center text-sm text-gray-600">
                    In order to clearly express yourself, you can choose to be anonymous or decide to use your full details.
                </p>
                <img
                className='h-55'
                src={dep}
                />

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3">
                    <label>
                        <input
                        type="radio"
                        name='hide'
                        value='hide'
                        checked = {accountType == 'hide'}
                        onChange={(e)=> setAccountType(e.target.value)}
                        />
                        Hide Identity
                    </label>

                    <label>
                        <input
                        type = "radio"
                        name='dont'
                        value='dont'
                        checked = {accountType == 'dont'}
                        onChange={(e) => setAccountType(e.target.value)}
                        />
                        Dont hide Identity
                    </label>
                    </div>

                    <button
                    type='submit'
                    className="flex items-center justify-center w-full bg-blue-500 rounded p-1 text-white mt-5"
                    >Continue</button>

                </form>

            </section>

        </div>

    )
}
export default Normal;