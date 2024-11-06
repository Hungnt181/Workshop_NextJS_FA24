import Link from "next/link";
import React from "react";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Header = () => {
  return (
    <header className="mb-4">
      <div className="max-w-6xl mx-auto mt-2">
        <div className="grid grid-cols-3 gap-8 items-center ">
          <div className="">
            <img src="/logo.svg" alt="NHShop" />
          </div>
          <nav>
            <ul className="flex justify-center space-x-5 text-xl font-medium">
              <li>
                <Link href="/" className=" hover:text-yellow-600">
                  Home
                </Link>{" "}
              </li>
              <li>
                <Link href="/products" className=" hover:text-yellow-600">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className=" hover:text-yellow-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className=" hover:text-yellow-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex  space-x-4 justify-end">
            <Link href="/auth/login">
              <AiOutlineUser className="w-[22px] h-[22px]" />
            </Link>
            <Link href="/search">
              <AiOutlineSearch className="w-[22px] h-[22px]" />
            </Link>
            <Link href="/wishlist">
              <AiOutlineHeart className="w-[22px] h-[22px]" />
            </Link>
            <Link href="/wishlist">
              <AiOutlineShoppingCart className="w-[22px] h-[22px]" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
