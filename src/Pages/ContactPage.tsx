import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Input, Textarea } from "react-daisyui";

const ContactPage = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs
      .send("software-service", "contactUsForm", values, "RegRtBvW_Rn9jDmr9")
      .then(
        (response) => {
          setValues({
            fullName: "",
            email: "",
            message: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED");
        }
      );
  };
  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e: any) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
      <div className="lg:grid lg:grid-cols-2 lg:gap-6 bg-blue-300 lg:h-2/3">
        <div className="flex flex-col justify-center text-center lg:p-40 md:text-left">
          <p className="uppercase font-medium opacity-40 text-black">
            Kontaktiere uns
          </p>
          <h1 className="lg:text-6xl md:text-5xl text-4xl text-black">
            Lass uns sprechen
          </h1>
        </div>
        <div className="lg:mt-48 lg:mr-48 pt-6 pb-8 bg-white shadow-xl rounded p-5">
          <form onSubmit={handleSubmit}>
            <h3 className="text-gray-700 mb-7 text-xl font-semibold">
              Send us message
            </h3>
            <Input
              value={values.fullName}
              onChange={handleChange}
              name="fullName"
              type="text"
              placeholder="Name"
            />
            <Input
              value={values.email}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="email@beispiel.de"
            />
            <Textarea
              value={values.message}
              onChange={handleChange}
              name="message"
              placeholder="Nachricht"
            />
            <button
              type="submit"
              className="mt-4 bg-gray-900 text-gray-200 rounded hover:bg-gray-700 px-4 py-2 focus:outline-none"
            >
              Senden
            </button>
          </form>
        </div>
      </div>
  );
};

export default ContactPage;
