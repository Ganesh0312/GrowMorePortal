import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../Components/Layout";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    curentAddress: "",
    permantAddress: "",
    status: "",
    gender: "",
    email: "",
    contact: "",
    gardianName: "",
    gardiabcontact: "",
    xthResult: "",
    xiithResult: "",
    degreeResult: "",
    selectedCourses: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      selectedCourses: checked
        ? [...prevData.selectedCourses, name]
        : prevData.selectedCourses.filter((course) => course !== name),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/student/add-students",
        formData
      );
      toast.success("Form submitted successfully");
      setFormData({
        studentName: "",
        dateOfBirth: "",
        curentAddress: "",
        permantAddress: "",
        status: "",
        gender: "",
        email: "",
        contact: "",
        gardianName: "",
        gardiabcontact: "",
        xthResult: "",
        xiithResult: "",
        degreeResult: "",
        selectedCourses: [],
      });
    } catch (error) {
      toast.error("Error submitting form");
      console.error(error.response.data.message);
    }
  };

  return (
    <>
      <Layout>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        body{\n            background-color: #e3e9e9;\n            height: 100vh;\n        }\n        .logo img{\n            width: 290px;\n            margin-left: 400px;\n            margin-top: 40px;\n        }\n        .photo{\n            border: 1px solid black;\n            height: 140px;\n            width: 150px;\n            text-align: center;\n            margin: 50px;\n            margin-left: 220px;\n            background-color: #f0cfd4;\n            border: none;\n        }\n        .container{\n            display: flex;\n        }\n        .logo h1{\n            margin-left: 430px;\n            font-size: 23px;\n            color: #12415e;\n        }\n        .container h2{\n            margin-top: 150px;\n            margin-left: 20px;\n        }\n        .one h2{\n            background-color: #162a45;\n            padding: 10px;\n            color: #e3e9e9;\n            width: 82%;\n        }\n        .one {\n            margin-left: 80px;\n        }\n        .three h2{\n            background-color: #162a45;\n            padding: 10px;\n            color: #e3e9e9;\n            width: 82%;\n        }\n        .three {\n            margin-left: 80px;\n        }\n        .two{\n            margin-left: 80px;\n            margin-top: 60px;\n        }\n        .two label{\n            font-weight: bold;\n            font-size: 19px;\n        }\n        .two input{\n            padding: 5px;\n            margin: 10px;\n        }\n        .four{\n            margin-top: 60px;\n        }\n        .four label{\n            margin-left: 80px;\n            font-weight: bold;\n            font-size: 19px;\n        }\n        .four input{\n            padding: 5px;\n            background-color: #f0cfd4;\n            border: none;\n            margin: 10px;\n        }\n        .one h2 {\n            background-color: #0c3870;\n            padding: 10px;\n            color: #e3e9e9;\n            width: 82%;\n          }\n          .one {\n            margin-left: 80px;\n          }\n          .two label {\n            font-weight: bold;\n            font-size: 19px;\n            margin-left: 80px;\n          }\n          .two input {\n            padding: 5px;\n            margin: 10px;\n          }\n        .foot p{\n            background-color: #a0521d;\n            padding: 8px;\n            text-align: center;\n            color: #e3e9e9;\n            width: 90%;\n        }\n        .foot{\n            margin-top: 50px;\n        }\n        \n    ",
          }}
        />
        <form onSubmit={handleSubmit}>
          <div className="container">
            <h2>Date :</h2>
            <div className="logo">
              <img
                src="https://growmoretechnoline.com/assets/img/grow1.png"
                alt=""
              />
              <h1>ADMISSION FORM</h1>
            </div>
            <div className="photo"></div>
          </div>
          <div className="one">
            <h2>PERSONAL INFORMATION</h2>
          </div>
          <div className="two">
            <label htmlFor="studentName">Full Name :</label>
            <input
              name="studentName"
              type="text"
              value={formData.studentName}
              onChange={handleChange}
              style={{
                border: "none",
                backgroundColor: "#f0cfd4",
                width: "61vw",
                marginLeft: 88,
              }}
            />
            <br />
            <label htmlFor="dateOfBirth">Date Of Birth :</label>
            <input
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
              style={{
                border: "none",
                backgroundColor: "#f0cfd4",
                width: "61vw",
                marginLeft: 65,
              }}
            />
            <br />
            <label htmlFor="curentAddress">Current Address :</label>
            <input
              name="curentAddress"
              type="text"
              value={formData.curentAddress}
              onChange={handleChange}
              style={{
                border: "none",
                backgroundColor: "#f0cfd4",
                width: "61vw",
                marginLeft: 40,
              }}
            />
            <br />
            <label htmlFor="permantAddress">Permant Address :</label>
            <input
              name="permantAddress"
              type="text"
              value={formData.permantAddress}
              onChange={handleChange}
              style={{
                border: "none",
                backgroundColor: "#f0cfd4",
                width: "61vw",
                marginLeft: 35,
              }}
            />
            <br />
            <label htmlFor="status">Status :</label>
            <input
              name="status"
              type="checkbox"
              value="Single"
              checked={formData.status === "Single"}
              onChange={handleChange}
              style={{ marginLeft: 120 }}
            />
            <b style={{ fontSize: 19 }}>Single</b>
            <input
              name="status"
              type="checkbox"
              value="Married"
              checked={formData.status === "Married"}
              onChange={handleChange}
            />
            <b style={{ fontSize: 19 }}>Married</b>
            <input
              name="status"
              type="checkbox"
              value="Other"
              checked={formData.status === "Other"}
              onChange={handleChange}
            />
            <b style={{ fontSize: 19 }}>Other</b>
            <br />
            <label htmlFor="gender">Gender :</label>
            <input
              name="gender"
              type="checkbox"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              style={{ marginLeft: 110 }}
            />
            <b style={{ fontSize: 19 }}>Male</b>
            <input
              name="gender"
              type="checkbox"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            <b style={{ fontSize: 19 }}>Female</b>
            <br />
            <label htmlFor="email">Email :</label>
            <input
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              style={{
                border: "none",
                backgroundColor: "#f0cfd4",
                width: "61vw",
                marginLeft: 130,
              }}
            />
            <br />
            <label htmlFor="contact">Phone Number :</label>
            <input
              name="contact"
              type="text"
              value={formData.contact}
              onChange={handleChange}
              style={{
                border: "none",
                backgroundColor: "#f0cfd4",
                width: "61vw",
                marginLeft: 55,
              }}
            />
            <br />
            <label htmlFor="gardianName">Gurdiaan Name :</label>
            <input
              name="gardianName"
              type="text"
              value={formData.gardianName}
              onChange={handleChange}
              style={{
                border: "none",
                backgroundColor: "#f0cfd4",
                width: "61vw",
                marginLeft: 45,
              }}
            />
            <br />
            <label htmlFor="gardiabcontact">Phone Number :</label>
            <input
              name="gardiabcontact"
              type="text"
              value={formData.gardiabcontact}
              onChange={handleChange}
              style={{
                border: "none",
                backgroundColor: "#f0cfd4",
                width: "61vw",
                marginLeft: 55,
              }}
            />
            <br />
            <label htmlFor="gurdianAdress">Gurdian Adress :</label>
            <input
              name="gurdianAdress"
              type="text"
              value={formData.gurdianAdress}
              onChange={handleChange}
              style={{
                border: "none",
                backgroundColor: "#f0cfd4",
                width: "61vw",
                marginLeft: 45,
              }}
            />
          </div>
          <div className="three">
            <h2>EDUCATIONAL DETAIL</h2>
          </div>
          <div className="four">
            <label htmlFor="xthResult">SSC SCORE :</label>
            <input
              name="xthResult"
              type="text"
              value={formData.xthResult}
              onChange={handleChange}
              style={{ marginLeft: 60 }}
            />
            <label htmlFor="xiithResult">HSC SCORE :</label>
            <input
              name="xiithResult"
              type="text"
              value={formData.xiithResult}
              onChange={handleChange}
              style={{ marginLeft: 10 }}
            />
            <br />
            <br />
            <label htmlFor="degreeResult">Graduation Score :</label>
            <input
              name="degreeResult"
              type="text"
              value={formData.degreeResult}
              onChange={handleChange}
              style={{ marginLeft: 20 }}
            />
            <label htmlFor="pgScore">PG Score :</label>
            <input
              name="pgScore"
              type="text"
              value={formData.pgScore}
              onChange={handleChange}
              style={{ marginLeft: 45 }}
            />
            <br />
            <label>Selected Courses</label>
            <input
              name="Java Full-Stack"
              type="checkbox"
              checked={formData.selectedCourses.includes("Java Full-Stack")}
              onChange={handleCheckboxChange}
              style={{ marginLeft: 20 }}
            />
            <b style={{ fontSize: 19 }}>Java Full-Stack</b>
            <input
              name="Frontend"
              type="checkbox"
              checked={formData.selectedCourses.includes("Frontend")}
              onChange={handleCheckboxChange}
            />
            <b style={{ fontSize: 19 }}>Frontend</b>
            <input
              name="Backend"
              type="checkbox"
              checked={formData.selectedCourses.includes("Backend")}
              onChange={handleCheckboxChange}
            />
            <b style={{ fontSize: 19 }}>Backend</b>
            <br />
            <input
              name="Data Science"
              type="checkbox"
              checked={formData.selectedCourses.includes("Data Science")}
              onChange={handleCheckboxChange}
              style={{ marginLeft: 240 }}
            />
            <b style={{ fontSize: 19 }}>Data Science</b>
            <input
              name="Python"
              type="checkbox"
              checked={formData.selectedCourses.includes("Python")}
              onChange={handleCheckboxChange}
            />
            <b style={{ fontSize: 19 }}>Python</b>
            <input
              name="AI"
              type="checkbox"
              checked={formData.selectedCourses.includes("AI")}
              onChange={handleCheckboxChange}
            />
            <b style={{ fontSize: 19 }}>AI</b>
          </div>
          <button
            type="submit"
            style={{
              marginLeft: "80px",
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#0c3870",
              color: "#e3e9e9",
              border: "none",
            }}
          >
            Submit
          </button>
          <div className="foot">
            <p>
              Survey no.48/28, Near Pratik Hostel, Manaji Nagar, Narhe, Pune
              431041
            </p>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default AdmissionForm;
