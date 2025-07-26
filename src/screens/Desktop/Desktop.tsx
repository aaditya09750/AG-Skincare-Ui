import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import BagIcon from '../../svg/bag-4-svgrepo-com 1.svg?react';
import CartIcon from '../../svg/cart-large-2-svgrepo-com 5.svg?react';
import PersonIcon from '../../svg/person 1.svg?react';
import HeartIcon from '../../svg/heart-svgrepo-com (1) 1.svg?react';
import AwardIcon from '../../svg/award-svgrepo-com 1.svg?react';
import LeftArrowIcon from '../../svg/left arrow 1.svg?react';
import RightArrowIcon from '../../svg/right arrow 1.svg?react';
import HeadphoneIcon from '../../svg/headphone-svgrepo-com 1.svg?react';

export const Desktop = (): JSX.Element => {
  // Navigation items
  const navItems = [
    { text: "All Products", href: "#" },
    { text: "Serum", href: "#" },
    { text: "Sunscreen", href: "#" },
    { text: "Bundle", href: "#" },
  ];

  // Why our products section data
  const whyOurProducts = [
    {
      number: "01",
      title: "Bio Ingredients",
      description:
        "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
    },
    {
      number: "02",
      title: "Everything Natural",
      description:
        "Pure ingredients for pure skin. The Perfect solution for your skin care needs.",
    },
    {
      number: "03",
      title: "All Handmade",
      description:
        "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
    },
  ];

  // Product categories
  const productCategories = [
    { text: "NEW ARRIVAL", active: true },
    { text: "CLEANSING", active: false },
    { text: "ACNE FIGHTER", active: false },
    { text: "ANTI AGING", active: false },
  ];

  // Best selling products
  const bestSellingProducts = [
    {
      image: "/mask-group.png",
      title: "ALYA SKIN CLEANSER.",
      price: "FROM $29.99",
    },
    {
      image: "/mask-group-2.png",
      title: "RITUAL OF SAKURA.",
      price: "FROM $27.99",
    },
    {
      image: "/mask-group-4.png",
      title: "THE BODY LOTION.",
      price: "FROM $19.99",
    },
  ];

  // New arrival products
  const newArrivalProducts = [
    {
      image: "/mask-group-1.png",
      title: "ALYA SKIN CLEANSER.",
      price: "FROM $29.99",
    },
    {
      image: "/mask-group-3.png",
      title: "RITUAL OF SAKURA.",
      price: "FROM $27.99",
      darkButton: true,
    },
    {
      image: "/mask-group-5.png",
      title: "THE BODY LOTION.",
      price: "FROM $19.99",
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: "Are your products cruelty-free?",
      answer:
        "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
      isOpen: true,
    },
    {
      question: "Are your products safe for sensitive skin?",
      answer: "",
    },
    {
      question: "What's your return policy?",
      answer: "",
    },
    {
      question: "Do you ship internationally?",
      answer: "",
    },
    {
      question: "How do i choose the right product?",
      answer: "",
    },
  ];

  // Footer links
  const footerSocialLinks = ["Facebook", "Instagram", "Youtube"];
  const footerPolicyLinks = [
    "Terms of Service",
    "Privacy Policy",
    "Cookies Policy",
  ];

  return (
    <main className="relative bg-[#eff5e1] overflow-x-hidden">
      {/* Header/Navigation */}
      <header className="flex justify-between items-center px-[100px] py-[49px]">
         <h1 className="font-['Inter'] font-extrabold text-[378px] leading-[457px] uppercase text-[#2D3B36]">
          SKINCARE
        </h1>

        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex gap-8">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <a
                  href={item.href}
                  className="font-normal text-xl text-[#2d3b36] [font-family:'Inter',Helvetica] tracking-[-1.00px]"
                >
                  {item.text}
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#f8fee5] rounded-full flex items-center justify-center">
              <BagIcon className="w-7 h-7 text-[#2d3b36]" />
            </div>
            <span className="font-normal text-2xl text-[#2d3b36] [font-family:'Inter',Helvetica] tracking-[-0.20px]">
              Cart (1)
            </span>
          </div>
          <div className="w-16 h-16 bg-[#f8fee5] rounded-full flex items-center justify-center">
            <HeartIcon className="w-7 h-7 text-[#2d3b36]" />
          </div>
          <div className="w-16 h-16 bg-[#f8fee5] rounded-full flex items-center justify-center">
            <PersonIcon className="w-7 h-7 text-[#2d3b36]" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-[100px] mt-10">
        <div className="flex justify-between">
          <div className="max-w-[335px]">
            <p className="font-normal text-xl text-[#2d3b36] [font-family:'Inter',Helvetica]">
              Transform your skincare routine with premium products that restore,
              protect, and enhance your natural glow every day.
            </p>
            <Button className="mt-16 bg-[#2d3b36] text-[#eff5e1] rounded-[100px] h-[60px] w-[180px] text-xl">
              Shop Now
            </Button>
          </div>

          <div className="absolute w-[398px] h-[253px] left-1/2 -translate-x-1/2 top-[218px]">
      <h2 className="font-['Inter'] font-bold text-[100px] leading-[90px] tracking-[-0.03em] uppercase text-[#2D3B36]">
        GLOW
        <br />
        NATUR-ALLY
      </h2>
    </div>

          <img
            className="w-[223px] h-[220px] object-cover"
            alt="Skin care beauty product"
            src="/skin-care-beauty-cosmetic-packaging-design-agency-mumbai-delhi-b-1.png"
          />
        </div>

        <div className="relative mt-20">
          <h2 className="text-[378px] font-extrabold text-[#2d3b36] [font-family:'Inter',Helvetica] whitespace-nowrap">
            SKINCARE
          </h2>

          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <img
              className="w-[610px] h-[676px] object-cover"
              alt="Skincare product showcase"
              src="/chatgpt-image-jun-15--2025--10-24-47-pm-2.png"
            />

            <div className="relative">
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-[#eff5e1] rounded-[200px] w-[476px] h-[100px] flex items-center">
                <div className="absolute left-1 w-[90px] h-[90px] bg-[#eff5e1] rounded-[50px] border border-dashed border-[#2d3b36] flex items-center justify-center">
                  <img
                    className="w-20 h-20 object-cover"
                    alt="Skin care beauty"
                    src="/skin-care-beauty-cosmetic-packaging-design-agency-mumbai-delhi-b-1.png"
                  />
                </div>
                <p className="ml-[172px] font-normal text-xl text-[#2d3b36] [font-family:'Inter',Helvetica]">
                  While giving you an invigorating cleansing experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#fefff4] mt-[100px] py-[99px]">
        {/* About Section */}
        <div className="px-[100px]">
          <h2 className="font-normal text-[#2d3b36] text-6xl [font-family:'Inter',Helvetica] tracking-[-1.20px]">
            YOUR SKIN DESERVES <br />
            THE BEST CARE.
          </h2>

          <p className="mt-10 font-normal text-lg text-[#525349] [font-family:'Inter',Helvetica] tracking-[-0.36px] leading-6">
            Discover a curated collection of skincare products designed to
            rejuvenate,
            <br />
            protect, and pamper your skin. Explore our range crafted with love
            backed
            <br />
            by science, and inspired by nature.
          </p>

          <div className="mt-16 max-w-[1600px]">
            <p className="font-normal text-[53px] text-[#2d3b36] [font-family:'Inter',Helvetica] tracking-[-0.98px] leading-[78px]">
              Experience the ultimate in skincare with our expertly formulated
              products, crafted to nourish, protect, and rejuvenate your skin. Combining
              the finest
              <br />
              natural ingredients with{" "}
              <span className="text-[#2d3b364c]">
                advanced science, our collection ensures every
                <br />
                skin type can achieve a radiant, healthy glow. Embrace your
                beauty with
                <br />
                confidence every day. Experience the ultimate in skincare with
                our <br />
                expertly formulated products, crafted to nourish, protect, and
                rejuvenate
                <br />
                your skin.
              </span>
            </p>
          </div>
        </div>

        {/* Why Our Products */}
        <div className="px-[100px] mt-20">
          <Badge className="bg-[#fefff4] text-[#2d3b36] rounded-[100px] h-[60px] px-[57px] py-5 border border-solid border-[#2d3b36] text-xl font-normal">
            <div className="w-5 h-5 bg-[#2d3b36] rounded-[10px] mr-4"></div>
            Why Our Products
          </Badge>

          <div className="mt-10 space-y-10">
            {whyOurProducts.map((item, index) => (
              <div key={index} className="flex">
                <h3 className="bg-[linear-gradient(180deg,rgba(41,51,48,1)_0%,rgba(254,255,244,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-normal text-6xl tracking-[-1.20px] whitespace-nowrap">
                  {item.number}
                </h3>
                <div className="ml-[113px]">
                  <h4 className="font-normal text-[#2d3b36] text-6xl [font-family:'Inter',Helvetica] tracking-[-1.20px] whitespace-nowrap">
                    {item.title}
                  </h4>
                  <p className="mt-4 font-normal text-lg text-[#525349] [font-family:'Inter',Helvetica] tracking-[-0.36px] leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Award Section */}
        <div className="relative mt-10 ml-[971px] w-[849px] h-[1081px] bg-[url(/chatgpt-image-jun-15--2025--11-52-20-pm-1.png)] bg-cover bg-[50%_50%]">
          <div className="absolute bottom-[81px] left-1/2 transform -translate-x-1/2 flex items-center">
            <div className="relative">
              <div className="w-20 h-20 bg-[#2d3b36] rounded-[200px] flex items-center justify-center">
                <div className="w-[90px] h-[90px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[50px] border border-dashed border-[#2d3b36] flex items-center justify-center bg-[#2d3b36]">
                  <AwardIcon className="w-[50px] h-[50px] text-[#f8f9f2]" aria-label="Award icon" />
                </div>
              </div>
              <div className="ml-4 bg-[#eff5e1] rounded-[200px] px-8 py-4">
                <p className="font-normal text-xl text-[#2d3b36] [font-family:'Inter',Helvetica]">
                  Best Skin Care Product
                  <br />
                  Award Wining
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Best Selling Products */}
        <div className="px-[100px] mt-20">
          <div className="flex justify-between items-center">
            <Badge className="bg-[#fefff4] text-[#2d3b36] rounded-[100px] h-[60px] px-[58px] py-5 border border-solid border-[#2d3b36] text-xl font-normal">
              <div className="w-5 h-5 bg-[#2d3b36] rounded-[10px] mr-4"></div>
              Best Selling Products
            </Badge>

            <div className="flex items-center">
              <p className="font-normal text-xl text-[#2d3b36] [font-family:'Inter',Helvetica] tracking-[-0.40px] mr-[678px]">
                SINCE 2001
              </p>
              <p className="font-normal text-xl text-[#2d3b36] [font-family:'Inter',Helvetica] tracking-[-0.40px]">
                LEARN MORE
              </p>
            </div>
          </div>

          <h2 className="text-center mt-10 font-normal text-6xl text-[#2d3b36] [font-family:'Inter',Helvetica] tracking-[-1.20px]">
            Skincare That Brings Out
            <br />
            Your Natural Radiance
          </h2>

          <div className="flex justify-between mt-16">
            <div className="flex gap-6">
              <Button
                variant="outline"
                className="w-20 h-20 rounded-[40px] border border-solid border-[#2d3b36] flex items-center justify-center"
              >
                <LeftArrowIcon className="w-[41px] h-[15px]" aria-label="Previous" />
              </Button>
              <Button className="w-20 h-20 rounded-[40px] bg-[#2d3b36] flex items-center justify-center">
                <RightArrowIcon className="w-[42px] h-[15px]" aria-label="Next" />
              </Button>
            </div>
          </div>

          {/* Product Cards */}
          <div className="flex gap-6 mt-10">
            {bestSellingProducts.map((product, index) => (
              <Card
                key={index}
                className="w-[560px] h-[770px] bg-[url(${product.image})] bg-[100%_100%] border-none rounded-none"
              >
                <CardContent className="p-0">
                  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[520px] h-[100px] bg-[#fefff4] rounded-[10px] flex items-center justify-between px-10">
                    <div>
                      <h3 className="font-normal text-xl text-[#2d3b36] [font-family:'Inter',Helvetica] tracking-[-1.00px]">
                        {product.title}
                      </h3>
                      <p className="font-normal text-base text-[#2d3b3680] [font-family:'Inter',Helvetica] tracking-[-0.80px] mt-2">
                        {product.price}
                      </p>
                    </div>
                    <div className="w-20 h-20 bg-[#2d3b361a] rounded-[10px] flex items-center justify-center">
                      <CartIcon className="w-[30px] h-[30px]" aria-label="Add to cart" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Banner Section */}
        <div className="px-[100px] mt-20">
          <div className="relative w-full h-[1146px]">
            <img
              className="w-full h-full object-cover"
              alt="Model with skincare products"
              src="/model.png"
            />
            <div className="absolute bottom-0 left-0 w-full h-[400px] rounded-[30px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(41,51,48,1)_100%)]">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="font-normal text-[#fefff4] text-[50px] [font-family:'Inter',Helvetica] tracking-[-1.60px]">
                  Feel Beautiful Inside and Out
                  <br />
                  with Every Product.
                </h2>
                <Button className="mt-10 bg-[#fefff4] text-[#2d3b36] rounded-[100px] h-[60px] w-[180px] text-xl">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* New Arrivals */}
        <div className="px-[100px] mt-20">
          <h2 className="text-center font-normal text-6xl text-[#2d3b36] [font-family:'Inter',Helvetica] tracking-[-1.20px]">
            Feel Beautiful Inside and Out
            <br />
            with Every Product.
          </h2>

          <div className="flex justify-center gap-4 mt-10">
            {productCategories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`rounded-[100px] h-[60px] px-8 text-xl ${
                  category.active
                    ? "bg-[#2d3b36] text-[#fefff4]"
                    : "bg-[#fefff4] text-[#2d3b36] border border-solid border-[#2d3b36]"
                }`}
              >
                {category.text}
              </Button>
            ))}
          </div>

          {/* Product Cards */}
          <div className="flex gap-6 mt-10">
            {newArrivalProducts.map((product, index) => (
              <Card
                key={index}
                className="w-[560px] h-[770px] bg-[url(${product.image})] bg-[100%_100%] border-none rounded-none"
              >
                <CardContent className="p-0">
                  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[520px] h-[100px] bg-[#fefff4] rounded-[10px] flex items-center justify-between px-10">
                    <div>
                      <h3 className="font-normal text-xl text-[#2d3b36] [font-family:'Inter',Helvetica] tracking-[-1.00px]">
                        {product.title}
                      </h3>
                      <p className="font-normal text-base text-[#2d3b3680] [font-family:'Inter',Helvetica] tracking-[-0.80px] mt-2">
                        {product.price}
                      </p>
                    </div>
                    <div
                      className={`w-20 h-20 ${product.darkButton ? "bg-[#2d3b36]" : "bg-[#2d3b361a]"} rounded-[10px] flex items-center justify-center`}
                    >
                      <CartIcon className="w-[30px] h-[30px]" aria-label="Add to cart" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Customer Support and FAQ */}
        <div className="px-[100px] mt-20 flex gap-20">
          <div className="w-[850px] h-[900px] bg-[url(/mask-group-6.png)] bg-[100%_100%] relative">
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center">
              <div className="relative">
                <div className="w-20 h-20 bg-[#2d3b36] rounded-[200px] flex items-center justify-center">
                  <div className="w-[90px] h-[90px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[50px] border border-dashed border-[#2d3b36]"></div>
                  <HeadphoneIcon className="w-10 h-10" aria-label="Headphone support" />
                </div>
              </div>
              <div className="ml-4 bg-[#eff5e1] rounded-[200px] px-8 py-4">
                <p className="font-normal text-xl text-[#2d3b36] [font-family:'Inter',Helvetica]">
                  24/7 We're Here
                  <br />
                  to Help You
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Badge className="bg-[#fefff4] text-[#2d3b36] rounded-[100px] h-[60px] px-[58px] py-5 border border-solid border-[#2d3b36] text-xl font-normal">
              <div className="w-5 h-5 bg-[#2d3b36] rounded-[10px] mr-4"></div>
              Frequently Asked Question
            </Badge>

            <h2 className="mt-10 font-normal text-6xl text-[#2d3b36] [font-family:'Inter',Helvetica] tracking-[-1.20px]">
              Answers to Your
              <br />
              Skincare Questions, All
              <br />
              in One Place.
            </h2>

            <Accordion type="single" collapsible className="mt-10 w-[600px]">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-solid border-[#2d3b36] rounded-[5px] mb-4"
                >
                  <AccordionTrigger className="px-[29px] py-[25px] text-xl font-normal text-[#2d3b36] [font-family:'Inter',Helvetica]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-[29px] text-sm font-normal text-[#525349] [font-family:'Inter',Helvetica] tracking-[-0.70px]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d3b36] text-[#e7e8e0] py-[199px] px-[100px] relative overflow-hidden">
        <div className="flex justify-between">
          <div>
            <h2 className="font-normal text-6xl tracking-[-1.20px] [font-family:'Inter',Helvetica]">
              Join The Skincare
              <br />
              Community Now.
            </h2>

            <div className="flex gap-10 mt-[387px]">
              {footerSocialLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-normal text-xl text-[#eff5e1] [font-family:'Inter',Helvetica] tracking-[-1.00px]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="text-right">
            <h3 className="font-normal text-3xl tracking-[-0.60px] [font-family:'Inter',Helvetica]">
              Get in Touch
            </h3>
            <p className="font-normal text-6xl tracking-[-1.20px] [font-family:'Inter',Helvetica] mt-2">
              contact.skincare.com
            </p>

            <div className="flex justify-end gap-10 mt-[329px]">
              {footerPolicyLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-normal text-xl text-[#eff5e1] [font-family:'Inter',Helvetica] tracking-[-1.00px]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 font-bold text-[#3d4b4680] text-[420px] [font-family:'Inter',Helvetica] whitespace-nowrap">
          SKINCARE
        </div>
      </footer>
    </main>
  );
};
