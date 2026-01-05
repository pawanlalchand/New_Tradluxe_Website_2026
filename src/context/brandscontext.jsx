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

// Placeholder images from Unsplash
const Img1 = "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80";
const Img3 = "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80";
const Img5 = "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80";
const Img6 = "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&q=80";
const Img7 = "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=800&q=80";
const Img8 = "https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&q=80";
const Img10 = "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80";
const Img11 = "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=800&q=80";
const Img12 = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80";
const Img13 = "https://images.unsplash.com/photo-1598524722956-30cfe9c44b19?w=800&q=80";
const Img14 = "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&q=80";
const Img15 = "https://images.unsplash.com/photo-1574936165098-a525d614f794?w=800&q=80";
const Img16 = "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=800&q=80";
const Img17 = "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80";
const Img18 = "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80";
const Img19 = "https://images.unsplash.com/photo-1608861716441-e11848030d02?w=800&q=80";
const Img20 = "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=800&q=80";
const Img21 = "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80";
const Img22 = "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=800&q=80";
const Img23 = "https://images.unsplash.com/photo-1600490036275-3850a9df5a40?w=800&q=80";
const Img24 = "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80";

const AiremBg = "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1200&q=80";
const Airem1 = "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80";
const Airem2 = "https://images.unsplash.com/photo-1595981234058-b466645849c7?w=800&q=80";
const Airem3 = "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&q=80";
const MestaBg = "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80";
const Mesta1 = "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80";
const Mesta2 = "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?w=800&q=80";
const Mesta3 = "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80";
const Mesta4 = "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&q=80";
const lamereBg = "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1200&q=80";
const lamere1 = "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80";
const lamere2 = "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80";
const lamere3 = "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=800&q=80";
const lamere4 = "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80";
const san1 = "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&q=80";
const san2 = "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=80";
const san3 = "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80";
const san4 = "https://images.unsplash.com/photo-1548848864-89225e6a3477?w=800&q=80";
const tom1 = "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=800&q=80";
const tom2 = "https://images.unsplash.com/photo-1546173159-315724a31696?w=800&q=80";
const tom3 = "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=800&q=80";
const tom4 = "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=800&q=80";
const tom5 = "https://images.unsplash.com/photo-1580870069867-74c57ee60d19?w=800&q=80";
const tom6 = "https://images.unsplash.com/photo-1628107451875-c705ace6845b?w=800&q=80";
const tom7 = "https://images.unsplash.com/photo-1622484211818-18f76c2d1ebb?w=800&q=80";
const tom8 = "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=800&q=80";
const tom9 = "https://images.unsplash.com/photo-1596702062351-8c2dfb5a6908?w=800&q=80";
const nov1 = "https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&q=80";
const nov2 = "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=800&q=80";
const nov3 = "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=80";
const nov4 = "https://images.unsplash.com/photo-1548848864-89225e6a3477?w=800&q=80";
const nov5 = "https://images.unsplash.com/photo-1606312619070-d48b4cde98af?w=800&q=80";
const nov6 = "https://images.unsplash.com/photo-1571506165871-ee72a35f3d86?w=800&q=80";
const nov7 = "https://images.unsplash.com/photo-1599901794946-e9d51a4dc0e5?w=800&q=80";
const nov8 = "https://images.unsplash.com/photo-1582225022085-e3c8f8f2c586?w=800&q=80";
const allumea1 = "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=800&q=80";
const allumea2 = "https://images.unsplash.com/photo-1598524722956-30cfe9c44b19?w=800&q=80";
const allumea3 = "https://images.unsplash.com/photo-1574936165098-a525d614f794?w=800&q=80";
const terre1 = "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=800&q=80";
const terre2 = "https://images.unsplash.com/photo-1566754436716-761987d5b5e3?w=800&q=80";
const happyole1 = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80";
const happyole2 = "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80";
const dominio1 = "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&q=80";
const dominio2 = "https://images.unsplash.com/photo-1584225064536-3f01e8c4ab99?w=800&q=80";
const dominio3 = "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?w=800&q=80";
const dominio4 = "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&q=80";
const dominio5 = "https://images.unsplash.com/photo-1502301103665-0b95cc738daf?w=800&q=80";
const oveja1 = "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?w=800&q=80";
const antica1 = "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80";
const antica2 = "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80";
const antica3 = "https://images.unsplash.com/photo-1598524722956-30cfe9c44b19?w=800&q=80";
const borgo1 = "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=800&q=80";
const borgo2 = "https://images.unsplash.com/photo-1574936165098-a525d614f794?w=800&q=80";
const borgo3 = "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&q=80";
const borgo4 = "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=800&q=80";
const viet1 = "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80";
const viet2 = "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80";
const viet3 = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80";
const viet4 = "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80";
const viet5 = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80";
const tea1 = "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80";
const tea2 = "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80";
const tea3 = "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=800&q=80";
const tea4 = "https://images.unsplash.com/photo-1597318112874-f86127f6dbc7?w=800&q=80";
const tea5 = "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&q=80";

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
