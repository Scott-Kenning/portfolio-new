import Nav from "@/components/Nav";

export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="bg-gradient-to-r from-black via-slate-950 to-black text-neutral-300">
        <Nav/>
        <main>{children}</main>
      </div>
    );
  }
  