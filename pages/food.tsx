import React from "react";
import Link from "next/link";
import Layout from "../components/Layout.tsx";
import { getCuratedPhotos } from "../lib/pexels";
import powder_logo from "../public/powders.png";
import puree_logo from "../public/puree.png";
import ıqf_logo from "../public/ıqf.png";
import conc_logo from "../public/conc.png";
import { fruit } from "../data";
import Image from "next/image";
export async function getServerSideProps() {
  const data: string = await getCuratedPhotos();
  return {
    props: {
      data,
    },
  };
}

export default function Food({ data }) {
  const [showModal, setShowModal] = React.useState(false);
  const cache = {};

  function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
  }
  // Note from the docs -> Warning: The arguments passed to require.context must be literals!
  importAll(require.context("../public/images", false, /\.(png|jpe?g|svg)$/));

  const images = Object.entries(cache).map((module) => module[1].default);
  console.log(images[0].src);
  var children = (
    <div className="">
      <a className="flex justify-center text-2xl border-b-2 text-dark-700 border-dark">
        Fruit, Vegetables and their products
      </a>
      <div className="container flex items-center justify-center border-b-2 border-dark">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className="relative border-r-2 border-dark-200 ">
            <div className="flex items-center justify-center mt-4">
              <Image
                src={powder_logo}
                alt={"powder-logo"}
                layout="fixed"
                objectFit="cover"
                className="rounded-full "
                height={150}
                width={150}
              />
            </div>
            <div className="text-sm ">
              {fruit.map((fru) => (
                <div key={fru.title + "1"} className="">
                  <div className="flex">
                    <fru.Icon className="w-7 h-7 " />
                    <div className="flex items-center justify-center ml-2 font-bold">
                      {" "}
                      {fru.title}{" "}
                    </div>
                  </div>
                  {fru.about}
                </div>
              ))}
            </div>
          </div>
          <div className="relative border-r-2 border-dark-200 ">
            <div className="flex items-center justify-center mt-4">
              <Image
                src={puree_logo}
                alt={"puree-logo"}
                layout="fixed"
                objectFit="cover"
                className="rounded-full "
                height={150}
                width={150}
              />
            </div>
            <div className="text-sm ">
              {fruit.map((fru) => (
                <div key={fru.title + "2"} className="">
                  <div className="flex">
                    <fru.Icon className="w-7 h-7 " />
                    <div className="flex items-center justify-center ml-2 font-bold">
                      {" "}
                      {fru.title}{" "}
                    </div>
                  </div>
                  {fru.about}
                </div>
              ))}
            </div>
          </div>
          <div className="relative border-r-2 border-dark-200 ">
            <div className="flex items-center justify-center mt-4">
              <Image
                src={conc_logo}
                alt={"conc-logo"}
                layout="fixed"
                objectFit="cover"
                className="rounded-full "
                height={150}
                width={150}
              />
            </div>
            <div className="text-sm ">
              {fruit.map((fru) => (
                <div key={fru.title + "3"} className="">
                  <div className="flex">
                    <fru.Icon className="w-7 h-7 " />
                    <div className="flex items-center justify-center ml-2 font-bold">
                      {" "}
                      {fru.title}{" "}
                    </div>
                  </div>
                  {fru.about}
                </div>
              ))}
            </div>
          </div>
          <div className="relative ">
            <div className="flex items-center justify-center mt-4">
              <Image
                src={ıqf_logo}
                alt={"iqf-logo"}
                layout="fixed"
                objectFit="cover"
                className="rounded-full "
                height={150}
                width={150}
              />
            </div>
            <div className="text-sm ">
              {fruit.map((fru) => (
                <div key={fru.title + "4"} className="">
                  <div className="flex">
                    <fru.Icon className="w-7 h-7 " />
                    <div className="flex items-center justify-center ml-2 font-bold">
                      {" "}
                      {fru.title}{" "}
                    </div>
                  </div>
                  {fru.about}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"></div>
      <div className="">
        <div className="flex mt-4">
          <button className="" type="button" onClick={() => setShowModal(true)}>
            {images.map((image) => (
              <Image
                src={image.src}
                alt={"powder-logo"}
                layout="fixed"
                objectFit="cover"
                className="rounded-md cursor-pointer hover:opacity-70"
                height={150}
                width={150}
              />
            ))}
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="my-4 text-lg leading-relaxed text-blueGray-500">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Order Samples
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </div>
  );
  return <Layout data={data} visibility={0} children={children} />;
}
