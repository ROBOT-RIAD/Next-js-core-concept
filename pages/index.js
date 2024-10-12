import Image from "next/image";
import localFont from "next/font/local";
import style from "../styles/home.module.css"
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (  
      <>
      <Head>
        <title>secont | app </title>
      </Head>
        <div>
          <h1>home</h1>
        </div>
      </>
  )
}
