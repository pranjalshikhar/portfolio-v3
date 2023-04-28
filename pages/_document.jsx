import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      className="scroll-smooth"
      prefix="https://ogp.me/ns/website#"
      lang="en"
    >
      <Head>
        {/* <title>pranjal ✦ developer, designer</title> */}
        <meta name="title" content="pranjal ✦ developer, designer" />
        <meta name="description" content="Developer // Designer // Weeb" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pranjalshikhar.vercel.app/" />
        <meta property="og:title" content="pranjal ✦ developer, designer" />
        <meta
          property="og:description"
          content="Developer // Designer // Weeb"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhtviyhse/image/upload/v1682600618/pranjalshikhar_i8znzx.jpg"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://pranjalshikhar.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="pranjal ✦ developer, designer"
        />
        <meta
          property="twitter:description"
          content="Developer // Designer // Weeb"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dhtviyhse/image/upload/v1682600618/pranjalshikhar_i8znzx.jpg"
        />

        {/* whatsapp */}
        <meta property="og:site_name" content="pranjal ✦ developer, designer" />
        <meta property="og:title" content="pranjal ✦ developer, designer" />
        <meta
          property="og:description"
          content="Developer // Designer // Weeb"
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://res.cloudinary.com/dhtviyhse/image/upload/v1682600618/pranjalshikhar_i8znzx.jpg"
        />
        <meta property="og:type" content="website" />
      </Head>
      <body className="back font-out mx-auto bg-[#fffdfd] dark:bg-[#242424] overflow-x-hidden lg:transform-gpu ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
