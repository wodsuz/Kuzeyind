import React from "react";
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
  var children = (
    <div className="">
      <a className="text-2xl border-b-2 text-dark-700 border-sky-500">
        Fruit, Vegetables and their products
      </a>
      <div className="container flex items-center justify-center border-b-2 border-dark">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className="relative border-r-2 border-dark-200 ">
            <div className="flex items-center justify-center">
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
            <div className="text-sm">
              {fruit.map((fru) => (
                <div>{fru.about} </div>
              ))}
            </div>
          </div>

          <div className="relative w-48 h-48 w">
            <Image
              src={puree_logo}
              alt={"powder-logo"}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="relative w-48 h-48 w">
            <Image
              src={conc_logo}
              alt={"powder-logo"}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="relative w-48 h-48 w">
            <Image
              src={ıqf_logo}
              alt={"powder-logo"}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
  return <Layout data={data} visibility={0} children={children} />;
}
