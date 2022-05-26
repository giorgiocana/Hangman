import './Gameboard.css';
import { useState, useEffect } from 'react';
import Hangman from './hangman/Hangman.js';
import Input from './input/Input.js';
import Guesses from './guesses/Guesses.js';

const Gameboard = () => {
	const word = "Cedric Diggory".toLowerCase();
	const [chances, setChances] = useState(10);
	
	useEffect(() => {
		const handleKeyUp = (e) => {
			if (e.key.length === 1 && e.key.match(/[a-zA-Z]/)) {
				if (!word.includes(e.key)) {
					setChances(chances - 1);
					console.log("wrong guess. chances left " + chances);
				} else {
					console.log("correct guess!");	
				}
			}
		};

		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keyup", handleKeyUp);
		}
	});
	return (
		<div className="Gameboard">
			<Hangman word={word}/>
			<Input word={word} chances={chances}/>
			<Guesses />
		</div>
	);
};

export default Gameboard;