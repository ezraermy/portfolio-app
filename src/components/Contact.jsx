import { createElement, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import content from '../Content';

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_10od16n', 'template_9m3isme', form.current, 'V_-rM1t8BQF5obEkO',
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success('Email send Successfully');
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        },
      );
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
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            />
            <button
              type="submit"
              className="btn self-start bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content) => (
              <div
                key={content.text} // Use a unique key
                data-aos="fade-down"
                data-aos-delay={content.text} // You can use a unique identifier as the key
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
