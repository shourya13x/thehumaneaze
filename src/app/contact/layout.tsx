import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The humanEaze. Tell us about your HR challenges and we'll respond within 24 hours with a tailored proposal.",
  openGraph: {
    title: "Contact Us | The humanEaze",
    description: "Get in touch with The humanEaze. Tell us about your HR challenges.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
