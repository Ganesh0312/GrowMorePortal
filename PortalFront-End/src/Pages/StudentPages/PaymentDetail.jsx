import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentDetail = () => {
  const [formData, setFormData] = useState({
    AHolderName: "",
    bankName: "",
    accountType: "",
    paymentMode: "",
    upiId: "",
    transactionId: "",
    paymentDoneIn: "",
    ammoundPaid: "",
    remainingAmmount: "",
    TransactionDate: "",
    nestInstallmentDate: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/payments/add",
        formData
      );
      toast.success("Payment details submitted successfully");
      setFormData({
        AHolderName: "",
        bankName: "",
        accountType: "",
        paymentMode: "",
        upiId: "",
        transactionId: "",
        paymentDoneIn: "",
        ammoundPaid: "",
        remainingAmmount: "",
        TransactionDate: "",
        nestInstallmentDate: "",
      });
    } catch (error) {
      toast.error("Error submitting payment details");
      console.error(error.response.data.message);
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        body{
            background-color: #e3e9e9;
            height: 100vh;
        }
        .logo img{
            width: 290px;
            margin-left: 400px;
            margin-top: 40px;
        }
        .photo{
            border: 1px solid black;
            height: 140px;
            width: 150px;
            text-align: center;
            margin: 50px;
            margin-left: 220px;
            background-color: #f0cfd4;
            border: none;
        }
        .container{
            display: flex;
        }
        .logo h1{
            margin-left: 430px;
            font-size: 23px;
            color: #12415e;
        }
        .container h2{
            margin-top: 150px;
            margin-left: 20px;
        }
        .one h2{
            background-color: #162a45;
            padding: 10px;
            color: #e3e9e9;
            width: 82%;
        }
        .one {
            margin-left: 80px;
        }
        .three h2{
            background-color: #162a45;
            padding: 10px;
            color: #e3e9e9;
            width: 82%;
        }
        .three {
            margin-left: 80px;
        }
        .two{
            margin-left: 80px;
            margin-top: 60px;
        }
        .two label{
            font-weight: bold;
            font-size: 19px;
        }
        .two input{
            padding: 5px;
            margin: 10px;
        }
        .four{
            margin-top: 60px;
        }
        .four label{
            margin-left: 80px;
            font-weight: bold;
            font-size: 19px;
        }
        .four input{
            padding: 5px;
            background-color: #f0cfd4;
            border: none;
            margin: 10px;
        }
        .one h2 {
            background-color: #0c3870;
            padding: 10px;
            color: #e3e9e9;
            width: 82%;
          }
          .one {
            margin-left: 80px;
          }
          .two label {
            font-weight: bold;
            font-size: 19px;
            margin-left: 80px;
          }
          .two input {
            padding: 5px;
            margin: 10px;
          }
        .foot p{
            background-color: #a0521d;
            padding: 8px;
            text-align: center;
            color: #e3e9e9;
            width: 90%;
        }
        .foot{
            margin-top: 50px;
        }
        `,
        }}
      />
      <form onSubmit={handleSubmit}>
        <div className="one">
          <h2>PAYMENT DETAIL</h2>
        </div>
        <div className="two">
          <label htmlFor="AHolderName">Account Holder Name :</label>
          <input
            name="AHolderName"
            style={{
              border: "none",
              backgroundColor: "#f0cfd4",
              width: "56vw",
              marginLeft: 45,
            }}
            type="text"
            value={formData.AHolderName}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="bankName">Bank Name :</label>
          <input
            name="bankName"
            style={{
              border: "none",
              backgroundColor: "#f0cfd4",
              width: "56vw",
              marginLeft: 130,
            }}
            type="text"
            value={formData.bankName}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="accountType">Account Type :</label>
          <input
            name="accountType"
            style={{
              border: "none",
              backgroundColor: "#f0cfd4",
              width: "56vw",
              marginLeft: 113,
            }}
            type="text"
            value={formData.accountType}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="paymentMode">Payment Mode :</label>
          <input
            name="paymentMode"
            type="checkbox"
            checked={formData.paymentMode === "NetBanking"}
            onChange={handleChange}
            style={{ marginLeft: 110 }}
          />
          <b style={{ fontSize: 19 }}>NetBanking</b>
          <input
            name="paymentMode"
            type="checkbox"
            checked={formData.paymentMode === "UPI"}
            onChange={handleChange}
          />
          <b style={{ fontSize: 19 }}>UPI</b>
          <br />
          <label htmlFor="upiId">UPI ID :</label>
          <input
            name="upiId"
            style={{
              border: "none",
              backgroundColor: "#f0cfd4",
              width: "56vw",
              marginLeft: 165,
            }}
            type="text"
            value={formData.upiId}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="transactionId">Transaction ID :</label>
          <input
            name="transactionId"
            style={{
              border: "none",
              backgroundColor: "#f0cfd4",
              width: "56vw",
              marginLeft: 100,
            }}
            type="text"
            value={formData.transactionId}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="paymentDoneIn">Payment Done in :</label>
          <input
            name="paymentDoneIn"
            type="checkbox"
            checked={formData.paymentDoneIn === "Full Payment"}
            onChange={handleChange}
            style={{ marginLeft: 100 }}
          />
          <b style={{ fontSize: 19 }}>Full Payment</b>
          <input
            name="paymentDoneIn"
            type="checkbox"
            checked={formData.paymentDoneIn === "Installments"}
            onChange={handleChange}
          />
          <b style={{ fontSize: 19 }}>Installments</b>
          <br />
          <label htmlFor="ammoundPaid">Ammount Paid :</label>
          <input
            name="ammoundPaid"
            style={{
              border: "none",
              backgroundColor: "#f0cfd4",
              width: "56vw",
              marginLeft: 100,
            }}
            type="text"
            value={formData.ammoundPaid}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="remainingAmmount">Account Remaining :</label>
          <input
            name="remainingAmmount"
            style={{
              marginLeft: 60,
              backgroundColor: "#f0cfd4",
              border: "none",
            }}
            type="text"
            value={formData.remainingAmmount}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="TransactionDate">Transaction Date :</label>
          <input
            name="TransactionDate"
            style={{
              marginLeft: 100,
              backgroundColor: "#f0cfd4",
              border: "none",
            }}
            type="text"
            value={formData.TransactionDate}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="nestInstallmentDate">Next Installment Date</label>
          <input
            name="nestInstallmentDate"
            style={{
              marginLeft: 50,
              backgroundColor: "#f0cfd4",
              border: "none",
            }}
            type="text"
            value={formData.nestInstallmentDate}
            onChange={handleChange}
          />
          <br />
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
      </form>
      <div className="foot">
        <p>
          Survey no.48/28, Near Pratik Hostel, Manaji Nagar, Narhe, Pune 431041
        </p>
      </div>
    </>
  );
};

export default PaymentDetail;
