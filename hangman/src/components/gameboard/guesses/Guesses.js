import './Guesses.css';
import { useEffect, useRef } from 'react';

const Guesses = ({wrongGuesses, guesses, chances}) => {
	const firstRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
	const secondRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
	const thirdRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

	const displayWrongGuesses = (row) => {
		return row.map((char, i) => {
			return wrongGuesses.includes(char)
					? <button className="Guess Invalid" key={i} disabled>{char.toUpperCase()}</button>
					: guesses.includes(char)
							? <button className="Guess Valid" key={i} disabled>{char.toUpperCase()}</button>
							: <button className="Guess" key={i} 
									onClick={() => {
										window.dispatchEvent(new KeyboardEvent('keyup', {
											key: char,
										}))}}>{char.toUpperCase()}</button>;
		})};

	const opacity = chances > 0 ? "Guesses" : "Guesses Inactive";

	return (
    <div className={opacity}>
			<div className="GuessRow">{displayWrongGuesses(firstRow)}</div>
			<div className="GuessRow">{displayWrongGuesses(secondRow)}</div>
			<div className="GuessRow">{displayWrongGuesses(thirdRow)}</div>
    </div>
	);
};

export default Guesses;