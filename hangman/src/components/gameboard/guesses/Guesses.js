import './Guesses.css';

const Guesses = ({wrongGuesses, guesses, chances}) => {
	const firstRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
	const secondRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
	const thirdRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

	const displayWrongGuesses = (row) => {
		return row.map((char, i) => {
			return wrongGuesses.includes(char)
					? <div className="Guess Invalid" key={i}>{char.toUpperCase()}</div>
					: guesses.includes(char)
							? <div className="Guess Valid" key={i}>{char.toUpperCase()}</div>
							: <div className="Guess" key={i}>{char.toUpperCase()}</div>;
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