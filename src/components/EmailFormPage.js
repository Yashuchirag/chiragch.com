import React, { useState } from "react";
import axios from "axios";
import "../styles/Email.css";

export default function EmailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Chirag Chandrashekar",
      message: message,
    };

    const apiUrl = process.env.REACT_APP_EMAILJS_API;

    try {
      const response = await axios.post(
        apiUrl,
        {
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("✅ Email sent successfully!", response.data);
      setSubmissionMessage({ text: "Message sent successfully!", type: "success" });

      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");

      // Reset message after 3 seconds
      setTimeout(() => {
        setSubmissionMessage({ text: "", type: "" });
      }, 3000);
    } catch (error) {
      console.error("❌ Email sending failed:", error);
      setSubmissionMessage({ text: "Failed to send message. Please try again.", type: "error" });

      setTimeout(() => {
        setSubmissionMessage({ text: "", type: "" });
      }, 3000);
    }
  };

  return (
    <section className="section contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            className="contact-input"
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="contact-input"
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="contact-textarea"
            name="message"
            placeholder="Your Message"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button className="contact-button" type="submit">
            Send Message
          </button>
          {submissionMessage.text && (
            <p className={`submission-message ${submissionMessage.type}`}>
              {submissionMessage.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
