import wiseTravelers from "../../assets/beachPic.jpeg";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>

      <section className="w3-container" id="work">
        <div className="left">
          <h2>Work</h2>
        </div>
        <div className="right">
          <section id="portfolio">
            <header></header>
            <a href="https://tjwphd.github.io/wise-travelers/">
              Wise Travelers
            </a>
            <img src={wiseTravelers} alt="travel suggestions" />
          </section>

          <section id="TJWblog">
            <header></header>
            <a href="https://tjwphd.github.io/TJWblog/">TJWblog</a>
            <img src="./assets/images/work-image-2.jpeg" alt="TJWblog" />
          </section>

          <section id="semanticRefactor">
            <header></header>
            <a href="https://tjwphd.github.io/optimize-with-horiseon/">
              Semantic Refactor
            </a>
            <img
              src="./assets/images/work-image-3.jpeg"
              alt="semantic refactor"
            />
          </section>

          <section id="payrollTracker">
            <header></header>
            <a href="https://tjwphd.github.io/employee-payroll-tracker/">
              Employee Payroll Tracker
            </a>
            <img
              src="./assets/images/work-image-4.jpeg"
              alt="payroll tracker"
            />
          </section>
        </div>
      </section>
    </div>
  );
}
