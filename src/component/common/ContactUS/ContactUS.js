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
          <h3 className="lg:text-6xl md:text-3xl sm:text-xl">Have any sales question?</h3>
          <form>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Company Name</span>
              </label>
              <input
                type="text"
                placeholder="Company Name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Your Message</span>
              </label>
              <textarea
                type="text"
                placeholder="Your Message"
                class="input input-bordered"
              ></textarea>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary max-w-fit">Send US</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
