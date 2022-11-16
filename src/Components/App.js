import React from "react";

import { motion } from "framer-motion";
import Start from "./Start";
import QuestionsList from "./QuestionsList";
import Header from "./Header";

function App() {
  const [gameStarted, setGameStarted] = React.useState(false);
  const [gameOptions, setGameOptions] = React.useState({
    number: "",
    category: "",
    difficulty: "",
  });

  function handleGameStart() {
    setGameStarted((prevGameStarted) => !prevGameStarted);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setGameOptions((prevGameOptions) => {
      return {
        ...prevGameOptions,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <Header />

      {gameStarted ? (
        <QuestionsList
          gameStarted={gameStarted}
          gameOptions={gameOptions}
          handleGameStart={handleGameStart}
        />
      ) : (
        <Start handleChange={handleChange} handleGameStart={handleGameStart} />
      )}
    </main>
  );
}

export default App;
