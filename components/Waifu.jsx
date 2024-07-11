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
          className={`size-20 hover:text-green-500 duration-300 transform transition-all hover:rotate-[360deg] ${loading || revealed ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={(loading || revealed) ? undefined : onChoice}
        />
      )}
      <div className="flex flex-col items-center justify-center gap-4 mt-2">
        <Image
          src={imageUrl}
          width={500}
          height={500}
          className="border-black border-8 w-auto h-80 bg-black"
          alt=""
        />
        <div>
          <p className="font-Concert text-2xl">{name}</p>
        </div>
        {revealed ? (
          <CountUp end={favorites} duration={1} className="text-xl" />
        ) : (
          <p className="text-xl">?</p>
        )}
      </div>
      {isFirst && (
        <FaRegArrowAltCircleUp
          className={`size-20 hover:text-green-500 duration-300 transform transition-all hover:rotate-[360deg] ${loading || revealed ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={(loading || revealed) ? undefined : onChoice}
        />
      )}
    </div>
  );
};

export default Waifu;