import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../Components/Layout";
import { FaTimes, FaTrash, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/student/get-students"
      );
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleDeleteStudent = async () => {
    try {
      await axios.delete(
        `http://localhost:8080/student/delete-student/${studentToDelete}`
      );
      setStudents(
        students.filter((student) => student._id !== studentToDelete)
      );
      setShowDeleteConfirmation(false);
      setStudentToDelete(null);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const openDetailsPopup = (student) => {
    setSelectedStudent(student);
  };

  const closeDetailsPopup = () => {
    setSelectedStudent(null);
  };

  return (
    <>
      <Layout>
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Students</h1>
            <div className="relative w-full max-w-md">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:border-indigo-500 placeholder-gray-400"
                placeholder="Search students"
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
                to="/add-student"
                className="bg-pink-800 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-4 inline-block"
              >
                Add Student
              </Link>
            </div>
          </div>

          <table className="w-full table-auto">
            <thead>
              <tr className="bg-yellow-200">
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Cource
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Education
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students
                .filter((student) =>
                  student.studentName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
                .map((student) => (
                  <tr
                    key={student._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.studentId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.studentName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.contact}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.selectedCourses}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.education}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex">
                      <FaInfoCircle
                        className="text-blue-500 cursor-pointer mr-2"
                        onClick={() => openDetailsPopup(student)}
                      />
                      <FaTrash
                        className="text-red-500 cursor-pointer"
                        onClick={() => {
                          setShowDeleteConfirmation(true);
                          setStudentToDelete(student._id);
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Layout>

      {/* Delete Confirmation Popup */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>Are you sure you want to delete this student?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleDeleteStudent}
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

      {/* Details Popup */}
      {selectedStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Student Details</h2>
            <p>
              <strong>ID:</strong> {selectedStudent.studentId}
            </p>
            <p>
              <strong>Name:</strong> {selectedStudent.studentName}
            </p>
            <p>
              <strong>Email:</strong> {selectedStudent.email}
            </p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={closeDetailsPopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentList;
