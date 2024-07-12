"use client";
import HighScore from "@/components/HighScore";
import Waifu from "@/components/Waifu";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  const APItoken = process.env.NEXT_PUBLIC_WAIFU_API_TOKEN;
  const url = "https://waifu.it/api/v4/waifu";
  const [loading, setLoading] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [firstImage, setFirstImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstAnime, setFirstAnime] = useState("");
  const [firstFavorites, setFirstFavorites] = useState(0);
  const [secondImage, setSecondImage] = useState("");
  const [secondName, setSecondName] = useState("");
  const [secondAnime, setSecondAnime] = useState("");
  const [secondFavorites, setSecondFavorites] = useState(0);

  const incrementScore = () => {
    setHighScore((prevScore) => prevScore + 1);
  };

  const getWaifu = async (setImage, setName, setFavorites, setAnime) => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: APItoken,
        },
      });
      setImage(data.image.large);
      setName(data.name.full);
      setFavorites(data.favourites);
      setAnime(data.media.nodes[1].title.english);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleGameOver = () => {
    router.push(`/results?score=${highScore}`);
  };

  const handleChoice = async (isFirstWaifu) => {
    setLoading(true);

    const isCorrect = isFirstWaifu
      ? firstFavorites >= secondFavorites
      : secondFavorites >= firstFavorites;
    if (isCorrect) {
      incrementScore();
    } else {
      // Game over condition (you can adjust this as needed)
      handleGameOver();
      return;
    }

    setRevealed(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    await Promise.all([
      getWaifu(setFirstImage, setFirstName, setFirstFavorites, setFirstAnime),
      getWaifu(setSecondImage, setSecondName, setSecondFavorites, setSecondAnime)
    ]);

    setLoading(false);
    setRevealed(false);
  };

  useEffect(() => {
    setHighScore(0);
    const initializeWaifus = async () => {
      setLoading(true);
      await Promise.all([
        getWaifu(setFirstImage, setFirstName, setFirstFavorites, setFirstAnime),
        getWaifu(setSecondImage, setSecondName, setSecondFavorites, setSecondAnime)
      ]);
      setLoading(false);
    };
    initializeWaifus();
  }, []);

  return (
    <div className="flex items-center gap-4 flex-col bg-black">
      <div className="flex gap-8 h-full">
        {firstImage && (
          <Waifu
            imageUrl={firstImage}
            name={firstName}
            anime={firstAnime}
            isFirst={true}
            favorites={firstFavorites}
            onChoice={() => handleChoice(true)}
            loading={loading}
            revealed={revealed}
          />
        )}

        {secondImage && (
          <Waifu
            imageUrl={secondImage}
            name={secondName}
            anime={secondAnime}
            isFirst={false}
            favorites={secondFavorites}
            onChoice={() => handleChoice(false)}
            loading={loading}
            revealed={revealed}
          />
        )}
      </div>
                  <HighScore highScore={highScore} />
    </div>
  );
};

export default Home;
