import Image from "next/image";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { RiMouseFill } from "react-icons/ri";
import {
  FaLinkedinIn,
  FaGoogle,
  FaYandex,
  FaWhatsapp,
  FaGoogleDrive,
  FaInstagram,
} from "react-icons/fa";
import {
  FaFileCode,
  FaDownload,
  FaHackerrank,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import { GiFruitBowl, GiMedicalDrip } from "react-icons/gi";
const Topbanner = () => {
  const logo = require("../public/logonew2.jpg");
  return (
    <div
      className="flex items-center justify-center mx-auto 
    overflow-hidden relative text-dark-100 
    dark:bg-dark-100 dark:text-primary "
    >
      <div className="relative opacity-20 lg:opacity-100 h-40 w-40 mt-2 ">
        <Image
          src={logo}
          alt={"biggericon"}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="max-w-screen-2xl absolute w-full lg:relative lg:w-auto ">
        <p className="text-lg underline md:text-xl decoration-1 decoration-sky-500 ">
          <a
            className="flex items-center justify-center decoration-sky-500 hover:text-yellow-800 "
            href="https://www.kuzeyind.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiMouseFill className="w-5 h-5 md:w-7 md:h-7 " />
            www.kuzeyind.com
          </a>
        </p>
        <p className="text-lg underline md:flex items-center justify-center md:text-xl decoration-1 decoration-sky-500 ">
          <a
            className="flex items-center justify-center decoration-sky-500 hover:text-yellow-800 "
            href="mailto:naz@kuzeyind.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail className="w-5 h-5 md:w-7 md:h-7 " />
            naz@kuzeyind.com
          </a>
          <a
            className="flex items-center justify-center pl-2 sm:pl-5 decoration-sky-500 hover:text-yellow-800 "
            href="mailto:ongun@kuzeyind.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail className="w-5 h-5 md:w-7 md:h-7 " />
            ongun@kuzeyind.com
          </a>
        </p>
        <p className="text-sm underline sm:text-lg decoration-1 decoration-sky-500">
          <a
            className="flex text-center decoration-sky-500 hover:text-yellow-800 justify-center items-center "
            href="https://goo.gl/maps/wePBK3EmKBXaga7K6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdLocationPin className="w-8 h-8 ml-5 sm:w-7 sm:h-7" />
            Atakent sitesi 1225.sokak no:33 İncek Gölbaşı ANKARA/TURKEY, 06830
          </a>
        </p>
        <p className="flex justify-center pt-1 pb-1 underline text-1xl text-sky decoration-2 decoration-sky-500 ">
          <a
            href="https://www.linkedin.com/company/80288110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <FaLinkedinIn className="w-10 h-10 border-2 border-solid rounded-md sm:w-12 sm:h-12 md:w-14 md:h-14 hover:text-yellow-800 border-sky-500 hover:border-yellow-700" />
          </a>
          <a
            href="https://www.google.com/search?q=kuzey+ind"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GoogleSearch"
          >
            <FaGoogle className="w-10 h-10 ml-3 border-2 border-solid rounded-md sm:w-12 sm:h-12 sm:ml-5 md:w-14 md:h-14 md:ml-8 hover:text-yellow-800 border-sky-500 hover:border-yellow-700" />
          </a>
          <a
            href="https://lnkd.in/eHV-DJUe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yandex"
          >
            <FaYandex className="w-10 h-10 ml-3 border-2 border-solid rounded-md sm:w-12 sm:h-12 sm:ml-5 md:w-14 md:h-14 md:ml-8 hover:text-yellow-800 border-sky-500 hover:border-yellow-700 " />
          </a>
          <a
            href="https://wa.me/905307081298"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp"
          >
            <FaWhatsapp className="w-10 h-10 ml-3 border-2 border-solid rounded-md sm:w-12 sm:h-12 sm:ml-5 md:w-14 md:h-14 md:ml-8 hover:text-yellow-800 border-sky-500 hover:border-yellow-700 " />
          </a>
          <a
            href="https://lnkd.in/e9f9GBui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="w-10 h-10 ml-3 border-2 border-solid rounded-md sm:w-12 sm:h-12 sm:ml-5 md:w-14 md:h-14 md:ml-8 hover:text-yellow-800 border-sky-500 hover:border-yellow-700 " />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1_uCKkP-CEjh65cs6gO3OsFuokgQq0-O_?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fruitcatalogs"
          >
            <GiFruitBowl className="w-10 h-10 ml-3 border-2 border-solid rounded-md sm:w-12 sm:h-12 sm:ml-5 md:w-14 md:h-14 md:ml-8 hover:text-yellow-800 border-sky-500 hover:border-yellow-700 " />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1_uCKkP-CEjh65cs6gO3OsFuokgQq0-O_?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medicalcatalogs"
          >
            <GiMedicalDrip className="w-10 h-10 ml-3 border-2 border-solid rounded-md sm:w-12 sm:h-12 sm:ml-5 md:w-14 md:h-14 md:ml-8 hover:text-yellow-800 border-sky-500 hover:border-yellow-700 " />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Topbanner;
