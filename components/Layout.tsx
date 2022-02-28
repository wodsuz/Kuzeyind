import React from "react";
import Head from "next/head";
import Headtitle from "./header.tsx";
import { getCuratedPhotos } from "../lib/pexels";
import { useEffect } from "react";
import Topbanner from "../components/Topbanner.tsx";
import Navbar from "../components/Navbar.tsx";

export default function Layout({ data, visibility, children }) {
  const vis =
    visibility > 0 ? (
      <div className="border-b-2 border-sky-500 visible">
        <Topbanner />
      </div>
    ) : (
      <div className="border-b-2 border-sky-500 hidden ">
        <Topbanner />
      </div>
    );
  useEffect(() => {
    var vid: any = document.getElementById("vid");
    vid.playbackRate = 0.5;
  }, []);
  return (
    <div>
      <Head>
        <title>Kuzey ind.</title>
        <meta
          name="description"
          content="Kuzey ind. export and import company website. Food, food products and disposable medical items"
        />
      </Head>
      <Headtitle />
      <div className="relative flex items-center justify-center h-screen overflow-hidden  ">
        <div className="z-30 w-11/12 p-2 text-2xl bg-purple-100 text-dark h-5/6 bg-opacity-60 rounded-xl">
          <Navbar />
          {vis}
          <main>{children}</main>
        </div>
        <video
          poster="https://i.vimeocdn.com/video/860865261-6d8855858ecf3e3351572ad009f1c79cb6e52a69cbb2e47f6ffb7f320f3b7b4d-d?mw=1200&mh=675"
          id="vid"
          autoPlay
          muted
          loop
          className="absolute z-10 w-auto min-w-full min-h-full max-w-fit" //
        >
          <source src={data.link} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
