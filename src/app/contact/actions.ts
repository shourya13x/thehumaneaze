"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(1, "Company name is required"),
  companySize: z.string().min(1, "Please select your company size"),
  helpNeeded: z.array(z.string()).min(1, "Please select at least one option"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
  success: boolean;
  errors: Record<string, string[]>;
  message: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    company: formData.get("company") as string,
    companySize: formData.get("companySize") as string,
    helpNeeded: formData.getAll("helpNeeded") as string[],
    message: formData.get("message") as string,
  };

  const result = contactSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
      message: "Please fix the errors below.",
    };
  }

  // ========================================
  // TODO: Wire to Resend + CRM webhook
  // ========================================
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'forms@thehumaneaze.com',
  //   to: 'hello@thehumaneaze.com',
  //   subject: `New inquiry from ${result.data.name}`,
  //   text: JSON.stringify(result.data, null, 2),
  // });

  console.log("Contact form submission:", result.data);

  return {
    success: true,
    errors: {},
    message: "Thank you! We'll be in touch within 24 hours.",
  };
}
