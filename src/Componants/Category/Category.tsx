import { Link } from "react-router-dom";
import { TCategory } from "../../types/CategoryTypes";

interface TCategoryProps {
  category: TCategory;
}

export default function Category({ category }: TCategoryProps) {
  const { title, img, prefix } = category;

  return (
    <div className="flex flex-col items-center justify-center">
      <Link to={`/category/products/${prefix}`}>
        <img
          src={img}
          alt={title} // إضافة وصف للصورة
          className="rounded-full h-[180px] w-[180px] object-cover transition-transform duration-300 hover:scale-110   border-slate-500 shadow-2xl hover:shadow-xl"
        />
      </Link>
      <span className="block mt-2 text-lg font-bold">{title}</span>
      <span className="block mt-2 text-lg font-semibold text-primary">
        {prefix}
      </span>
    </div>
  );
}
