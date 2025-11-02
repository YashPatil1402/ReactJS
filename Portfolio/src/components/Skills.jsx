// Skills.jsx - Animated skill bars with modern design
import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'HTML/CSS', level: 90, color: 'from-orange-400 to-orange-600' },
    { name: 'Tailwind CSS', level: 85, color: 'from-cyan-400 to-cyan-600' },
    { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React.js', level: 75, color: 'from-blue-400 to-blue-600' },
    { name: 'Python', level: 70, color: 'from-green-400 to-green-600' },
    { name: 'C++', level: 75, color: 'from-purple-400 to-purple-600' },
    { name: 'PHP', level: 60, color: 'from-indigo-400 to-indigo-600' },
    { name: 'Git/GitHub', level: 80, color: 'from-gray-600 to-gray-800' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group"
              style={{
                animation: isVisible
                  ? `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  : 'none',
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transformOrigin: 'left',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              450+
            </h3>
            <p className="text-gray-600 dark:text-gray-400">DSA Problems Solved</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
            <h3 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              15+
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
            <h3 className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">
              2+
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
