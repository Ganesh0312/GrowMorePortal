import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { FaTimes, FaTrash, FaEdit } from "react-icons/fa";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/course/get-courses"
      );
      setCourses(response.data.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/course/delete-courses/${courseId}`
      );
      setCourses(courses.filter((course) => course._id !== courseId));
      setShowDeleteConfirmation(false);
      setCourseToDelete(null);
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <>
      <Layout>
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Courses</h1>
            <div className="relative w-full max-w-md">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:border-indigo-500 placeholder-gray-400"
                placeholder="Search courses"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className="absolute right-0 top-0 mt-2 mr-4"
                  onClick={() => setSearchTerm("")}
                >
                  <FaTimes className="h-5 w-5 text-gray-400" />
                </button>
              )}
            </div>
            <div className="flex items-center">
              <Link
                to="/add-course"
                className="bg-pink-800 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-4 inline-block"
              >
                Add Course
              </Link>
            </div>
          </div>

          <table className="w-full table-auto">
            <thead>
              <tr className="bg-yellow-200">
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Course Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Trainer Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {courses
                .filter((course) =>
                  course.courseName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
                .map((course) => (
                  <tr
                    key={course._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      {course.courseCode}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {course.courseName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {course.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {course.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {course.trainerName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      ${course.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex">
                      <Link to={`/edit-course/${course._id}`}>
                        <FaEdit className="text-blue-500 cursor-pointer mr-2" />
                      </Link>
                      <FaTrash
                        className="text-red-500 cursor-pointer"
                        onClick={() => {
                          setShowDeleteConfirmation(true);
                          setCourseToDelete(course._id);
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Layout>

      {showDeleteConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>Are you sure you want to delete this course?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => handleDeleteCourse(courseToDelete)}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={() => setShowDeleteConfirmation(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseList;
