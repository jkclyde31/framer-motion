import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

export const metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Portfolio"
  },
  description: "Portfolio NextJS Page",

};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
       <TransitionProvider> {children}</TransitionProvider>
      </body>
    </html>
  );
}
