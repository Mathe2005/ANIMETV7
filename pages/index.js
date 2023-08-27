import Head from "next/head";
import { parseCookies } from "nookies";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="twitter:title"
          content="ANIMETV7 - Free Anime and Manga Streaming"
        />
        <meta
          name="twitter:description"
          content="Discover your new favorite anime or manga title! ANIMETV7 offers a vast library of high-quality content, accessible on multiple devices and without any interruptions. Start using ANIMETV7 today!"
        />
        <meta name="twitter:image" content="/preview.png" />
        <meta
          name="description"
          content="Discover your new favorite anime or manga title! ANIMETV7 offers a vast library of high-quality content, accessible on multiple devices and without any interruptions. Start using ANIMETV7 today!"
        />
      </Head>
    </>
  );
}

export async function getServerSideProps(context) {
  const cookie = parseCookies(context);

  if (cookie.lang === "en") {
    return {
      redirect: {
        destination: "/en",
        permanent: false,
      },
    };
  } else if (cookie.lang === "id") {
    return {
      redirect: {
        destination: "/id",
        permanent: false,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/en",
        permanent: false,
      },
    };
  }
}
