import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Nexcent",
  description: "Nexcent landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          id="lashvae-demo-widget"
          src="https://staging-api.thundertribes.com/widget/embed.js"
          data-widget-id="wk_NjIg5qpWsJLpJDz93tL3PqQkjSmWenrH"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}