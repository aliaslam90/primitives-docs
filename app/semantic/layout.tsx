import { SideNav } from "@/components/SideNav";

export default function SemanticLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <SideNav />
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}

