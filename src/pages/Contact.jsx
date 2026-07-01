import { useState } from "react";
import "./Contact.css";

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
    </div>
  );
}
