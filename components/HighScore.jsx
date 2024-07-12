


const HighScore = ({highScore}) => {
  return (
    <div className="flex flex-col text-4xl text-white hover:text-6xl transition-all duration-300 items-center justify-center gap-2 font-Tiny5">
        <h1 className="">High Score</h1>
        <p>{highScore}</p>
    </div>
  )
}

export default HighScore