"use client";

import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface EmailResult {
  text: string;
}

interface EmailError {
  text: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
    const emailTemplate = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE;
    if (!serviceId) {
      console.error("NEXT_PUBLIC_EMAIL_SERVICE_ID is not defined");
      return;
    }
    if (!publicKey) {
      console.error("NEXT_PUBLIC_EMAIL_PUBLIC_KEY is not defined");
      return;
    }
    if (!emailTemplate) {
      console.error("NEXT_PUBLIC_EMAIL_TEMPLATE is not defined");
      return;
    }

    try {
      await emailjs.send(serviceId, emailTemplate, { ...data }, publicKey).then(
        (result: EmailResult) => {
          alert(`Message sent successfully! ${result.text}`);
        },
        (error: EmailError) => {
          console.log("error", error.text);
        }
      );
      reset();
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      <div className="contact-outer">
        <div id="contact" className="smooth">
          <div className="contact-inner">
            <div className="column1">
              <h1>CONTACT</h1>
              <p>
                I hope you enjoyed my site. If you have any further questions,
                or have a position open, I would love to hear from you!
              </p>
            </div>
            <div className="column2">
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <label>First Name:</label>
                <input
                  className="form-control"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="error-message">{errors.firstName.message}</p>
                )}

                <label>Last Name:</label>
                <input
                  className="form-control"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                {errors.lastName && (
                  <p className="error-message">{errors.lastName.message}</p>
                )}

                <label>Email:</label>
                <input
                  className="form-control"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}

                <label>Message:</label>
                <textarea
                  className="form-control"
                  {...register("message", {
                    required: "Message is required",
                  })}
                />
                {errors.message && (
                  <p className="error-message">{errors.message.message}</p>
                )}

                <button type="submit" className="btn" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="professional2"></div>
    </>
  );
};

export default Contact;
