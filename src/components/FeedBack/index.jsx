import { useEffect, useState } from "react";
import axios from "axios";

import "./style.css";
import problem from "./problem.png";

const FeedBack = ({ user }) => {
  /**
   * user={
   *    email: "alex@gmail.com"
   *    id: "8"
   *    membershipNo: "12345"
   *    name: "Alex"
   *    password: "1234"
   *    userType: "platinum"
   * }
   */
  const [Email, setemail] = useState("");
  const [SessionId, setSessionId] = useState("");
  const [Issue, setIssue] = useState("");
  const [data, setData] = useState([]);

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  useEffect(() => {
    if (user) {
      setemail(user?.email);
    }
  }, [user]);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setemail(storedEmail);
    }
  }, []);

  useEffect(() => {
    const storedSessionId = sessionStorage.getItem("df-messenger-sessionID");
    if (storedSessionId) {
      setSessionId(storedSessionId);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Email, SessionId, Issue);

    const data = {
      Email,
      SessionId,
      Issue,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/e791fe7c-7484-4bc5-8426-db7122c2aeef",
        data
      )
      .then((response) => {
        console.log(response);
        setemail("");
        setSessionId("");
        setIssue("");
        getData();
      });
  };

  // getting data function

  const getData = () => {
    axios
      .get("https://sheet.best/api/sheets/e791fe7c-7484-4bc5-8426-db7122c2aeef")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="feedbackWidget-container">
      <div onClick={toggleChatbot} className="feedbackWidget-circle">
        <img src={problem} alt="issue" />
      </div>

      {isChatbotOpen && (
        <div className="feedbackWidget-main-div">
          {/* <div className="feedbackWidget-ultra-main"> */}
          <div className="feedbackWidget-main">
            <h1>Q Bot Report Issue </h1>
            <h3>Enter your Issue</h3>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <label htmlFor="first">Email:</label>
              <input
                type="email"
                id="first"
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter your Email"
                name="first"
                value={Email}
              />

              <label htmlFor="Session ID ">Session ID :</label>
              <input
                type="text"
                id="Sessionid"
                name="Sessionid"
                placeholder="Enter your Sessionid"
                value={SessionId}
                onChange={(e) => setSessionId(e.target.value)}
              />
              <label>Issue</label>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                onChange={(e) => setIssue(e.target.value)}
                value={Issue}
                placeholder="Enter your Issue"
              ></textarea>

              <div className="feedbackWidget-wrap">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default FeedBack;
