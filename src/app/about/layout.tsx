import Navbar from "@/components/layout/Navbar";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
