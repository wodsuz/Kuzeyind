import { NextSeo } from "next-seo";
import Head from "next/head";
import { date } from "../components/time.tsx";
const Headtitle = () => {
  const title =
    "Kuzeyind. © Export & Import - " +
    date() +
    "- Fruit & Disposable Medical Products Export Webpage";
  return (
    <div>
      <Head>
        <meta name="author" content="Ongun-Demirag" key="title" />
        <meta
          name="description"
          content="Web page to view company details for food and disposable medical products online. Order fresh fruit and vegetables 
          samples. Order fruit powders and concentrates. Order dried sliced fruits and much more."
        />
        <meta
          name="keywords  "
          content="Fresh fruit,Fresh Vegetables,Dried fruits,Powders,Freeze-Dried Powders,Concentrates,Spray-Dried Powders,%100 Powders,Disposable Medical products"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta
          property="og:title"
          content="Kuzey ind Order fruit, vegetable and medical disposables"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://kuzeyind-sample-order.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://kuzeyind-sample-order.vercel.app/logo.jpg"
        />
        <meta
          property="og:description"
          content="Web page to order sample food and disposable medical products online. Order fresh fruit and vegetables 
          samples. Order fruit powders and concentrates. Order dried sliced fruits and much more."
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Kuzey Ind. Order" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0000000" />
        <link rel="icon" href="/logonew.ico" />
      </Head>
      <NextSeo
        title={title}
        description="Web page to order sample food and disposable medical products online."
      />
    </div>
  );
};
export default Headtitle;
