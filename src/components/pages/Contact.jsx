import { useState } from "react";

export default function Contact() {
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [visitorMessage, setVisitorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }
    // TODO: error tells them to enter a name if they stray (!checkVisitorName(visitorName)) {
    //   setErrorMessage(
    //     `Don't leave without leaving your name!`
    //   );
    //   return;
    // }
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <div id="emailHelp" className="form-text">
        We'll never share your information with anyone else.
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="Your Name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            name="visitorName"
            value={visitorName}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

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
          />{" "}
          <label htmlFor="floatingTextarea2">Comments</label>
          <div className="form-floating">
            <textarea
              type="text"
              name="visitorMessage"
              value={visitorMessage}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              // {*todo: consider React styling to set height at 100px or so}
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
