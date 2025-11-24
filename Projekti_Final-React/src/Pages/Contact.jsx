import React from "react";


export default function Contact() {
return (
<section className="py-20 container mx-auto px-6">
<h2 className="text-4xl font-bold mb-6 text-purple-700">Contact Us</h2>


<form className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow space-y-4">
<input
type="text"
placeholder="Your name"
className="w-full p-3 border rounded-xl"
/>
<input
type="email"
placeholder="Your email"
className="w-full p-3 border rounded-xl"
/>
<textarea
placeholder="Your message"
rows="4"
className="w-full p-3 border rounded-xl"
></textarea>
<button className="w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800 transition font-semibold">
Send Message
</button>
</form>
</section>
);
}