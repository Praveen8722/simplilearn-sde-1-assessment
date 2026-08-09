import "./globals.css";

export const metadata = {
  title: "Nexcent",
  description: "Nexcent landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}