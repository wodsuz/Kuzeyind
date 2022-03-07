import React from "react";
import Layout from "../components/Layout.tsx";
import { getCuratedPhotos } from "../lib/pexels";
import powder_logo from "../public/powders.png";
import puree_logo from "../public/puree.png";
import ıqf_logo from "../public/ıqf.png";
import conc_logo from "../public/conc.png";
import { fruit, puree, concentrate, iqf } from "../data";
import Image from "next/image";
import { BiCertification } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
export async function getServerSideProps() {
  const data: string = await getCuratedPhotos();
  return {
    props: {
      data,
    },
  };
}

export default function Food({ data, ...props }) {
  const [showModal, setShowModal] = React.useState(false);
  const [title, setTitle] = React.useState("No product");
  const [Img, setImg] = React.useState("No image");
  const [src, setSrc] = React.useState(props.src);
  const [moreinfo, setmoreinfo] = React.useState("hidden text-sm sm:block");
  const [pureeinfo, setpureeinfo] = React.useState("hidden text-sm sm:block");
  const [concinfo, setconcinfo] = React.useState("hidden text-sm sm:block");
  const [iqfinfo, setiqfinfo] = React.useState("hidden text-sm sm:block");

  const cache = {};
  const detailsclick = (id: number) => {
    if (id < 2) {
      moreinfo.includes("hidden")
        ? setmoreinfo("visible text-sm")
        : setmoreinfo("hidden text-sm");
    } else if (id < 3) {
      pureeinfo.includes("hidden")
        ? setpureeinfo("visible text-sm")
        : setpureeinfo("hidden text-sm");
    } else if (id < 4) {
      concinfo.includes("hidden")
        ? setconcinfo("visible text-sm")
        : setconcinfo("hidden text-sm");
    } else if (id < 5) {
      iqfinfo.includes("hidden")
        ? setiqfinfo("visible text-sm")
        : setiqfinfo("hidden text-sm");
    } else if (id < 6) {
      iqfinfo.includes("hidden")
        ? setiqfinfo("visible text-sm")
        : setiqfinfo("hidden text-sm");
    }
  };
  function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
  }
  importAll(require.context("../public/images", false, /\.(png|jpe?g|svg)$/));
  const images = Object.entries(cache).map((module) => module[1].default);
  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  var children = (
    <div className="" id="body">
      <a className="flex justify-center text-xl border-b-2 md:text-2xl text-dark-700 border-dark">
        Fruit, Vegetables and their products
      </a>
      <div className="flex items-center justify-center border-b-2 border-dark">
        <div className="grid grid-cols-1 mb-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className="relative ">
            <div className="flex items-center justify-center mt-4">
              <Image
                src={powder_logo}
                alt={"powder-logo"}
                layout="fixed"
                objectFit="cover"
                className="rounded-full "
                onError={() => setSrc("../public/errim.jpg")}
                blurDataURL="../public/blurim.jpg"
                height={150}
                width={150}
              />
            </div>
            <div className="">
              <button
                className="flex content-center visible px-2 py-3 mx-auto mt-2 text-base text-white sm:hidden bg-sky-500 text-md dark:bg-dark-200 dark:text-primary dark:hover:bg-gray-400 rounded-2xl hover:bg-sky-800 "
                onClick={() => detailsclick(1)}
                aria-label="powder-details"
              >
                Check powder products details
              </button>
            </div>
            <div className={moreinfo}>
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
          <div className="relative ">
            <div className="flex items-center justify-center mt-4">
              <Image
                src={puree_logo}
                alt={"puree-logo"}
                layout="fixed"
                objectFit="cover"
                className="rounded-full "
                height={150}
                width={150}
                onError={() => setSrc("../public/errim.jpg")}
                blurDataURL="../public/blurim.jpg"
              />
            </div>
            <button
              className="flex content-center visible px-2 py-3 mx-auto mt-2 text-base text-white sm:hidden bg-sky-500 text-md dark:bg-dark-200 dark:text-primary dark:hover:bg-gray-400 rounded-2xl hover:bg-sky-800 "
              onClick={() => detailsclick(2)}
              aria-label="puree-details"
            >
              Check puree products details
            </button>
            <div className={pureeinfo}>
              {puree.map((fru) => (
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
          <div className="relative ">
            <div className="flex items-center justify-center mt-4">
              <Image
                src={conc_logo}
                alt={"conc-logo"}
                layout="fixed"
                objectFit="cover"
                className="rounded-full "
                height={150}
                width={150}
                onError={() => setSrc("../public/errim.jpg")}
                blurDataURL="../public/blurim.jpg"
              />
            </div>
            <button
              className="flex content-center visible px-2 py-3 mx-auto mt-2 text-base text-white sm:hidden bg-sky-500 text-md dark:bg-dark-200 dark:text-primary dark:hover:bg-gray-400 rounded-2xl hover:bg-sky-800 "
              onClick={() => detailsclick(3)}
              aria-label="puree-details"
            >
              Check coencentrate products details
            </button>
            <div className={concinfo}>
              {concentrate.map((fru) => (
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
                onError={() => setSrc("../public/errim.jpg")}
                blurDataURL="../public/blurim.jpg"
              />
            </div>
            <button
              className="flex content-center visible px-2 py-3 mx-auto mt-2 text-base text-white sm:hidden bg-sky-500 text-md dark:bg-dark-200 dark:text-primary dark:hover:bg-gray-400 rounded-2xl hover:bg-sky-800 "
              onClick={() => detailsclick(4)}
              aria-label="puree-details"
            >
              Check IQF products details
            </button>
            <div className={iqfinfo}>
              {iqf.map((fru) => (
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
      <div className="mt-2 text-xl text-center center-align md:text-2xl">
        Fruit and Vegetable types avalible
        <div className="flex mt-4 overflow-auto h-96 ">
          <button className="focus:outline-none " type="button">
            {images.map((image) => (
              <div className="inline-grid object-center grid-cols-1 ml-1 border-2 rounded-md border-dark-500">
                <Image
                  src={image.src}
                  alt={image + "powderlogo"}
                  layout="fixed"
                  objectFit="cover"
                  className="rounded-md cursor-pointer hover:opacity-30"
                  height={100}
                  width={100}
                  onClick={() => {
                    setTitle(
                      image.src.substring(
                        image.src.indexOf("media/") + 6,
                        image.src.indexOf(".")
                      )
                    );
                    setImg(image.src);
                    setShowModal(true);
                  }}
                  onError={() => setSrc("../public/errim.jpg")}
                  blurDataURL="../public/blurim.jpg"
                />
              </div>
            ))}
          </button>
        </div>
        <button
          className="flex content-center visible px-2 py-3 mx-auto mt-2 text-base text-white sm:hidden bg-sky-500 text-md dark:bg-dark-200 dark:text-primary dark:hover:bg-gray-400 rounded-2xl hover:bg-sky-800 "
          onClick={() => detailsclick(5)}
          aria-label="display-more-details"
        >
          Display all products
        </button>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-dark-300 ">
                  <h3 className="text-3xl font-semibold">{title} Products</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  ></button>
                  <div className="text-red-500 outline-none focus:outline-none">
                    <button
                      className="uppercase outline-none focus:outline-none"
                      type="button"
                      aria-label="close-button for product info"
                      onClick={() => setShowModal(false)}
                    >
                      <AiFillCloseCircle className="w-5 h-5 mr-3 md:w-10 md:h-10 hover:text-red-800" />
                    </button>
                  </div>
                </div>
                {/*body*/}
                <div className="flex p-6 content">
                  <Image
                    src={Img}
                    placeholder="blur"
                    blurDataURL="../public/blurim.jpg"
                    alt={Img + "powderlogo"}
                    layout="fixed"
                    objectFit="cover"
                    className="rounded-md "
                    height={400}
                    width={400}
                    onError={() => setSrc("../public/errim.jpg")}
                  />
                  <p className="w-1/2 my-4 ml-3 text-lg leading-relaxed text-blueGray-500">
                    Natural Sun Dried Powder: <br />
                    Spray Dried Powder (SD): <br />
                    Freeze Dried Powder (FD): <br />
                    <div className="border-t border-solid border-dark-300"></div>
                    Puree(s):
                    <div className="border-t border-solid border-dark-300"></div>
                    Concentrate(s):
                    <div className="border-t border-solid border-dark-300"></div>
                    IQF-Frozen Fruits:
                    <div className="border-t border-solid border-dark-300"></div>
                    Dried Fruit:
                    <div className="border-t border-solid border-dark-300"></div>
                    Origin: TURKEY (TR) <br />
                    Preservatives: NO <br />
                    Sample Avalible: YES <br />
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid rounded-b border-dark-300">
                  <button
                    className="flex px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase rounded outline-none bg-sky-500 active:bg-emerald-600 hover:shadow-2xl focus:outline-none"
                    type="button"
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/drive/folders/1kNjB9i5Mz3Yg3zer-Dace2SbBh3o4nPi?usp=sharing"
                      );
                    }}
                  >
                    <BiCertification className="w-5 h-5 mr-3 text-white " />{" "}
                    Analysis & Specifications
                  </button>
                  <button
                    className="flex px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => {
                      // https://kuzeyind-sample-order.vercel.app/products/apricot-apricot-products
                      window.open(
                        "https://kuzeyind-sample-order.vercel.app/products/" +
                          title.toLowerCase() +
                          "-" +
                          title.toLowerCase() +
                          "-products"
                      );
                    }}
                  >
                    {" "}
                    <FiShoppingCart className="w-5 h-5 mr-3 text-white " />{" "}
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
