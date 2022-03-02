import { IFoodProducts } from "./type";
import { BiCategory, BiBookmark } from "react-icons/bi";
import { GiOpenedFoodCan, GiDiploma, GiFactory } from "react-icons/gi";
export const fruit: IFoodProducts[] = [
  {
    Icon: BiBookmark,
    title: "Description: ",
    about:
      "Fresh fruits and vegetables are dried and ground into powder with moisture of less than 7%," +
      "maintaining the nutrition and flavor of raw materials without any additives." +
      "Can be applied to all areas of the food industry to improve the nutrition, color " +
      "and flavor of products. You can use different powders to enrich the variety of products. " +
      "Mainly used for baking, snacks, solid drinks, baby food, candy products, etc",
  },
  {
    Icon: BiCategory,
    title: "Types: ",
    about: "Natural sun dried, Spray Dried(SD),Freeze Dried(FD)",
  },
  {
    Icon: GiDiploma,
    title: "Certificates: ",
    about: "Helal,Kosher,CE,more upon agreement and request.",
  },
  {
    Icon: GiOpenedFoodCan,
    title: "Sample: ",
    about: "Free of charge, avalible on request.",
  },
  {
    Icon: GiFactory,
    title: "Industries: ",
    about: "Natural sun dried,Spray Dried(SD),Freeze Dried(FD)",
  },
];
