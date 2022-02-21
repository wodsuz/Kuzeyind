import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      <Head>
        <title>Kuzey ind.</title>
        <meta
          name="description"
          content="Kuzey ind. export and import company website. Food, food products and disposable medical items"
        />
      </Head>
      <video autoPlay muted loop className="fixed">
        <source src="/vid1.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
