import { FaStar, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number; // ✅ Explicitly define rating as a number
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        index < rating ? (
          <FaStar key={index} className="text-yellow-500 text-xl" />
        ) : (
          <FaRegStar key={index} className="text-gray-400 text-xl" />
        )
      ))}
    </div>
  );
};

export default StarRating;
