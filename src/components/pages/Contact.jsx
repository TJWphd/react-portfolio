import { useState } from "react";

export default function Contact() {
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [visitorMessage, setVisitorMessage] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "visitorName") {
      setVisitorName(value);
    } else if (name === "visitorEmail") {
      setVisitorEmail(value);
    } else if (name === "visitorMessage") {
      setVisitorMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(visitorName, visitorEmail, visitorMessage);
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <p>{visitorName} </p>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="visitorName"
          value={visitorName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="visitorEmail"
          value={visitorEmail}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="visitorMessage"
          value={visitorMessage}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
