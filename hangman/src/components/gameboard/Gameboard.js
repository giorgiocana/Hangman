import './Gameboard.css';
import { useState, useEffect } from 'react';
import Hangman from './hangman/Hangman.js';
import Input from './input/Input.js';
import Guesses from './guesses/Guesses.js';

const words = ['tiktok', 'javascript', 'stylesheet', 'singapore', 'summer'];
	let selectedWord = words[Math.floor(Math.random() * words.length)];

const Gameboard = () => {
	const word = selectedWord.toLowerCase();
	const [wordLeft, setWordLeft] = useState(word.replaceAll(" ", ""));
	const [chances, setChances] = useState(10);
	const [guesses, setGuesses] = useState([]);
	const [wrongGuesses, setWrongGuesses] = useState([]);
	
	useEffect(() => {
		const handleKeyUp = (e) => {
			if (e.key.length === 1 && e.key.match(/[a-zA-Z]/) && !guesses.includes(e.key)) {	
					setGuesses(guesses.concat(e.key));
				if (!word.includes(e.key)) {
					setWrongGuesses(wrongGuesses.concat(e.key).sort());
					setChances(chances - 1);
				} else {
					setWordLeft(wordLeft.replaceAll(e.key, ""));
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
			<div className="HangmanInput">
				<Hangman chances={chances}/>
				<Input word={word} chances={chances} guesses={guesses}/>
			</div>
			<Guesses wrongGuesses={wrongGuesses} guesses={guesses} chances={chances}/>
		</div>
	);
};

export default Gameboard;