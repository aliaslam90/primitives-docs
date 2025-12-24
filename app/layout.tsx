import "./globals.css";
import { TokensStyle } from "@/components/TokensStyle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TokensStyle />
        {children}
      </body>
    </html>
  );
}
