import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning & Growth",
  description:
    "HR learning resources, career growth guides, and organizational development content. Workshops, templates, and video learning from The humanEaze.",
  openGraph: {
    title: "Learning & Growth | The humanEaze",
    description: "HR learning resources, career growth guides, and organizational development content.",
  },
};

export default function LearningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
