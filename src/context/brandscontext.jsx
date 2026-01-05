import React, { createContext, useState } from "react";

// import Img1 from "../assets/brands/La-Mere-Poulard.webp";
// import Img2 from "../assets/brands/Forno-Bonomi.webp";
// import Img3 from "../assets/brands/Mesta Wine.webp";
// import Img5 from "../assets/brands/Airem-Organic-Spirits.webp";
// import Img6 from "../assets/brands/San Andres.webp";
// import Img7 from "../assets/brands/tomarchio.png";
// import Img8 from "../assets/brands/8.jpg";
// import Img9 from "../assets/brands/9.jpg";
// import Img10 from "../assets/brands/10.jpg";
// import Img11 from "../assets/brands/11.jpg";
// import Img12 from "../assets/brands/12.jpg";
// import Img13 from "../assets/brands/Dominio de Fontana.png";
// import Img14 from "../assets/brands/Oveja Wine.png";
// import Img15 from "../assets/brands/Antica Murrina Premo.png";
// import Img16 from "../assets/brands/Borge Dei Trulli.png";
// import Img17 from "../assets/brands/Mr Viet.png";
// import Img18 from "../assets/brands/Teapins.png";
// import Img19 from "../assets/brands/Val de Sambre.jpg";
// import Img20 from "../assets/brands/chazz chips.png";
// import Img21 from "../assets/brands/pagani.png";
// import Img22 from "../assets/brands/Baratti & Milano Chocolates.png";
// import Img23 from "../assets/brands/Thaas chips.png";
// import Img24 from "../assets/brands/le-petit-normand-nappe-chocolat-lait.jpg";

import Logo1 from "../assets/logo/1.webp";
// import Logo2 from "../assets/logo/2.webp";
import Logo3 from "../assets/logo/3.webp";
// import Logo4 from "../assets/logo/4.png";
import Logo5 from "../assets/logo/5.webp";
import Logo6 from "../assets/logo/6.webp";
import Logo7 from "../assets/logo/7.png";
import Logo8 from "../assets/logo/8.png";
// import Logo9 from "../assets/logo/9.png";
import Logo10 from "../assets/logo/10.jpg";
import Logo11 from "../assets/logo/11.jpg";
import Logo12 from "../assets/logo/12.webp";
import Logo13 from "../assets/logo/13.png";
import Logo14 from "../assets/logo/14.png";
import Logo15 from "../assets/logo/15.png";
import Logo16 from "../assets/logo/16.png";
import Logo17 from "../assets/logo/17.png";
import Logo18 from "../assets/logo/18.png";
import Logo19 from "../assets/logo/19.png";
import Logo20 from "../assets/logo/20.png";
import Logo21 from "../assets/logo/21.png";
import Logo22 from "../assets/logo/22.png";
import Logo23 from "../assets/logo/23.png";
import Logo24 from "../assets/logo/24.png";

// import AiremBg from "../assets/products/airem/bg.webp";
// import Airem1 from "../assets/products/airem/1.webp";
// import Airem2 from "../assets/products/airem/2.webp";
// import Airem3 from "../assets/products/airem/3.webp";

// import MestaBg from "../assets/products/mesta/bg.webp";
// import Mesta1 from "../assets/products/mesta/1.webp";
// import Mesta2 from "../assets/products/mesta/2.webp";
// import Mesta3 from "../assets/products/mesta/3.webp";
// import Mesta4 from "../assets/products/mesta/4.webp";

// import lamereBg from "../assets/products/la-mere/bg.jpg";
// import lamere1 from "../assets/products/la-mere/1.webp";
// import lamere2 from "../assets/products/la-mere/2.webp";
// import lamere3 from "../assets/products/la-mere/3.webp";
// import lamere4 from "../assets/products/la-mere/4.webp";

// import forno1 from "../assets/products/forno-bonomi/1.png";
// import forno2 from "../assets/products/forno-bonomi/2.png";
// import forno3 from "../assets/products/forno-bonomi/3.png";

// import san1 from "../assets/products/san-andreas/1.png";
// import san2 from "../assets/products/san-andreas/3.png";
// import san3 from "../assets/products/san-andreas/2.png";
// import san4 from "../assets/products/san-andreas/4.png";

// import tom1 from "../assets/products/tomarchio/1.webp";
// import tom2 from "../assets/products/tomarchio/2.webp";
// import tom3 from "../assets/products/tomarchio/3.webp";
// import tom4 from "../assets/products/tomarchio/4.webp";
// import tom5 from "../assets/products/tomarchio/5.webp";
// import tom6 from "../assets/products/tomarchio/6.webp";
// import tom7 from "../assets/products/tomarchio/7.webp";
// import tom8 from "../assets/products/tomarchio/8.webp";
// import tom9 from "../assets/products/tomarchio/9.webp";

// import nov1 from "../assets/products/novi/1.webp";
// import nov2 from "../assets/products/novi/2.webp";
// import nov3 from "../assets/products/novi/3.webp";
// import nov4 from "../assets/products/novi/4.webp";
// import nov5 from "../assets/products/novi/5.webp";
// import nov6 from "../assets/products/novi/6.webp";
// import nov7 from "../assets/products/novi/7.webp";
// import nov8 from "../assets/products/novi/8.webp";

// import el1 from "../assets/products/el-valle/1.webp";
// import el2 from "../assets/products/el-valle/2.webp";

// import allumea1 from "../assets/products/allumea/1.webp";
// import allumea2 from "../assets/products/allumea/2.webp";
// import allumea3 from "../assets/products/allumea/3.webp";

// import terre1 from "../assets/products/terre-di-faiano/1.webp";
// import terre2 from "../assets/products/terre-di-faiano/2.webp";

// import happyole1 from "../assets/products/happyole/1.webp";
// import happyole2 from "../assets/products/happyole/2.webp";

// import dominio1 from "../assets/products/dominio/1.webp";
// import dominio2 from "../assets/products/dominio/2.webp";
// import dominio3 from "../assets/products/dominio/3.webp";
// import dominio4 from "../assets/products/dominio/4.webp";
// import dominio5 from "../assets/products/dominio/5.webp";

// import oveja1 from "../assets/products/oveja/1.webp";

// import antica1 from "../assets/products/antica/1.webp";
// import antica2 from "../assets/products/antica/2.webp";
// import antica3 from "../assets/products/antica/3.webp";

// import borgo1 from "../assets/products/borgo-dei-trulli/1.webp";
// import borgo2 from "../assets/products/borgo-dei-trulli/2.webp";
// import borgo3 from "../assets/products/borgo-dei-trulli/3.webp";
// import borgo4 from "../assets/products/borgo-dei-trulli/4.webp";

// import viet1 from "../assets/products/viet/1.webp";
// import viet2 from "../assets/products/viet/2.webp";
// import viet3 from "../assets/products/viet/3.webp";
// import viet4 from "../assets/products/viet/4.webp";
// import viet5 from "../assets/products/viet/5.webp";

// import tea1 from "../assets/products/teapins/1.webp";
// import tea2 from "../assets/products/teapins/2.webp";
// import tea3 from "../assets/products/teapins/3.webp";
// import tea4 from "../assets/products/teapins/4.webp";
// import tea5 from "../assets/products/teapins/5.webp";

// Placeholder for missing images
const placeholderImg = null;
const Img1 = placeholderImg;
const Img3 = placeholderImg;
const Img5 = placeholderImg;
const Img6 = placeholderImg;
const Img7 = placeholderImg;
const Img8 = placeholderImg;
const Img10 = placeholderImg;
const Img11 = placeholderImg;
const Img12 = placeholderImg;
const Img13 = placeholderImg;
const Img14 = placeholderImg;
const Img15 = placeholderImg;
const Img16 = placeholderImg;
const Img17 = placeholderImg;
const Img18 = placeholderImg;
const Img19 = placeholderImg;
const Img20 = placeholderImg;
const Img21 = placeholderImg;
const Img22 = placeholderImg;
const Img23 = placeholderImg;
const Img24 = placeholderImg;

const AiremBg = placeholderImg;
const Airem1 = placeholderImg;
const Airem2 = placeholderImg;
const Airem3 = placeholderImg;
const MestaBg = placeholderImg;
const Mesta1 = placeholderImg;
const Mesta2 = placeholderImg;
const Mesta3 = placeholderImg;
const Mesta4 = placeholderImg;
const lamereBg = placeholderImg;
const lamere1 = placeholderImg;
const lamere2 = placeholderImg;
const lamere3 = placeholderImg;
const lamere4 = placeholderImg;
const san1 = placeholderImg;
const san2 = placeholderImg;
const san3 = placeholderImg;
const san4 = placeholderImg;
const tom1 = placeholderImg;
const tom2 = placeholderImg;
const tom3 = placeholderImg;
const tom4 = placeholderImg;
const tom5 = placeholderImg;
const tom6 = placeholderImg;
const tom7 = placeholderImg;
const tom8 = placeholderImg;
const tom9 = placeholderImg;
const nov1 = placeholderImg;
const nov2 = placeholderImg;
const nov3 = placeholderImg;
const nov4 = placeholderImg;
const nov5 = placeholderImg;
const nov6 = placeholderImg;
const nov7 = placeholderImg;
const nov8 = placeholderImg;
const allumea1 = placeholderImg;
const allumea2 = placeholderImg;
const allumea3 = placeholderImg;
const terre1 = placeholderImg;
const terre2 = placeholderImg;
const happyole1 = placeholderImg;
const happyole2 = placeholderImg;
const dominio1 = placeholderImg;
const dominio2 = placeholderImg;
const dominio3 = placeholderImg;
const dominio4 = placeholderImg;
const dominio5 = placeholderImg;
const oveja1 = placeholderImg;
const antica1 = placeholderImg;
const antica2 = placeholderImg;
const antica3 = placeholderImg;
const borgo1 = placeholderImg;
const borgo2 = placeholderImg;
const borgo3 = placeholderImg;
const borgo4 = placeholderImg;
const viet1 = placeholderImg;
const viet2 = placeholderImg;
const viet3 = placeholderImg;
const viet4 = placeholderImg;
const viet5 = placeholderImg;
const tea1 = placeholderImg;
const tea2 = placeholderImg;
const tea3 = placeholderImg;
const tea4 = placeholderImg;
const tea5 = placeholderImg;

export const BrandsContext = createContext();

// eslint-disable-next-line react/prop-types
export const BrandsProvider = ({ children }) => {
  const [brands, setBrands] = useState([
    {
      name: "La Mère Poulard",
      logo: Logo1,
      image: Img1,
      flag: "🇫🇷",
      subline: "With Love, From France",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "la-mere-poulard",
      bg: lamereBg,
      shorthand: "La Mère Poulard",
      isLaunched: true,
      products: [
        {
          name: "La Mère Poulard Palets Citron - Lemon French Shortbreads",
          price: "$15.75",
          quantity: "375 g",
          img: lamere1,
          link: "",
        },
        {
          name: "La Mère Poulard Palets - French Shortbreads",
          price: "$15.75",
          quantity: "375 g",
          img: lamere2,
          link: "",
        },
        {
          name: "La Mère Poulard 1888 6 variétés - Carton Box",
          price: "$19.90",
          quantity: "375 g",
          img: lamere3,
          link: "",
        },
        {
          name: "La Mère Poulard Les Galettes d'Annette pur beurre",
          price: "$12.50",
          quantity: "220 g",
          img: lamere4,
          link: "",
        },
      ],
    },
    // {
    //   name: "Forno Bonomi",
    //   logo: Logo2,
    //   image: Img2,
    //   flag: "🇫🇷",
    //   subline: "With Love, From France",
    //   content:
    //     "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
    //   link: "forno-bonomi",
    //   bg: AiremBg,
    //   shorthand: "Forno Bonomi",
    //   isLaunched: true,
    //   products: [
    //     {
    //       name: "Salty Puff Pastry Minibites Tomato And Origano Flavour ",
    //       price: "$5.90",
    //       quantity: "150 g",
    //       img: forno1,
    //       link: "https://tradluxe.myshopify.com/collections/forno-bonomi/products/salty-puff-pastry-minibites-tomato-and-origano-flavour-150g",
    //     },
    //     {
    //       name: "Sweet Mini Bites Sugar Topped",
    //       price: "$7.90",
    //       quantity: "200 g",
    //       img: forno2,
    //       link: "https://tradluxe.myshopify.com/collections/forno-bonomi/products/copy-of-sweet-mini-bites-glazed-200g",
    //     },
    //     {
    //       name: "Italian Shortbread Finger",
    //       price: "$6.90",
    //       quantity: "150 g",
    //       img: forno3,
    //       link: "https://tradluxe.myshopify.com/collections/forno-bonomi/products/italian-shortbread-finger-150g",
    //     },
    //   ],
    // },
    {
      name: "Mesta Wine",
      logo: Logo3,
      image: Img3,
      flag: "🇮🇹",
      subline: "With Love, From France",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "mesta-wine",
      bg: MestaBg,
      shorthand: "Mesta Wine",
      isLaunched: true,
      products: [
        {
          name: "Mesta Rosado Tempranillo Organic Rose Wine from Spain",
          price: "$29.90",
          quantity: "750 ml",
          img: Mesta1,
          link: "",
        },
        {
          name: "Mesta Verdejo Organic White Wine from Spain",
          price: "$29.90",
          quantity: "750 ml",
          img: Mesta2,
          link: "",
        },
        {
          name: "Mesta Tempranillo Organic Red Wine from Spain",
          price: "$32.90",
          quantity: "750 ml",
          img: Mesta3,
          link: "",
        },
        {
          name: "Mesta Garnacha Organic Red Wine from Spain",
          price: "$32.90",
          quantity: "750 ml",
          img: Mesta4,
          link: "",
        },
      ],
    },
    // {
    //   name: "Chocovia",
    //   logo: Logo4,
    //   image: Img4,
    //   flag: "🇹🇷",
    //   subline: "With Love, From France",
    //   content:
    //     "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
    // },
    {
      name: "Airem Organic Spirits",
      logo: Logo5,
      image: Img5,
      flag: "🇪🇸",
      subline: "With Love, From France",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "airem-organic-spirits",
      bg: AiremBg,
      shorthand: "Airem",
      isLaunched: true,
      products: [
        {
          name: "Ultra Premium Eco-friendly Vodka Ecological, Kosher, Gluten Free",
          price: "$118.00",
          quantity: "700 ml",
          img: Airem1,
          link: "",
        },
        {
          name: "Whisky Single Malt 14 Years PX Cask Limited Edition",
          price: "$238.00",
          quantity: "700 ml",
          img: Airem2,
          link: "",
        },
        {
          name: "Gin Ultra Premium, Organic, Kosher, Gluten Free, Ecological",
          price: "$118.00",
          quantity: "700 ml",
          img: Airem3,
          link: "",
        },
      ],
    },
    {
      name: "San Andres",
      logo: Logo6,
      image: Img6,
      flag: "🇪🇸",
      subline: "With Love, From France",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "san-andres",
      bg: AiremBg,
      shorthand: "San Andres",
      isLaunched: true,
      products: [
        {
          name: "San Andrés Nougat Almond with tropical fruits",
          price: "$8.49",
          quantity: "150 gm",
          img: san1,
          link: "",
        },
        {
          name: "Torta Chocolate Almond Turron Cake",
          price: "$12.49",
          quantity: "200 gm",
          img: san2,
          link: "",
        },
        {
          name: "San Andrés Turrón Truffled Chocolate",
          price: "$10.99",
          quantity: "200 gm",
          img: san3,
          link: "",
        },
        {
          name: "San Andrés Turrón Marzipan with Candied Fruit",
          price: "$9.99",
          quantity: "200 gm",
          img: san4,
          link: "",
        },
      ],
    },
    {
      name: "Tomarchio",
      logo: Logo7,
      image: Img7,
      flag: "🇮🇹",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "tomarchio",
      bg: AiremBg,
      shorthand: "Tomarchio",
      isLaunched: true,
      products: [
        {
          name: "4 PACK Aperitivi 200ML BLONDE – with Orange and Bay Leaf",
          price: "$15.90",
          quantity: "200ml x 4",
          img: tom1,
          link: "",
        },
        {
          name: "4 PACK Aperitivi 200ML RED – with Blood Orange and Prickly Pear",
          price: "$15.90",
          quantity: "200ml x 4",
          img: tom2,
          link: "",
        },
        {
          name: "4 PACK Tomarchio TONIC WATER 275ML x4",
          price: "$17.90",
          quantity: "275ml x 4",
          img: tom3,
          link: "",
        },
        {
          name: "4 PACK Tomarchio COLA 275ML x4",
          price: "$17.90",
          quantity: "275ml x 4",
          img: tom4,
          link: "",
        },
        {
          name: "4 PACK Tomarchio GINGER BEER 275ML x4",
          price: "$17.90",
          quantity: "275ml x 4",
          img: tom5,
          link: "",
        },
        {
          name: "4 PACK Tomarchio TANGERINE 275ML x4 Organic",
          price: "$19.90",
          quantity: "275ml x 4",
          img: tom6,
          link: "",
        },
        {
          name: "4 PACK Tomarchio LEMONADE 275ML x4 Organic",
          price: "$19.90",
          quantity: "275ml x 4",
          img: tom7,
          link: "",
        },
        {
          name: "4 PACK Tomarchio BLONDE ORANGE 275ML x4 Organic",
          price: "$19.90",
          quantity: "275ml x 4",
          img: tom8,
          link: "",
        },
        {
          name: "4 PACK Tomarchio Blood Orange 275ML x4 ORGANIC",
          price: "$19.90",
          quantity: "275ml x 4",
          img: tom9,
          link: "",
        },
      ],
    },
    {
      name: "Novi Chocolates",
      logo: Logo8,
      image: Img8,
      flag: "🇮🇹",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "novi-chocolates",
      bg: AiremBg,
      shorthand: "Novi Chocolates",
      isLaunched: true,
      products: [
        {
          name: "NOVI Specialties Bars ** 3 packs **",
          price: "$20.70",
          quantity: "3 packs",
          img: nov1,
          link: "",
        },
        {
          name: "NOVI NoviPiù ** 6 packs **",
          price: "$17.40",
          quantity: "6 packs",
          img: nov2,
          link: "",
        },
        {
          name: "NOVI Nocciolato **TWIN pack (130Gx2=260G)**",
          price: "$21.80",
          quantity: "TWIN pack (130Gx2=260G)",
          img: nov3,
          link: "",
        },
        {
          name: "NOVI Nero Nero **3pack",
          price: "$17.70",
          quantity: "3 packs",
          img: nov4,
          link: "",
        },
        {
          name: "NOVI Classic Bars **3pack**",
          price: "$14.70",
          quantity: "3 packs",
          img: nov5,
          link: "",
        },
        {
          name: "NOVI Pralines - Cuadro **3pack**",
          price: "$38.70",
          quantity: "3 packs",
          img: nov6,
          link: "",
        },
        {
          name: "NOVI Pralines - Gianduiotto **3pack**",
          price: "$38.70",
          quantity: "3 packs",
          img: nov7,
          link: "",
        },
        {
          name: "Novi Big Frut Soft Jelly Sweets 150G **3pack (150Gx3=450G)",
          price: "$16.50",
          quantity: "3 packs",
          img: nov8,
          link: "",
        },
      ],
    },
    // {
    //   name: "El Valle Chips",
    //   logo: Logo9,
    //   image: Img9,
    //   flag: "🇪🇸",
    //   subline: "With Love, From Italy",
    //   content:
    //     "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
    //   link: "el-valle-chips",
    //   bg: AiremBg,
    //   shorthand: "El Valle",
    //   isLaunched: true,
    //   products: [
    //     {
    //       name: "EL VALLE Taste Collection Potato Chips x 2 Packs",
    //       price: "$10.98",
    //       quantity: "2 packs",
    //       img: el1,
    //       link: "https://tradluxe.myshopify.com/collections/el-valle/products/el-valle-taste-collection-potato-chips-x2-packs",
    //     },
    //     {
    //       name: "EL VALLE Premium Potato Chips 150g X 2 Packs",
    //       price: "$13.98",
    //       quantity: "2 packs",
    //       img: el2,
    //       link: "https://tradluxe.myshopify.com/collections/el-valle/products/el-valle-premium-potato-chips-150g-x-2-packs",
    //     },
    //   ],
    // },
    {
      name: "Allumea Organic Wines",
      logo: Logo10,
      image: Img10,
      flag: "🇮🇹",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "allumea-organics",
      bg: AiremBg,
      shorthand: "Allumea Organic",
      isLaunched: true,
      products: [
        {
          name: "ALLUMEA Rosso Terre di Chieti 750ML",
          price: "$39.00",
          quantity: "750 ml",
          img: allumea1,
          link: "",
        },
        {
          name: "ALLUMEA Nero d'Avola Merlot 750ML",
          price: "$39.00",
          quantity: "750 ml",
          img: allumea2,
          link: "",
        },
        {
          name: "ALLUMEA Grillo Chardonnay Sicilia 750ML",
          price: "$39.00",
          quantity: "750 ml",
          img: allumea3,
          link: "",
        },
      ],
    },
    {
      name: "Terre Di Faiano",
      logo: Logo11,
      image: Img11,
      flag: "🇮🇹",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "terre-di-faiano",
      bg: AiremBg,
      shorthand: "Terre Di Faiano",
      isLaunched: true,
      products: [
        {
          name: "TERRE di Faiano Primitivo Puglia Biologico 750ML",
          price: "$49.00",
          quantity: "750 ml",
          img: terre1,
          link: "",
        },
        {
          name: "TERRE di Faiano NERO D'AVOLA DOP Sicilia Organic Appassimento 750ML",
          price: "$49.00",
          quantity: "750 ml",
          img: terre2,
          link: "",
        },
      ],
    },
    {
      name: "Happyole Cocktails",
      logo: Logo12,
      image: Img12,
      flag: "🇪🇸",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "happyole",
      bg: AiremBg,
      shorthand: "Happyole",
      isLaunched: true,
      products: [
        {
          name: "HAPPYOLE Sangria 750ml Red / White / Rose",
          price: "$35.00",
          quantity: "750 ml",
          img: happyole1,
          link: "",
        },
        {
          name: "HAPPYOLE Strawberry Mojito / Mojito / Orange Cocktail 750ml",
          price: "$39.00",
          quantity: "750 ml",
          img: happyole2,
          link: "",
        },
      ],
    },
    {
      name: "Dominio de Fontana",
      logo: Logo13,
      image: Img13,
      flag: "🇪🇸",
      subline: "With Love, From Spain",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "dominio",
      bg: AiremBg,
      shorthand: "Dominio de Fontana",
      isLaunched: true,
      products: [
        {
          name: "DOMINIO de FONTANA Verdejo Sauvignon Blanc Orgánico 750ml",
          price: "$40.00",
          quantity: "750 ml",
          img: dominio1,
          link: "",
        },
        {
          name: "DOMINIO de FONTANA Verdejo Sauvignon Blanc Orgánico 750ml",
          price: "$40.00",
          quantity: "750 ml",
          img: dominio2,
          link: "",
        },
        {
          name: "DOMINIO de FONTANA Tempranillo Cabernet Orgánico 750ml",
          price: "$45.00",
          quantity: "750 ml",
          img: dominio3,
          link: "",
        },
        {
          name: "DOMINIO de FONTANA Tempranillo Syrah Orgánico 750ml",
          price: "$40.00",
          quantity: "750 ml",
          img: dominio4,
          link: "",
        },
        {
          name: "DOMINIO de FONTANA Garnacha Syrah Organico 750ml",
          price: "$40.00",
          quantity: "750 ml",
          img: dominio5,
          link: "",
        },
      ],
    },
    {
      name: "Oveja Wine",
      logo: Logo14,
      image: Img14,
      flag: "🇪🇸",
      subline: "With Love, From Spain",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "oveja",
      bg: AiremBg,
      shorthand: "Oveja",
      isLaunched: true,
      products: [
        {
          name: "OVEJA Moscatel Organic White Wine from Spain 750ml",
          price: "$42.00",
          quantity: "750 ml",
          img: oveja1,
          link: "",
        },
      ],
    },
    {
      name: "Antica Murrina Premo",
      logo: Logo15,
      image: Img15,
      flag: "🇮🇹",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "antica",
      bg: AiremBg,
      shorthand: "Antica",
      isLaunched: true,
      products: [
        {
          name: "ANTICA MURRINA Premo Vino Rosato 750ML",
          price: "$39.00",
          quantity: "750 ml",
          img: antica1,
          link: "",
        },
        {
          name: "ANTICA MURRINA Premo Sangiovese IGP Rubicone Rosso 750ML",
          price: "$39.00",
          quantity: "750 ml",
          img: antica2,
          link: "",
        },
        {
          name: "ANTICA MURRINA Premo Vino Bianco 750ML",
          price: "$39.00",
          quantity: "750 ml",
          img: antica3,
          link: "",
        },
      ],
    },
    {
      name: "BORGO dei TRULLI",
      logo: Logo16,
      image: Img16,
      flag: "🇮🇹",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "borgo",
      bg: AiremBg,
      shorthand: "Borgo",
      isLaunched: true,
      products: [
        {
          name: "BORGO dei TRULLI Salice Salentino DOP Riserva 750ML",
          price: "$49.00",
          quantity: "750 ml",
          img: borgo1,
          link: "",
        },
        {
          name: "BORGO dei TRULLI Primitivo di Manduria 750ML",
          price: "$59.00",
          quantity: "750 ml",
          img: borgo2,
          link: "",
        },
        {
          name: "BORGO dei TRULLI Primitivo Puglia 750ML",
          price: "$49.00",
          quantity: "750 ml",
          img: borgo3,
          link: "",
        },
        {
          name: "BORGO dei TRULLI Primitivo Salento Rosato 750ML",
          price: "$49.00",
          quantity: "750 ml",
          img: borgo4,
          link: "",
        },
      ],
    },
    {
      name: "MR.VIET Coffee",
      logo: Logo17,
      image: Img17,
      flag: "🇻🇳",
      subline: "With Love, From Vietnam",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "viet",
      bg: AiremBg,
      shorthand: "Mr.Viet Coffee",
      isLaunched: true,
      products: [
        {
          name: "MR.VIET Instant Coffee - Box",
          price: "$7.99",
          quantity: "1 box",
          img: viet1,
          link: "",
        },
        {
          name: "MR.VIET Drip Bag Coffee, 10 drip bags by 10g",
          price: "$14.99",
          quantity: "10 x 10g",
          img: viet2,
          link: "",
        },
        {
          name: "MR.VIET 'Hazelnut', 250g. Ground coffee",
          price: "$12.99",
          quantity: "250g",
          img: viet3,
          link: "",
        },
        {
          name: "MR.VIET 'Good Morning Vietnam', 250g. Ground coffee",
          price: "$12.99",
          quantity: "250g",
          img: viet4,
          link: "",
        },
        {
          name: "MR.VIET Real Strong Ground (Star) Coffee with Phin Filter - 250g",
          price: "$22.99",
          quantity: "250g",
          img: viet5,
          link: "",
        },
      ],
    },
    {
      name: "Teapins",
      logo: Logo18,
      image: Img18,
      flag: "🇻🇳",
      subline: "With Love, From Vietnam",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "teapins",
      bg: AiremBg,
      shorthand: "Teapins",
      isLaunched: true,
      products: [
        {
          name: "TEAPINS for Local, Bag 100g",
          price: "$7.99",
          quantity: "100g",
          img: tea1,
          link: "",
        },
        {
          name: "TEAPINS Farmers Tea, Box 70g-100g",
          price: "$12.99",
          quantity: "Box 70g-100g",
          img: tea2,
          link: "",
        },
        {
          name: "TEAPINS Vietnam Delights, Box 5 Teas - 50g",
          price: "$21.99",
          quantity: "5 Teas - 50g",
          img: tea3,
          link: "",
        },
        {
          name: "TEAPINS Vietnam Delights, Box 25 Teas - 125g",
          price: "$75.99",
          quantity: "Box 25 Teas",
          img: tea4,
          link: "",
        },
        {
          name: "TEAPINS IWY ( I Wish You ) 10 Teas, 100g Box",
          price: "$24.99",
          quantity: "10 Teas, 100g Box",
          img: tea5,
          link: "",
        },
      ],
    },
    {
      name: "Val de Sambre",
      logo: Logo19,
      image: Img19,
      flag: "🇧🇪",
      subline: "With Love, From Belgium",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "val-de-sambre",
      bg: AiremBg,
      shorthand: "val-de-sambre",
      isLaunched: false,
      products: [],
    },
    {
      name: "Chazz Chips",
      logo: Logo20,
      image: Img20,
      flag: "🇧🇪",
      subline: "With Love, From Belgium",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "chazz-chips",
      bg: AiremBg,
      shorthand: "chazz-chips",
      isLaunched: false,
      products: [],
    },
    {
      name: "Pagani Pasta",
      logo: Logo21,
      image: Img21,
      flag: "🇮🇹",
      subline: "With Love, From Italy",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "pagani-pasta",
      bg: AiremBg,
      shorthand: "pagani-pasta",
      isLaunched: false,
      products: [],
    },
    {
      name: "Baratti & Milano Chocolates",
      logo: Logo22,
      image: Img22,
      flag: "🇮🇹",
      subline: "With Love, From Belgium",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "baratti",
      bg: AiremBg,
      shorthand: "baratti",
      isLaunched: false,
      products: [],
    },
    {
      name: "Thaas chips",
      logo: Logo23,
      image: Img23,
      flag: "🇫🇷",
      subline: "With Love, From France",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "thaas-chips",
      bg: AiremBg,
      shorthand: "thaas-chips",
      isLaunched: false,
      products: [],
    },
    {
      name: "Le Biscuitterie D’Abbaye",
      logo: Logo24,
      image: Img24,
      flag: "🇫🇷",
      subline: "With Love, From France",
      content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
      link: "le-biscuitterie-dAbbaye",
      bg: AiremBg,
      shorthand: "le-biscuitterie-dAbbaye",
      isLaunched: false,
      products: [],
    },
    //     {
    //   name: "Val de Sambre Brewery",
    //   logo: Logo19,
    //   image: Img9,
    //   flag: "🇪🇸",
    //   subline: "With Love, From Italy",
    //   content:
    //     "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.",
    //   link: "el-valle-chips",
    //   bg: AiremBg,
    //   shorthand: "El Valle",
    //   isLaunched: false,
    //   products: [
    //     {
    //       name: "EL VALLE Taste Collection Potato Chips x 2 Packs",
    //       price: "$10.98",
    //       quantity: "2 packs",
    //       img: el1,
    //       link: "https://tradluxe.myshopify.com/collections/el-valle/products/el-valle-taste-collection-potato-chips-x2-packs",
    //     },
    //     {
    //       name: "EL VALLE Premium Potato Chips 150g X 2 Packs",
    //       price: "$13.98",
    //       quantity: "2 packs",
    //       img: el2,
    //       link: "https://tradluxe.myshopify.com/collections/el-valle/products/el-valle-premium-potato-chips-150g-x-2-packs",
    //     },
    //   ],
    // },
  ]);

  return (
    <BrandsContext.Provider value={[brands, setBrands]}>
      {children}
    </BrandsContext.Provider>
  );
};
