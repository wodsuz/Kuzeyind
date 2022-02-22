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
      <div className="relative flex items-center text-center justify-center h-screen mb-12 overflow-hidden">
        <div className="relative z-30 p-5 h-52 w-52 text-2xl text-white bg-purple-500 bg-opacity-80 rounded-xl">
          Deneme
        </div>
        <video
          id="vid"
          autoPlay
          muted
          loop
          playsinline
          className="absolute z-10 w-auto min-w-full min-h-full max-w-fit " //
        >
          <source src="/vid3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
