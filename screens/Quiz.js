import React from "react";

import QuizeSingleChoice from "react-native-react-native-quiz-single-choice";

const Quiz = () => {
  const data = [
    {
      question:
        "Pendant la préhistoire, quelle période a suivi l’age de la pierre taillée ?",
      optionA: "l’âge de la pierre polie",
      optionB: "l’âge du fer",
      optionC: "l’âge du bronze",
      optionD: "l’âge de la pierre ponce",
      answer: "l’âge de la pierre polie",
    },
    {
      question: "Une personne qui parle couramment le français est :",
      optionA: "Francilienne",
      optionB: "Francophone",
      optionC: "Tchatcheuse",
      optionD: "Francophile",
      answer: "Francophone",
    },
    {
      question: "Quel petit signe place-t-on parfois sous la lettre C ?",
      optionA: "Une virgule",
      optionB: "Une cédille",
      optionC: "Une apostrophe",
      optionD: "Un petit cygne",
      answer: "Une cédille",
    },
  ];
  return (
    <QuizeSingleChoice
      containerStyle={{ backgroundColor: "#61dafb", paddingTop: 30 }}
      questionTitleStyle={{ fontSize: 22, color: "#FFF" }}
      responseStyle={{
        borderRadius: 15,
      }}
      responseTextStyle={{ fontSize: 12, fontWeight: "normal" }}
      selectedResponseStyle={{
        borderRadius: 15,
        backgroundColor: "#fa5541",
      }}
      selectedResponseTextStyle={{
        fontSize: 14,
        fontWeight: "normal",
      }}
      responseRequired={true}
      nextButtonText={"Next"}
      nextButtonStyle={{ backgroundColor: "#06d755" }}
      nextButtonTextStyle={{ color: "#FFF" }}
      prevButtonText={"Prev"}
      prevButtonStyle={{ backgroundColor: "#fa5541" }}
      prevButtonTextStyle={{ color: "#FFF" }}
      endButtonText={"Done"}
      endButtonStyle={{ backgroundColor: "#000" }}
      endButtonTextStyle={{ color: "#FFF" }}
      buttonsContainerStyle={{ marginTop: "auto" }}
      onEnd={(results) => {
        console.log(results);
      }}
      data={data}
    />
  );
};

export default Quiz;