import React from "react";

import QuizeSingleChoice from "react-native-react-native-quiz-single-choice";

const Quiz = () => {
  const data = [
    {
      question:
        "When did India gain independence?",
      optionA: "1947",
      optionB: "1957",
      optionC: "1967",
      optionD: "1977",
      answer: "1947",
    },
    {
      question: "Who is called the 'Iron Man of India'?",
      optionA: "Mahatma Gandhi",
      optionB: "SubhashChandra Bose",
      optionC: "Sardar Vallabhai Patel",
      optionD: "Jawaharlal Nehru",
      answer: "Sardar Vallabhai Patel",
    },
    {
      question: "In which year did Paul Allen and Bill Gates launch Microsoft?",
      optionA: "1975",
      optionB: "1980",
      optionC: "1985",
      optionD: "1990",
      answer: "1975",
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