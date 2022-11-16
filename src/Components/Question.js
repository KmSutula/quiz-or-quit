import React from "react";
import { nanoid } from "nanoid";

import check from "../assets/right.svg";
import ex from "../assets/wrong.svg";
import { decode } from "html-entities";
import { motion } from "framer-motion";

export default function Question(props) {
  //determines how the answers look
  const styleAnswers = (answer) => {
    if (props.isGameOver === true) {
      if (answer === props.selectedAnswer) {
        if (props.selectedAnswer === props.correctAnswer) {
          return {
            backgroundColor: "#0a5706",
            border: "1px solid #f5f5f5",
            color: "#c1eeff",
          };
        } else return { backgroundColor: "#d1200f", color: "#c1eeff" };
      }
      if (answer === props.correctAnswer) {
        return { backgroundColor: "#0a5706", color: "#c1eeff" };
      } else {
        return { backgroundColor: "#c1eeff" };
      }
    } else {
      return props.selectedAnswer === answer
        ? {
            backgroundColor: "#735488",
            color: "#c1eeff",
          }
        : { backgroundColor: "#c1eeff" };
    }
  };
  //creates an element for each answer option
  const answerOptions = props.allAnswers.map((answer) => {
    return (
      <button
        key={nanoid()}
        id={nanoid()}
        className="answer-option"
        onClick={() => props.handleSelectedAnswer(props.id, answer)}
        style={styleAnswers(answer)}
      >
        {decode(answer)}
      </button>
    );
  });

  return (
    <div className="q-container">
      <div className="question">
        <h4 className="question-num">Question #{props.index + 1}</h4>{" "}
        {props.showAnswer &&
          (props.selectedAnswer === props.correctAnswer ? (
            // <div className="response">
            //   <span class="response-text">Correct</span>
            <img className="response-pic" src={check} alt="Correct answer!" />
          ) : (
            // </div>
            // <div className="response">
            //   <span class="response-text">Incorrect</span>
            <img className="response-pic" src={ex} alt="Wrong answer." />
            // </div>
          ))}
        <h4 className="question-text">{decode(props.question)}</h4>
      </div>

      <div className="answers-container">{answerOptions}</div>
    </div>
  );
}
