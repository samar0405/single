"use client";
import Image from "next/image";
import { useState } from "react";
import gantel from "../../images/gantel.svg"; 
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(gantel);

  return (
    <div className="container mx-auto p-4 bg-[#F2F2F2] pt-[244px] max-w-[1220px]">
      <div className="flex flex-wrap md:flex-nowrap gap-8">
        
        <div className="w-full md:w-2/3">
          <div className="relative">
            <Image src={selectedImage} alt="Product" layout="responsive" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
              <button className="bg-gray-200 p-2 rounded-full">
                <MdOutlineArrowBackIosNew />
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
              <button className="bg-gray-200 p-2 rounded-full">
                <MdOutlineArrowForwardIos />
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {[gantel, gantel, gantel, gantel].map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`border p-1 ${
                  selectedImage === img ? "border-yellow-400" : ""
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index}`}
                  width={80}
                  height={80}
                />
              </button>
            ))}
          </div>
        </div>

        
        <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-md">
          <h1 className="text-2xl font-bold">Гантель виниловая, 2 х 3 кг</h1>
          <p className="mt-2 text-gray-700">
            В составе томатов в большом количестве содержатся сахар, клетчатка,
            пектины, бета-каротин, витамины.
          </p>
          <div className="mt-4">
            <span className="block">В комплекте: 2 шт.</span>
            <span className="block">Страна производитель: Китай</span>
          </div>
          <div className="mt-4">
            <span className="block text-xl font-bold text-yellow-500">
              220 000 UZS
            </span>
            <span className="block">1 шт.</span>
          </div>
          <div className="mt-4 flex gap-4">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
              В Корзина
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
              Сравнить
            </button>
          </div>
        </div>
      </div>

      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold">Описание</h2>
          <p className="mt-2">
            Гантель виниловая, 2 х 3 кг
            <br />В составе томатов в большом количестве содержатся сахар,
            клетчатка, пектины, бета-каротин, витамины.
          </p>
          <div className="mt-4">
            <p>Вес гантеля: 5кг</p>
            <p>Цвета: Синий, Красный</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">Отзывы</h2>
          {[...Array(2)].map((_, index) => (
            <div key={index} className="mt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div>
                  <p className="font-bold">Шахзод Анаров</p>
                  <p>клиент</p>
                </div>
              </div>
              <p className="mt-2">
                В составе томатов в большом количестве содержатся сахар,
                клетчатка, пектины, бета-каротин, витамины.
              </p>
              <div className="flex mt-2">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      &#9733;
                    </span>
                  ))}
              </div>
            </div>
          ))}
          <button className="mt-4 text-yellow-500">Все отзывы &rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
