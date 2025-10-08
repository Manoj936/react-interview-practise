import React from "react";

export default function Header({ name = "Book My Show" }) {
  return (
    <div className="w-full mb-3 h-40 bg-red-400 py-5 px-10  flex justify-center items-center">
      <div className=" text-white font-extrabold text-xl">{name}</div>
    </div>
  );
}
