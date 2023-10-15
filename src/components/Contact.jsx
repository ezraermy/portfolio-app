import { createElement, useRef, useState } from "react";
import { content } from "../Content";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Create a data object to send to your Django API
    const data = {
      name: name,
      email: email,
      message: message,
    };

    fetch('http://127.0.0.1:8000/contacts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Email sent successfully");
          toast.success("Email sent Successfully");
          form.current.reset();
        } else {
          console.error("Failed to send email");
          toast.error("Failed to send email");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Error sending email");
      });
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
      <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-up"
          className="flex-1 flex flex-col gap-5"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
            className="border border-slate-600 p-3 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="user_email"
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            placeholder="Email Id"
            required
            className="border border-slate-600 p-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border border-slate-600 p-3 rounded h-44"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="btn self-start bg-white text-dark_primary">
            Submit
          </button>
        </form>
        <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a
                  className="font-Poppins"
                  href={content.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.text}
                </a>

              </div>
            ))}
          </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
