import { Link, useNavigate } from "react-router-dom";
import dep1 from "../../assets/dep1.PNG";
import dep from "../../assets/dep.PNG";
import support from "../../assets/support.png";
import { Brain, HeartPlus, Frown, HeartCrack, Scale, HeartHandshake, CheckCircle } from "lucide-react";
import logo from '../../assets/logo.png';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col bg-blue-100 text-gray-800">
            <header className="bg-white shadow-sm border-b border-gray-300">
                <div className="flex justify-between items-center px-6 py-4">
                    <img src={logo} alt="It's Okay App Logo" className="h-12 w-auto" />
                    {/* <h1 className="text-3xl font-serif">It's Okay <span className="text-gray-500">App</span></h1> */}
                    <nav className="flex gap-4 px-3 py-2">
                        <p
                            onClick={() => { navigate("signup") }}
                            className="text-gray-700 hover:text-blue-500 transition-all cursor-pointer">
                            Sign Up
                        </p>
                        <p
                            onClick={() => { navigate("login") }}
                            className="text-gray-700 hover:text-blue-500 transition-all cursor-pointer">
                            Log In
                        </p>
                        <Link className="text-gray-700 hover:text-blue-500 transition-all">
                            Read Stories
                        </Link>
                    </nav>
                </div>
            </header>

            <main
                className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-white shadow-md bg-cover bg-center"
                style={{ backgroundImage: `url(${dep1})` }}
            >
                <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-2xl text-center">
                    <h2 className="text-4xl font-medium mb-6 text-blue-500">Find Support and connection</h2>
                    <p className="text-gray-600 text-lg mb-5">
                        Your Companion for Life's Ups and Downs
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        We understand that life can be tough. Here at <em>It's Okay App</em>, you'll find a community of people who care and are ready to listen.
                    </p>
                    <button className="bg-blue-500 rounded p-2 shadow-md text-white text-lg hover:bg-blue-400">
                        Read Stories
                    </button>
                </div>

            </main>
            <section className="flex px-6 py-12">
                <div className="bg-gray-900/80 text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                    <h2 className="text-3xl font-medium mb-6">What is Mental Illness?</h2>
                    <p className="text-lg mb-4">
                        Mental illness refers to a wide range of mental health conditions that affect mood, thinking, and behavior. Examples include depression, anxiety disorders, schizophrenia, eating disorders, and addictive behaviors.
                    </p>
                    <p className="text-lg mb-4">
                        It is important to understand that mental illness is common and affects people of all ages, backgrounds, and walks of life. Recognizing the signs and seeking help early can significantly improve outcomes.
                    </p>
                </div>
            </section>

            <section className="px-6 py-8">
                <div className="flex flex-col gap-1 max-w-4xl mx-auto">
                    <h2 className="flex items-center text-3xl font-medium mb-3 text-gray-800">
                        <Brain className="text-blue-500 mr-3" />
                        Types of Mental Disorders
                    </h2>
                    <ul className="flex flex-col list-disc ml-6 space-y-4 text-lg text-gray-700">
                        <li>
                            <div className="flex items-start -ml-6 pl-6">
                                <Frown className="text-blue-500 mr-3 flex-shrink-0 mt-1" />
                                <span><strong>Depression:</strong> Persistent feelings of sadness and loss of interest in activities.</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-start -ml-6 pl-6">
                                <HeartCrack className="text-blue-500 mr-3 flex-shrink-0 mt-1" />
                                <span><strong>Anxiety Disorders:</strong> Excessive fear or worry that disrupts daily activities.</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-start -ml-6 pl-6">
                                <Scale className="text-blue-500 mr-3 flex-shrink-0 mt-1" />
                                <span><strong>Bipolar Disorder:</strong> Extreme mood swings, including emotional highs (mania) and lows (depression).</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-start -ml-6 pl-6">
                                <HeartPlus className="text-blue-500 mr-3 flex-shrink-0 mt-1" />
                                <span><strong>Schizophrenia:</strong> A severe mental disorder characterized by distorted thinking, perceptions, and emotions.</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-start -ml-6 pl-6">
                                <Frown className="text-blue-500 mr-3 flex-shrink-0 mt-1" />
                                <span><strong>Post-Traumatic Stress Disorder (PTSD):</strong> A condition triggered by experiencing or witnessing a traumatic event.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col items-center justify-center my-8">
                    <img
                        src={dep}
                        alt="Description of dep18"
                        className="max-w-full h-auto"
                        style={{
                            maskImage: "radial-gradient(circle, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 0) 100%)",
                            WebkitMaskImage: "radial-gradient(circle, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 0) 100%)"
                        }}
                    />
                </div>


                <section className="px-6 py-12">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Cures and Treatments</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            While not all mental illnesses can be cured, many can be effectively managed. Treatment options include:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                            <li><strong>Therapy:</strong> Talking therapies, such as cognitive-behavioral therapy (CBT) or counseling, can help manage symptoms.</li>
                            <li><strong>Medication:</strong> Prescribed medications can help correct chemical imbalances in the brain.</li>
                            <li><strong>Lifestyle Changes:</strong> Regular exercise, a healthy diet, and sufficient sleep can contribute to better mental health.</li>
                            <li><strong>Support Groups:</strong> Connecting with others who face similar challenges can provide comfort and understanding.</li>
                        </ul>
                        <p className="text-lg text-gray-700">
                            Always seek professional guidance to find the best treatment plan for your needs.
                        </p>
                    </div>
                </section>
            </div>

            <section
                className="px-6 py-16 lg:py-20 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${support})` }}
            >
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="bg-white/90 p-8 lg:p-12 rounded-2xl shadow-2xl">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 flex items-center">
                            Awareness and Support
                        </h2>
                        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                            Raising awareness about mental health is crucial for reducing stigma and encouraging individuals to seek help. Here are some ways we can promote mental health awareness:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-lg mb-6 text-gray-700">
                            <li className="flex items-start">
                                Participating in mental health awareness campaigns.
                            </li>
                            <li className="flex items-start">
                                Sharing accurate information to dispel myths about mental illness.
                            </li>
                            <li className="flex items-start">
                                Encouraging open conversations about mental health in communities and workplaces.
                            </li>
                        </ul>
                        <p className="text-lg text-gray-700 font-medium">
                            Together, we can create a supportive environment where everyone feels valued and understood.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-6 py-16 lg:py-20">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800">
                            Mental Health Tips
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Taking proactive steps can help improve and maintain mental health. Here are some tips:
                        </p>
                        <ul className="space-y-3 text-base lg:text-lg text-gray-700">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-3 text-xl"> <CheckCircle /></span>
                                Practice mindfulness or meditation to reduce stress.
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-3 text-xl"><CheckCircle /></span>
                                Engage in regular physical activity to boost mood.
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-3 text-xl"><CheckCircle /></span>
                                Maintain a balanced diet and prioritize sleep.
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-3 text-xl"><CheckCircle /></span>
                                Stay connected with friends and loved ones.
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-3 text-xl"><CheckCircle /></span>
                                Set realistic goals and celebrate small achievements.
                            </li>
                        </ul>
                        <p className="text-base lg:text-lg text-gray-700 mt-6 italic">
                            Remember, small changes can lead to significant improvements in your mental health.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800">
                            Supporting a Loved One
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Supporting someone with mental illness can be challenging but deeply rewarding. Here are some tips:
                        </p>
                        <ul className="space-y-3 text-base lg:text-lg text-gray-700">
                            <li className="flex items-start">
                                <span className="text-purple-600 mr-3 text-xl"> <HeartHandshake /></span>
                                Listen without judgment and show empathy.
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 mr-3 text-xl"><HeartHandshake /></span>
                                Encourage them to seek professional help.
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 mr-3 text-xl"><HeartHandshake /></span>
                                Educate yourself about their condition to understand their experiences.
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 mr-3 text-xl"><HeartHandshake /></span>
                                Offer practical help, such as accompanying them to appointments.
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 mr-3 text-xl"><HeartHandshake /></span>
                                Take care of your own mental health to stay supportive.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="px-6 py-8 ">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Recognizing the Signs</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Early recognition of mental illness can make a significant difference in treatment and recovery. Common signs include:
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                        <li>Withdrawal from friends and family.</li>
                        <li>Significant changes in sleep or eating patterns.</li>
                        <li>Prolonged feelings of sadness or hopelessness.</li>
                        <li>Unexplained physical ailments or lack of energy.</li>
                        <li>Difficulty concentrating or making decisions.</li>
                    </ul>
                    <p className="text-lg text-red-500 font-medium bg-orange-100 p-4 rounded-lg">
                        If you notice these signs in yourself or someone you care about, consider seeking professional help.
                    </p>
                </div>
            </section>



            <footer className="bg-gray-800 text-center py-6 text-sm text-gray-300">
                <p>© 2025 It's Okay App. All rights reserved.</p>
                <p className="mt-2 text-xs text-gray-400">
                    Supporting mental health awareness and wellbeing for everyone.
                </p>
            </footer>



        </div>
    )
}
export default Home;