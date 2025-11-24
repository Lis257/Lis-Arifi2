import React from "react";
import { motion } from "framer-motion";


export default function Services() {
return (
<section className="py-20 container mx-auto px-6">
<h2 className="text-4xl font-bold mb-10 text-green-700 dark:text-green-400">Our Services</h2>
<div className="grid md:grid-cols-3 gap-8">
{["Web Development", "Brand Design", "E-Commerce Solutions"].map((service, i) => (
<motion.div
key={i}
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4, delay: i * 0.15 }}
className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition"
>
<h3 className="text-xl font-bold mb-3 dark:text-white">{service}</h3>
<p className="text-gray-600 dark:text-gray-300">High‑quality solutions tailored for modern businesses.</p>
</motion.div>
))}
</div>
</section>
);
}