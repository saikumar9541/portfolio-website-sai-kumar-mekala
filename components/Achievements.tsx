'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Achievements.module.css';

interface Achievement {
  title: string;
  description: string;
  date: string;
}

const achievements: Achievement[] = [
  {
    title: "Full Stack Development",
    description: "Completed comprehensive full stack development projects using modern technologies like Next.js, React, and Node.js",
    date: "2023"
  },
  {
    title: "Cloud Certification",
    description: "Achieved AWS Cloud Practitioner certification, demonstrating proficiency in cloud technologies",
    date: "2023"
  },
  {
    title: "Open Source Contribution",
    description: "Contributed to multiple open source projects, improving code quality and adding new features",
    date: "2024"
  }
];

const Achievements = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`${styles.achievementCard} ${styles.glowOnHover} p-6 rounded-xl 
                             backdrop-blur-md bg-white/10 border border-white/20
                             hover:bg-white/15 transition-all duration-300 h-full`}>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-white/90">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {achievement.description}
                </p>
                <p className="text-sm text-gray-400">
                  Achieved in {achievement.date}
                </p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 