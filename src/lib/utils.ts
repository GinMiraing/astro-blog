import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Fancybox } from "@fancyapps/ui";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const bindFancybox = (groupAll: boolean) => {
  Fancybox.bind("[data-fancybox]", {
    groupAll: groupAll,
    Thumbs: false,
    Carousel: {
      transition: "slide",
    },
    Images: {
      zoom: false,
    },
    showClass: "f-fadeSlowIn",
    hideClass: "f-fadeSlowOut",
    wheel: "slide",
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
  });
};
