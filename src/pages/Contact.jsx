import { useState } from "react";
import "./Contact.css";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import contactIcon from "../assets/search_web.png";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("✓ Message sent successfully.");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("✕ Unable to send message.");
    }

    setSending(false);
  }

  return (
    <div className="contact-window">
      <div className="contact-header">
        <h2>Contact Me</h2>
        <p>
          Fill in the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-field">
          <label>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-field">
          <label>Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-field">
          <label>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-buttons">
          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send"}
          </button>

          <button
            type="button"
            onClick={() =>
              setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
              })
            }
          >
            Clear
          </button>
        </div>

        {status && <div className="contact-status">{status}</div>}
      </form>
      <div className="contact-info">
        <div className="contact-info-label">
          <img className="contact-icon" src={contactIcon} /> Find me online:
        </div>
        <div className="contact-buttons">
          <button
            onClick={() =>
              window.open(
                "https://github.com/FatimahAljishi",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            <div className="contact-button-content">
              <img className="contact-icon" src={githubIcon} /> GitHub
            </div>
          </button>
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/fatimah-aljishi/",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            <div className="contact-button-content">
              <img className="contact-icon" src={linkedinIcon} /> LinkedIn
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
