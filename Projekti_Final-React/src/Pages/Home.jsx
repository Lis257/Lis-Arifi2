import React from "react";
import { motion } from "framer-motion";


export default function Home() {
return (
<section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center dark:from-gray-900 dark:to-gray-700 transition-colors">
<motion.h2
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-5xl font-extrabold mb-6"
>
Your Journey to Success Starts Here
</motion.h2>


<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.8, delay: 0.2 }}
className="text-lg max-w-2xl mx-auto"
>
We deliver powerful digital solutions tailored to your business needs.
</motion.p>
</section>
);
}