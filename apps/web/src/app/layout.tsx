import Header from "@/components/header";
import "./globals.css";
import Providers from "@/components/providers";

export const metadata = {
  title: "PokeApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <Header />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
