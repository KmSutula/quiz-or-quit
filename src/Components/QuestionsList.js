import React from "react";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";
import Question from "./Question";
import Loading from "./Loading";

export default function QuestionsList(props) {
  const [questionsArray, setQuestionsArray] = React.useState([]);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = React.useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = React.useState(0);

  const [isGameOver, setIsGameOver] = React.useState(false);

  //fetches question data
  async function getQuestions(gameOptions) {
    const apiUrl = `https://opentdb.com/api.php?amount=${
      gameOptions.number || "5"
    }&category=${gameOptions.category || ""}&difficulty=${
      gameOptions.difficulty || ""
    }`;
    const questionData = await fetch(apiUrl);
    return questionData.json();
  }

  //retrieves API data, separates questions into objects
  React.useEffect(() => {
    getQuestions(props.gameOptions).then((questionData) => {
      return setQuestionsArray(
        questionData.results.map((question) => {
          let allAnswersArr = [...question.incorrect_answers];

          const randomNum = Math.floor(Math.random() * 4);
          allAnswersArr.splice(randomNum, 0, question.correct_answer);

          if (question.type === "boolean") {
            if (question.correct_answer === "True") {
              allAnswersArr = [
                question.correct_answer,
                question.incorrect_answers,
              ];
            } else {
              allAnswersArr = [
                question.incorrect_answers,
                question.correct_answer,
              ];
            }
          }
          return {
            ...question,
            selectedAnswer: "",
            showAnswer: false,
            allAnswers: allAnswersArr,
            id: nanoid(),
          };
        })
      );
    });
  }, [props.gameOptions]);

  //sets the selected prop to the user selected answer
  function handleSelectedAnswer(questionId, answer) {
    if (!isGameOver) {
      setQuestionsArray((prevQuestionsArray) =>
        prevQuestionsArray.map((question) =>
          question.id === questionId
            ? { ...question, selectedAnswer: answer }
            : { ...question }
        )
      );
    }
  }
  //sets the score
  React.useEffect(() => {
    if (allQuestionsAnswered) {
      let correctAnswers = 0;
      questionsArray.forEach((question) => {
        if (question.correct_answer === question.selectedAnswer)
          correctAnswers++;
      });
      setCorrectAnswersCount(correctAnswers);
    }
  }, [questionsArray, allQuestionsAnswered]);

  function checkAnswers() {
    if (questionsArray.every((question) => question.selectedAnswer !== "")) {
      setAllQuestionsAnswered(!allQuestionsAnswered);
      setIsGameOver(!isGameOver);
      setQuestionsArray((prevQuestionsArray) =>
        prevQuestionsArray.map((question) => ({
          ...question,
          showAnswer: true,
        }))
      );
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      alert("Answer all questions first!");
    }
  }
  //map through questionsarray and create a question element for each
  const questionElements = questionsArray.map((question, index) => {
    return (
      <Question
        index={index}
        key={question.id}
        id={question.id}
        category={question.category}
        difficulty={question.difficulty}
        question={question.question}
        correctAnswer={question.correct_answer}
        allAnswers={question.allAnswers}
        selectedAnswer={question.selectedAnswer}
        showAnswer={question.showAnswer}
        type={question.type}
        handleSelectedAnswer={handleSelectedAnswer}
        isGameOver={isGameOver}
      />
    );
  });
  //two options for buttons/functions depending on state of the game
  const startGameBtn = (
    <button className="submit" onClick={() => props.handleGameStart()}>
      New Game
    </button>
  );

  const checkAnswersBtn = (
    <button className="submit" onClick={() => checkAnswers()}>
      Check Answers
    </button>
  );

  return (
    <>
      {props.gameStarted && !questionsArray.length ? (
        <Loading />
      ) : (
        <div className="container">
          {isGameOver ? (
            <p id="score">
              Score:{correctAnswersCount}/{questionsArray.length}
            </p>
          ) : (
            ""
          )}
          {questionElements}
          {isGameOver ? startGameBtn : checkAnswersBtn}
        </div>
      )}
    </>
  );
}
