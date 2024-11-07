import { motion } from 'framer-motion';
import courses from '../../constants/courses.js';
import { useNavigate } from 'react-router-dom';

const CoursesTab = ({ courseData = [] }) => {
  const trackCourses = courses.filter(course => courseData.includes(course.id));
  const navigate = useNavigate(); // Hook to navigate to different routes

  // Handle click to navigate to course with first lesson
  const handleTrackClick = (courseId) => {
    navigate(`/course?id=${courseId}`); // Navigate to /course?id=123
  };

  return (
    <div className="relative bg-gradient-to-br from-[#DEB041] via-[#998443] to-[#0f0f0f] p-10 rounded-3xl shadow-xl">
      <h1 className="relative text-5xl font-extrabold text-white mb-6 z-10 text-center">
        Track Content
      </h1>
      <p className="relative text-lg text-gray-200 mb-8 z-10">
        Join our track. Explore various tracks that empower you to master
        essential technologies. This track is designed to provide a solid
        foundation and practical skills to help you in the future.
      </p>

      <div className="relative grid grid-cols-2 gap-6 z-10 cursor-pointer">
        {trackCourses.map(course => (
          <motion.div
            key={course.id}
            className="group p-4 bg-white bg-opacity-50 rounded-xl shadow-inner transform transition-all duration-500 hover:bg-opacity-20"
            whileHover={{ scale: 1.05, rotate: 3 }} // Scale and rotate on hover
            whileTap={{ scale: 0.98 }} // Slight shrink on tap/click
            onClick={() =>
              handleTrackClick(course.id)
            }
          >
            {/* Course Title */}
            <motion.div
              className="flex items-center justify-center"
              whileHover={{ y: -5 }} // Slight lift on hover
            >
              <span className="text-gray-800 text-xl font-semibold">
                {course.title}
              </span>
            </motion.div>

            {/* Course Description */}
            <motion.div
              className="flex items-center justify-center mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gray-500 text-left">
                {course.description}
              </span>
            </motion.div>

            {/* Lessons Count */}
            <motion.p
              className="text-sm text-white mt-4 text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {course.lessons.length} lessons
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoursesTab;
