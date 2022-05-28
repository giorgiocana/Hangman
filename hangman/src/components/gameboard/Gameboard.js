import './Gameboard.css';
import { useState, useEffect } from 'react';
import Hangman from './hangman/Hangman.js';
import Input from './input/Input.js';
import Guesses from './guesses/Guesses.js';

const Gameboard = () => {
	const word = "Random Word".toLowerCase();
	const [wordLeft, setWordLeft] = useState(word.replaceAll(" ", ""));
	const [chances, setChances] = useState(10);
	const [guesses, setGuesses] = useState([]);
	
	useEffect(() => {
		const handleKeyUp = (e) => {
			if (e.key.length === 1 && e.key.match(/[a-zA-Z]/) && !guesses.includes(e.key)) {	
					setGuesses(guesses.concat(e.key));
				if (!word.includes(e.key)) {
					setChances(chances - 1);
				} else {
					setWordLeft(wordLeft.replaceAll(e.key, ""));
					console.log("word left: " + wordLeft);
					console.log("correct guess!");	
				}
			}
		};

		if (chances > 0 && wordLeft.length > 0) {
			window.addEventListener("keyup", handleKeyUp);
		}

		return () => {
			window.removeEventListener("keyup", handleKeyUp);
		}
	});
	
	return (
		<div className="Gameboard">
			<Hangman chances={chances}/>
			<Input word={word} chances={chances} guesses={guesses}/>
			<Guesses />
		</div>
	);
};

export default Gameboard;