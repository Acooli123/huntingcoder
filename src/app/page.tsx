import Image from "next/image";
import Head from "next/head";
import "./globals.css";
import Link from 'next/link'
import Script from "next/script";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <style className="jsx">
        {`
          .blogs {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 20px;
          }
          .blogItem {
            padding: 16px;
            border-radius: 8px;
            background-color: #f0d5d5ff;
            box-shadow: 0 3px 5px rgba(0, 0, 0, 3);
          }
        `} 
      </style>
      <Head>
        <title>Hunting Coder</title>
        <meta
          name="description"
          content="A blog for hunting coders by a coder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src="/sc.js" strategy="lazyOnload"></Script> */}
    

      <main className="flex flex-col gap-[8px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-bold -mt-30 tracking-tight text-center sm:text-left">
          Hunting Coder
        </h1>
        <div className="flex items-center justify-center mt-2 rounded-lg overflow-hidden">
        <img src="/coder.jpg" alt="" width="500px" height="100px"/>
        </div>
        <p className="translate-x-10 text-sky-500">
          ---A blog for huting coders by a coder
        </p>

        <div className="blogs">
          <h2 className="test-2xl md:text-lg italic font-serif font-bold">
            Popular Blogs
          </h2>
          <div className="blogItem">
            <h1 className="text-2xl mt-5 sm:text-lg font-bold font-mono tracking-tight text-center sm:text-left">
              How to Learn JavaScript in 2025?
            </h1>
            <p>JavaScript is a language used to design logic for the web.</p>
          </div>
          <div className="blogItem">
            <h1 className="text-2xl mt-5 sm:text-lg font-bold font-mono tracking-tight text-center sm:text-left">
              How to Learn JavaScript in 2025?
            </h1>
            <p>JavaScript is a language used to design logic for the web.</p>
          </div>
          <div className="blogItem">
            <h1 className="text-2xl mt-5 sm:text-lg font-bold font-mono tracking-tight text-center sm:text-left">
              How to Learn JavaScript in 2025?
            </h1>
            <p>JavaScript is a language used to design logic for the web.</p>
          </div>
        </div>
      </main>

    </div>
  );
}
