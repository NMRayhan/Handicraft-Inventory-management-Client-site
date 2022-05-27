import React from "react";

const ContactUS = () => {
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
          <h3 className="lg:text-6xl md:text-3xl sm:text-xl">
            Have any sales question?
          </h3>
          <form>
            <div className="grid gap-5 grid-flow-col">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  autocomplete="false"
                  type="text"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  autocomplete="false"
                  type="text"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <input
                autocomplete="false"
                type="text"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary max-w-fit">Send US</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
