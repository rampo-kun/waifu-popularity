import Image from "next/image";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import CountUp from "react-countup";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Waifu = ({
  imageUrl,
  name,
  anime,
  isFirst,
  favorites,
  onChoice,
  loading,
  revealed,
}) => {
  return (
    <div className="flex items-center gap-5 text-white">
      {!isFirst && (
        <FaRegArrowAltCircleUp
          className={`size-20 hover:text-green-500 duration-300 transform transition-all hover:rotate-[360deg] ${
            loading || revealed ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={loading || revealed ? undefined : onChoice}
        />
      )}
      <div className="flex flex-col items-center justify-center gap-4 mt-2">
      <Card>
  <CardHeader>
    <CardTitle>{name}</CardTitle>
  </CardHeader>
  <CardContent>
    
  <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Image
                src={imageUrl}
                width={500}
                height={500}
                className="border-black border-8 w-auto h-80 bg-black"
                alt=""
              />
            </TooltipTrigger>
            <TooltipContent side={`${isFirst?'left':'right'}`}>
              <p>{anime}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

  </CardContent>
  <CardFooter>
  {revealed ? (
          <CountUp end={favorites} duration={1} className="text-xl" />
        ) : (
          <p className="text-xl">?</p>
        )}
  </CardFooter>
</Card>

        

        
        
      </div>
      {isFirst && (
        <FaRegArrowAltCircleUp
          className={`size-20 hover:text-green-500 duration-300 transform transition-all hover:rotate-[360deg] ${
            loading || revealed ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={loading || revealed ? undefined : onChoice}
        />
      )}
    </div>
  );
};

export default Waifu;
