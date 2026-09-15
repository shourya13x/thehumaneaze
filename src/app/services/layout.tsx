import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Transparent pricing for HR consulting services — from HR foundation and compliance to talent strategy, performance management, and HR technology. Project-based and recurring engagement options.",
  openGraph: {
    title: "Services & Pricing | The humanEaze",
    description: "Transparent pricing for HR consulting services. Project-based and recurring engagement options.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
