import React from "react";
import { toast } from "react-toastify";

const ContactUS = () => {
  const handleContactUs = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const company = e.target.company.value;
    const question = e.target.question.value;

    const randomQuestion = { name, email, company, question };
    fetch("http://localhost:5000/ask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(randomQuestion),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Your Question Submitted Successfully");
        return e.target.reset();
      });
  };
  return (
    <div className="min-h-screen mt-10">
      <h3 className="text-center font-serif text-5xl">
        We’d Love to Hear From You!
      </h3>
      <p className="text-center my-5">
        We’re happy to answer any questions you may have about{" "}
        <strong className="text-secondary">Handicraft by Rayhan</strong> Fill
        out the form and we will get in touch with you as soon as possible.
      </p>
      <div className="">
        <div style={{ width: "70%", margin: "auto" }}>
          <h3 className="lg:text-3xl md:text-2xl sm:text-sm">
            Have any question about <strong className="text-secondary">Handicraft by Rayhan</strong> ?
          </h3>
          <form onSubmit={handleContactUs}>
            <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  autoComplete="off"
                  type="text"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  autoComplete="false"
                  type="text"
                  name="email"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <input
                autoComplete="false"
                type="text"
                name="company"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                name="question"
                className="textarea textarea-bordered"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary max-w-fit" type="submit">
                Send US
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
