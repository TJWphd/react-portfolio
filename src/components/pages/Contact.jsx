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

      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="visitorEmail"
            value={visitorEmail}
            onChange={handleInputChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>

          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              // {*todo: consider React styling to set height at 100px or so}
            ></textarea>
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
