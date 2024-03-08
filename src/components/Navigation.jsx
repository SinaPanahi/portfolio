export default function Navigation() {
    return (
        <nav className="hidden sm:hidden lg:block mt-10 mx-32 p-10 leading-10 h-min text-xl text-slate-300">
            <ul>
                <li className="flex items-center hover:ml-2 w-full">
                    <svg
                        className="inline mr-3 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                    <a href="#about">About</a>
                </li>
                <li className="flex items-center hover:ml-2">
                    <svg
                        className="inline w-5 h-5 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                    <a href="#experiences">Experiences</a>
                </li>
                <li className="flex items-center hover:ml-2">
                    <svg
                        className="inline w-5 h-5 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                    <a href="#skills">Skills</a>
                </li>
            </ul>
        </nav>
    );
}
