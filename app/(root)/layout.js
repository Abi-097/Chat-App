import { Inter } from "next/font/google";
import "../globals.css";
import Provider from "@components/Provider";
import TopBar from "@components/Topbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hey Chat",
  description: "Lets Connect with Everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <TopBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
