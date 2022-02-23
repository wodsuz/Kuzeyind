import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { getCuratedPhotos } from "../lib/pexels";
export async function getServerSideProps() {
  const data = await getCuratedPhotos();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
export default function Home({ data }) {
  console.log(data.link);
  // https://drive.google.com/file/d/1dcYabNhVyYPsRNldU_S9J_EsudiFVG9s/view?usp=sharing
  useEffect(() => {
    var vid = document.getElementById("vid");
    vid.playbackRate = 0.5;
  }, []);

  return (
    <div className="">
      <Head>
        <title>Kuzey ind.</title>
        <meta
          name="description"
          content="Kuzey ind. export and import company website. Food, food products and disposable medical items"
        />
      </Head>
      <div className="relative flex items-center justify-center h-screen overflow-hidden text-center ">
        <div className="relative z-30 p-5 text-2xl text-white bg-purple-500 h-52 w-52 bg-opacity-80 rounded-xl">
          Deneme
        </div>
        <video
          poster="https://i.vimeocdn.com/video/860865261-6d8855858ecf3e3351572ad009f1c79cb6e52a69cbb2e47f6ffb7f320f3b7b4d-d?mw=1200&mh=675"
          id="vid"
          autoPlay
          muted
          loop
          playsinline
          className="absolute z-10 w-auto min-w-full min-h-full max-w-fit" //
        >
          <source src={data.link} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
