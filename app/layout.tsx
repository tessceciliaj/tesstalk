import "./globals.css";
import type { Metadata } from "next";
import bgPicture from "@/public/assets/efe-kurnaz-RnCPiXixooY-unsplash.jpg";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "TessTalk",
  description: "Get to know eachother questions. Card game for friends.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-k2d text-center">
        <main
          className="flex h-[100svh] flex-col items-center justify-between "
          style={{
            backgroundImage: `url(${bgPicture.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        >
          <Header name="TESS" span="TALK" />
          {children}
        </main>
      </body>
    </html>
  );
}
