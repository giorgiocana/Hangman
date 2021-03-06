import './Input.css';

const Input = ({word, chances, guesses}) => {

  const userInput = word.split("").map((char, i) => {
    return char === " "
      ? <td className="Space" key={i}></td>
      : guesses.includes(char)
        ? <td className="Character Guessed" key={i}>{word.charAt(i).toUpperCase()}</td>
        : chances <= 0
          ? <td className="Character Answer" key={i}>{word.charAt(i).toUpperCase()}</td>
          : <td className="Character Hidden" key={i}>*</td>
  });

	return (
    <div className="Input">
      <table className="Input">
        <tbody>
          <tr>{userInput}</tr>
        </tbody>
      </table>
    </div>
	);
};

export default Input;