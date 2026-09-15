import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sessions",
  description:
    "Book one-on-one sessions for career guidance, resume review, LinkedIn optimization, interview preparation, and HR consultation with The humanEaze.",
  openGraph: {
    title: "Sessions | The humanEaze",
    description: "Book one-on-one sessions for career guidance, resume review, and HR consultation.",
  },
};

export default function SessionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
