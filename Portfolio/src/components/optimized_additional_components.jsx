// Upcoming.jsx - Upcoming projects section
import React from 'react';

const Upcoming = () => {
  const upcomingProjects = [
    {
      title: 'Personal CRM',
      description: 'Building a comprehensive CRM system to manage personal and professional contacts with interaction tracking.',
      eta: 'November 2025',
      progress: 65,
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'DSA Revision Course',
      description: 'Creating video tutorials and comprehensive notes for data structures and algorithms preparation.',
      eta: 'December 2025',
      progress: 35,
      tags: ['Education', 'Video Content'],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Currently working on these exciting projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {upcomingProjects.map((project, index) => (
            <div
              key={project.title}
              className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Progress</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {project.progress}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Expected: {project.eta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Upcoming;


// Vlogs.jsx - Blog/Vlog posts section
const Vlogs = () => {
  const posts = [
    {
      title: 'Building My Portfolio with React & Tailwind',
      excerpt: 'A comprehensive guide on how I built this portfolio website using modern web technologies.',
      date: 'Oct 15, 2025',
      readTime: '5 min read',
      link: '#',
      category: 'Web Development',
    },
    {
      title: 'My Journey to 450+ DSA Problems',
      excerpt: 'Sharing my experience and tips for solving data structures and algorithms problems consistently.',
      date: 'Oct 10, 2025',
      readTime: '7 min read',
      link: '#',
      category: 'Programming',
    },
    {
      title: 'Top Tools for Computer Engineering Students',
      excerpt: 'Essential tools and resources every CS student should know about in 2025.',
      date: 'Oct 5, 2025',
      readTime: '4 min read',
      link: '#',
      category: 'Education',
    },
  ];

  return (
    <section
      id="vlogs"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & Devlogs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Thoughts, tutorials, and experiences from my journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <a
                    href={post.link}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vlogs;


// BackToTop.jsx - Scroll to top button
const BackToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export { Upcoming, Vlogs, BackToTop };
