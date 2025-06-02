"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Category = {
  id: string;
  name: string;
  image_url: string;
};

type CategoryListProps = {
  categories: Category[];
};

export function CategoryList({ categories }: CategoryListProps) {
const router = useRouter()
  return (
    <div className="flex flex-col gap-5 justify-center">
      <h2 className="text-lg font-semibold">Categories</h2>
      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        {categories.map((category) => (
          <div onClick={() =>router.push(`/product/list?category=${category.id}`) } key={category.id} className="flex items-center gap-2">
            <div className="relative w-16 h-16">
              <Image
                src={category.image_url}
                alt={category.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm hover:cursor-pointer">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
