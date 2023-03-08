import { useState } from "react";
import "./style.css";

function App() {
  return (
    <>
      <FirstCard />
      <Footer />
    </>
  );
}
function FirstCard() {
  const [score, setScore] = useState(0);
  const [submitClicked, setSubmitClicked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (score === 0) {
      alert("Please give a point");
    } else {
      setSubmitClicked(true);
    }
  }

  function handleButtonClick(e) {
    setScore(e.target.value);
  }

  if (submitClicked) {
    return <SecondCard score={score} />;
  }

  return (
    <section className="card1" onSubmit={handleSubmit}>
      <div className="rate-container1">
        <div className="star-container">
          <div>
            <img src="icon-star.png" alt="" className="image-star" />
          </div>
        </div>
        <div className="comment">
          <h3>How did we do?</h3>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <form className="button-container">
          <button
            type="button"
            className={`btn ${score === "1" ? "active" : ""}`}
            value="1"
            onClick={handleButtonClick}
          >
            1
          </button>
          <button
            type="button"
            className={`btn ${score === "2" ? "active" : ""}`}
            value="2"
            onClick={handleButtonClick}
          >
            2
          </button>
          <button
            type="button"
            className={`btn ${score === "3" ? "active" : ""}`}
            value="3"
            onClick={handleButtonClick}
          >
            3
          </button>
          <button
            type="button"
            className={`btn ${score === "4" ? "active" : ""}`}
            value="4"
            onClick={handleButtonClick}
          >
            4
          </button>
          <button
            type="button"
            className={`btn ${score === "5" ? "active" : ""}`}
            value="5"
            onClick={handleButtonClick}
          >
            5
          </button>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
function SecondCard({ score }) {
  return (
    <section className="card2 ">
      <div className="rate-container2">
        <div className="image-thankyou">
          <img
            src="illustration-thank-you copy.png
          "
            alt=""
          />
        </div>
        <div className="pointRate">
          <p>
            You selected <span className="scoreRate">{score}</span> out of 5
          </p>
        </div>
        <div className="comment">
          <h3>Thank you!</h3>
          <p>
            We appreciate you taking the time to give a rating. <br />
            If you ever need more support, don’t hesitate to <br />
            get in touch!
          </p>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer>
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . <br />
        Coded by <a href="#">Matt Ratchapon</a>.
      </div>
    </footer>
  );
}
export default App;
