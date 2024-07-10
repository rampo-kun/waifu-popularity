import Image from "next/image";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import CountUp from "react-countup";

const Waifu = ({
  imageUrl,
  name,
  isFirst,
  favorites,
  onChoice,
  loading,
  revealed
}) => {
  return (
    <div className="flex items-center gap-5">
      {!isFirst && (
        <FaRegArrowAltCircleUp
          className={`size-20 hover:text-green-500 transition-colors duration-300 ${loading || revealed ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={(loading || revealed) ? undefined : onChoice}
        />
      )}
      <div className="flex flex-col items-center justify-center gap-4 mt-2">
        <Image
          src={imageUrl}
          width={300}
          height={300}
          className="border-white border-2"
          alt=""
        />
        <div>
          <p>{name}</p>
        </div>
        {revealed ? (
          <CountUp end={favorites} duration={1} className="text-xl" />
        ) : (
          <p className="text-xl">?</p>
        )}
      </div>
      {isFirst && (
        <FaRegArrowAltCircleUp
          className={`size-20 hover:text-green-500 transition-colors duration-300 ${loading || revealed ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={(loading || revealed) ? undefined : onChoice}
        />
      )}
    </div>
  );
};

export default Waifu;