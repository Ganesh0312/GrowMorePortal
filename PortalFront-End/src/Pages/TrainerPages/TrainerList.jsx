import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../Components/Layout";
import { FaTimes, FaTrash, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const TrainerList = () => {
  const [trainers, setTrainers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/trainer/get-trainers"
      );
      setTrainers(response.data);
    } catch (error) {
      console.error("Error fetching trainers:", error);
      console.error(error.response.data.message);
    }
  };

  const openDetailsPopup = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const closeDetailsPopup = () => {
    setSelectedTrainer(null);
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Trainers</h1>
          <div className="relative w-full max-w-md">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:border-indigo-500 placeholder-gray-400"
              placeholder="Search trainers"
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
              to="/add-trainer"
              className="bg-pink-800 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-4 inline-block"
            >
              Add Trainer
            </Link>
          </div>
        </div>

        <table className="w-full table-auto">
          <thead>
            <tr className="bg-yellow-200">
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Trainer Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Joining Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Mobile No
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {trainers
              .filter((trainer) =>
                trainer.trainerName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .map((trainer) => (
                <tr
                  key={trainer._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    {trainer.trainerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {trainer.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(trainer.joiningDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {trainer.mobileNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex">
                    <FaInfoCircle
                      className="text-blue-500 cursor-pointer mr-2"
                      onClick={() => openDetailsPopup(trainer)}
                    />
                    <FaTrash className="text-red-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Details Popup */}
      {selectedTrainer && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Trainer Details</h2>
            <p>
              <strong>ID:</strong>{" "}
              {new Date(selectedTrainer.joiningDate).toLocaleDateString()}
            </p>
            <p>
              <strong>Name:</strong> {selectedTrainer.trainerName}
            </p>
            <p>
              <strong>Email:</strong> {selectedTrainer.email}
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
    </Layout>
  );
};

export default TrainerList;
