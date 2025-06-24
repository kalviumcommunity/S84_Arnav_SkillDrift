import SkillTag from "./SkillTag";
import { Star, User } from "lucide-react";

export default function SkillCard({
  title,
  instructor,
  rating,
  students,
  level,
  duration,
  category,
  price,
}) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <SkillTag category={category} />
        <span className="text-green-600 font-semibold">{price}</span>
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{instructor}</p>

      <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
        <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
        {rating}
        <User className="w-4 h-4 ml-4" />
        {students}
      </div>

      <div className="text-sm text-gray-500 mt-2">
        <p>{level}</p>
        <p>{duration}</p>
      </div>

      <button className="mt-4 w-full bg-black text-white py-2 rounded hover:opacity-90 transition">
        ▶ Start Learning
      </button>
    </div>
  );
}
