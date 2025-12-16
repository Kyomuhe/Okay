import profile from '../../assets/profile.png'
import { Bell } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
                <h1 className="text-2xl md:text-3xl font-serif">
                    It's Okay <span className="text-gray-500">App</span>
                </h1>

                <div className="flex items-center gap-3 md:gap-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm md:text-base shadow-sm">
                        Create Post
                    </button>
                    
                    <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                        <Bell className="text-gray-600 w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    
                    <button className="hover:ring-2 hover:ring-blue-500 rounded-full transition-all duration-200">
                        <img
                            src={profile}
                            alt="Profile"
                            className="rounded-full w-8 h-8 md:w-9 md:h-9 object-cover"
                        />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;