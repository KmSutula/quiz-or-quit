async function getQuestions(gameOptions) {
  const apiUrl = `https://opentdb.com/api.php?amount=${
    gameOptions.number || ""
  }&category=${gameOptions.category || ""}&difficulty=${
    gameOptions.difficulty || ""
  }`;
  const questionData = await fetch(apiUrl);
  return questionData;
}
export default getQuestions;
