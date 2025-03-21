import { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactDetails } from "@/components/contact/contact-details";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Muhammad Azri Fatihah Susanto for collaboration, job opportunities, or any inquiries.",
};

export default function ContactPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mb-16 flex flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Get In Touch
        </h1>
        <p className="max-w-3xl text-xl text-muted-foreground">
          Have a project in mind or want to work together? Feel free to reach
          out!
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
}
