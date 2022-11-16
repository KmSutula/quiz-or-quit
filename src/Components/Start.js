export default function Start(props) {
  return (
    <div className="container">
      <div className="selection-option">
        <label className="selection-label" htmlFor="number">
          Number of Questions:
        </label>
        <select name="number" id="number" onChange={props.handleChange}>
          <option value="">Select</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <div className="selection-option">
        <label className="selection-label" htmlFor="category">
          Category:
        </label>
        <select name="category" id="category" onChange={props.handleChange}>
          <option value="9">General Knowledge</option>
          <option value="27">Animals</option>
          <option value="25">Art</option>
          <option value="10">Books</option>
          <option value="26">Celebrities</option>
          <option value="11">Film</option>
          <option value="23">History</option>
          <option value="12">Music</option>
          <option value="20">Mythology</option>
          <option value="17">Science & Nature</option>
          <option value="21">Sports</option>
          <option value="15">Video Games</option>
        </select>
      </div>
      <div className="selection-option">
        <label className="selection-label" htmlFor="difficulty">
          Difficulty:
        </label>
        <select name="difficulty" id="difficulty" onChange={props.handleChange}>
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button className="submit" onClick={props.handleGameStart}>
        Start Game
      </button>
    </div>
  );
}
