import Link from "next/link";
import styles from "./layout.module.css";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  publisher: "Kim Young Wan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <div className={styles.header_container}>
          <header className={styles.header}>
            <h1>Demo Note</h1>
          </header>
          <nav>
            <ul className={styles.menu}>
              <li>
                <Link href={"/products"}>Products</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/products/pants"}>Pants</Link>
              </li>
            </ul>
          </nav>
        </div>

        {children}
      </body>
    </html>
  );
}
