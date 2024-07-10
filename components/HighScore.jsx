

const HighScore = ({highScore}) => {
  return (
    <div className="flex flex-col text-2xl items-center justify-center gap-2">
        <h1 className="">High Score</h1>
        <p>{highScore}</p>
    </div>
  )
}

export default HighScore