import Head from "next/head";
import Image from "next/image";

export default function Home() {
  // https://drive.google.com/file/d/1dcYabNhVyYPsRNldU_S9J_EsudiFVG9s/view?usp=sharing

  return (
    <div className=" ">
      <Head>
        <title>Kuzey ind.</title>
        <meta
          name="description"
          content="Kuzey ind. export and import company website. Food, food products and disposable medical items"
        />
      </Head>
      <video autoPlay muted loop className="  bg-blue-500">
        <source src="/vid1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
