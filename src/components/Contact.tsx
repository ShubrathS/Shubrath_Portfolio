import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box contact-box-connect">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:ssshubrath@gmail.com"
                data-cursor="disable"
              >
                ssshubrath@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+919664968378"
                data-cursor="disable"
              >
                (+91) 9664968378
              </a>
            </p>
          </div>
          <div className="contact-box contact-box-edu">
            <h4>Education</h4>
            <p>
              B.Tech/B.E. Computer Engineering
              <br />
              Parul Institute of Engineering & Technology
              <br />
              <span className="contact-highlight">AI & ML · 8.1/10 · 2024</span>
            </p>
            <h4>Certifications</h4>
            <p>
              AWS Cloud Practitioner
              <br />
              Google AI/ML Professional
              <br />
              UiPath RPA Developer
            </p>
          </div>
          <div className="contact-box contact-box-social">
            <h4>Social</h4>
            <a
              href="https://github.com/shubrath"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/shubrath/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
        </div>
        <div className="contact-footer">
          <h2>
            Designed & Developed by <span>Shubrath Shakyavanshi</span>
          </h2>
          <h5>
            <MdCopyright /> 2026
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
