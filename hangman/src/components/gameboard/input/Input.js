import './Input.css';
import { useState, useEffect } from 'react';

const Input = ({word, chances}) => {

  const [guesses, setGuesses] = useState([]);

	useEffect (() => {
		const handleKeyUp = (e) => {
			if (e.key.length === 1 && e.key.match(/[a-zA-Z]/)) {
				console.log("here 1");
				setGuesses(guesses.concat(e.key));
			}
		}

		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keyup", handleKeyUp);
		}

	});

  const userInput = word.split("").map((char, i) => {
    return char !== " "
      ? chances <= 0
        ? <td className="CharacterRevealed" key={i}>{word.charAt(i).toUpperCase()}</td>
        : guesses.includes(char) 
          ? <td className="Character" key={i}>{word.charAt(i).toUpperCase()}</td>
          : <td className="Character" key={i}></td>
      : <td className="Space" key={i}></td>
  });

	return (
		<table className="Input">
      <tbody>
        <tr>{userInput}</tr>
      </tbody>
    </table>
	);
};

export default Input;