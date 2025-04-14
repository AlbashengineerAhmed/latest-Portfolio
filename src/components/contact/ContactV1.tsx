import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import illustration5 from "/assets/img/illustration/5.png";
import shape13 from "/assets/img/shape/13.png";

interface FormEventHandler {
  (event: React.FormEvent<HTMLFormElement>): void;
}

interface DataType {
  sectionClass?: string;
}

const ContactV1 = ({ sectionClass }: DataType) => {
  const handleForm: FormEventHandler = (event) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const currentTime = new Date().toLocaleString(); // Capture submission time

    // Send data via EmailJS
    emailjs
      .send(
        "service_2bmh2ur", // Service ID
        "template_nqsgjkc", // Template ID
        {
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("comments"),
          time: currentTime,
        },
        "Yii0pPwP7dG5WkMWu" // Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Your message has been sent!");
          form.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Something went wrong. Try again!");
        }
      );
  };

  return (
    <>
      <div
        id="contact"
        className={`contact-style-one-area ${sectionClass ? sectionClass : ""}`}
      >
        <div className="container">
          <div className="contact-style-one-items">
            <h1 className="fixed-text">Contact Me</h1>
            <div className="row">
              <div className="col-lg-6">
                <form className="contact-form" onSubmit={handleForm}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="name"
                          placeholder="Name"
                          type="text"
                          autoComplete="off"
                          required
                        />
                        <span className="alert-error" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="email"
                          placeholder="Email*"
                          type="email"
                          autoComplete="off"
                          required
                        />
                        <span className="alert-error" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="phone"
                          placeholder="Phone"
                          type="text"
                          autoComplete="off"
                          required
                        />
                        <span className="alert-error" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group comments">
                        <textarea
                          className="form-control"
                          name="comments"
                          placeholder="Tell Us About Project *"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <button className="btn-style-regular" type="submit">
                        <span>Get in Touch</span>{" "}
                        <i className="fas fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                  {/* Alert Message */}
                  <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg" />
                  </div>
                </form>
              </div>
            </div>
            <div className="contact-illustration">
              <img src={illustration5} alt="Illustration" />
              <img src={shape13} alt="Shape" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactV1;
