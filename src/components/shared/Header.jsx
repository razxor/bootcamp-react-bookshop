import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="navbar bg-base-100 px-0 lg:px-16 shadow-md sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Blog</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <a className="text-6xl font-bold">
                    <img src='/images/logo.png' width={100} height={30} />
                </a>
            </div>

            <div className="navbar-center hidden lg:flex justify-end items-end text-right w-3/5">
                <ul className="flex gap-5 px-1">
                    <li className="py-3 px-4 text-lg font-semibold hover:text-orange-500 cursor-pointer"><a>Home</a></li>
                    <li className="py-3 px-4 text-lg font-semibold hover:text-orange-500 cursor-pointer"><a>About</a></li>
                    <li className="py-3 px-4 text-lg font-semibold hover:text-orange-500 cursor-pointer"><a>Blog</a></li>
                    <li className="py-3 px-4 text-lg font-semibold hover:text-orange-500 cursor-pointer"><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end sm:1/2 lg:w-2/5 pr-2 lg:pr-0">
                <div className="flex gap-3 justify-center">
                    <div className="tooltip tooltip-bottom" data-tip="Buy Book">
                        <Link className="py-2 px-4 bg-orange-500 rounded text-white text-lg font-semibold hover:bg-yellow-500">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </Link>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="Sign In">
                        <Link className="py-2 px-4 bg-orange-500 rounded text-white text-lg font-semibold hover:bg-lime-500" title="">
                            <i className="fas fa-user"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header