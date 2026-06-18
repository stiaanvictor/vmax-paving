import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Vmax Paving — Paving Specialists in Cape Town",
  description:
    "Vmax Paving has been laying durable, beautiful paving across Cape Town and surrounding suburbs for over 34 years. Driveways, patios, walkways and more. Get a free quote.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Vmax Paving — Paving Specialists in Cape Town",
    description:
      "Over 34 years of quality paving across Cape Town and surrounding suburbs.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0C2238",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
