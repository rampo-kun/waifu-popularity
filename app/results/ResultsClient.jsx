"use client";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

const ResultsClient = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const score = searchParams.get("score") || "0";

  const handleRetry = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center container text-white">
      <div className="flex justify-center flex-col md:flex-row">
        <div className="text-center flex items-center justify-center p-10 flex-col gap-10 text-nowrap">
          <h1 className="text-8xl font-semibold font-Tiny5">Game Over :(</h1>
          <div className="flex items-center justify-center">

          <p className="text-2xl font-semibold font-Rajdhani">
            SCORE :{" "}
            <span className="text-green-500 font-Rajdhani text-4xl">
              {score}
            </span>
          </p>
          </div>
        </div>
        <Image
          src={"/waifu.png"}
          width={200}
          height={200}
          className="w-full h-80 hidden md:block"
        />
      </div>
      <button
        onClick={handleRetry}
        className="border-2 border-black rounded-xl w-36 h-16 hover:bg-green-400 hover:w-40 hover:h-20 hover:text-black text-xl transition-all duration-200"
      >
        Retry?
      </button>
    </div>
  );
};

export default ResultsClient;
