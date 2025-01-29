import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
};

const Card = ({ title, description, icon, image }: CardProps) => {
  return (
    <div
      className={`overflow-hidden border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all ${icon && "flex items-center gap-4 p-4"}`}
    >
      {icon && <div className="text-xl text-purple-800">{icon}</div>}
      {image && (
        <div className="flex justify-center">
          <Image
          src={image}
          alt={`${title} image`}
          width={200}
          height={200}
          priority
          className="object-contain"
        />
        </div>
      )}
      <div className={`${image && "bg-gray-200 text-center py-2"}`}>
        <h4 className="text-lg text-gray-600 font-bold">{title}</h4>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Card;
