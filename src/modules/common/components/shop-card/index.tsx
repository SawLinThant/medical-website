import Image from "next/image";
import Link from "next/link";

interface ShopCardProps {
  id: string;
  name: string;
  logo: string;
  description: string;
}

const ShopCard: React.FC<ShopCardProps> = ({ id, name, logo, description }) => {
  return (
    <Link href={`/shop/shop-profile/${id}`}>
      <div className="w-full p-4 rounded-lg transition-shadow duration-200 flex flex-col items-center justify-center gap-2">
        <div className="relative w-full min-h-[200px] border border-gray-200 rounded-lg bg-white">
          <Image
            src={logo}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <span className="text-gray-500 text-left mt-2 text-sm w-full">{description}</span>
        <h3 className="text-gray-700 text-left font-semibold text-lg w-full">{name}</h3>
      </div>
    </Link>
  );
};

export default ShopCard; 