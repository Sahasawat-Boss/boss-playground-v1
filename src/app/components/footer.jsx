import React from 'react'
import Link from 'next/link';  // Import Link component

function Footer() {
    return (
        <footer className="footer footer-center bg-[#181818] text-white rounded p-8 shadow-[0_2px_20px_rgba(0,0,0,0.23)] z-10">
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/Sahasawat-Boss" target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="45"
                            height="45"
                            viewBox="0 0 24 24"
                            className="fill-current hover:scale-125">
                            <path
                                d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.385.6.111.793-.261.793-.577 0-.285-.01-1.041-.015-2.045-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.239 1.84 1.239 1.07 1.835 2.805 1.304 3.49.997.108-.776.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.311.469-2.382 1.237-3.222-.124-.303-.535-1.525.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 3-.404c1.02.005 2.047.137 3 .404 2.289-1.552 3.295-1.23 3.295-1.23.654 1.651.243 2.873.12 3.176.771.84 1.235 1.911 1.235 3.222 0 4.61-2.805 5.623-5.475 5.921.429.37.813 1.102.813 2.222 0 1.606-.014 2.899-.014 3.293 0 .319.19.694.8.576 4.765-1.588 8.2-6.084 8.2-11.384 0-6.627-5.373-12-12-12z"></path>
                        </svg>
                    </a>
                </div>
            </nav>

            <div>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Boss PlayGround</p>
            </div>

            {/* Add custom styles for the red shadow */}
        </footer>
    )
}

export default Footer;
