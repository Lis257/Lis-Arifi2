import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Nav() {
const [dark, setDark] = useState(false);


useEffect(() => {
if (dark) document.documentElement.classList.add("dark");
else document.documentElement.classList.remove("dark");
}, [dark]);


return (
<nav className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50 transition-colors">
<div className="container mx-auto flex justify-between items-center">
<h1 className="text-xl font-bold text-blue-600 dark:text-blue-300">MyTech</h1>
<div className="space-x-6 font-medium text-gray-700 dark:text-gray-200">
<Link to="/" className="hover:text-blue-600 dark:hover:text-blue-300 transition">Home</Link>
<Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-300 transition">About</Link>
<Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-300 transition">Services</Link>
<Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-300 transition">Contact</Link>
</div>
<button
onClick={() => setDark(!dark)}
className="ml-6 px-3 py-1 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200 transition"
>
{dark ? "Light" : "Dark"}
</button>
</div>
</nav>
);
}