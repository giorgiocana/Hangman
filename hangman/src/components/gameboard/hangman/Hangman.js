import './Hangman.css';

const Hangman = ({chances}) => {
	
	const land = <hr id="Land"></hr>;
	const stand = <hr className="Vertical" id="Stand"></hr>;
	const bar = <hr id="Bar"></hr>;
	const noose = <hr className="Vertical" id="Noose"></hr>;
	const head = <hr id="Head"></hr>;
	const body = <hr className="Vertical" id="Body"></hr>;
	const leftArm = <hr id="LeftArm"></hr>;
	const rightArm = <hr id="RightArm"></hr>;
	const leftLeg = <hr id="LeftLeg"></hr>;
	const rightLeg = <hr id="RightLeg"></hr>;

	const drawingOrder = [land, stand, bar, noose, head, body,
		leftArm, rightArm, leftLeg, rightLeg];

	const hangmanDrawing = drawingOrder.map((step, i) => {
		return i <= 10 - chances
			? <div key={i}>{step}</div>
			: <div key={i}></div>;
	});	

	return (
		<div className="Hangman">
			{hangmanDrawing}
		</div>
	);
};

export default Hangman;