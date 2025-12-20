import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleForm = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const payload = {
      Name: formData.get("name"),
      Email: formData.get("email"),
      Phone: formData.get("phone"),
      comment: formData.get("comments"),
    };

    try {
      setLoading(true);

      await axios.post(
        "https://strapi-new-production-d256.up.railway.app/api/contacts",
        {
          data: payload,
        }
      );

      toast.success("Thanks for contacting us!");
      event.target.reset();

    } catch (error) {
      console.error("Contact error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-style-one">
      <h4 className="sub-title">Have Questions?</h4>
      <h2 className="title">Send us a Message</h2>

      <form className="contact-form" onSubmit={handleForm}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                name="name"
                placeholder="Name"
                type="text"
                required
              />
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
                required
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                name="phone"
                placeholder="Phone"
                type="text"
                required
              />
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
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : (
                <>
                  <i className="fa fa-paper-plane"></i> Get in Touch
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
