import './nothing.css';

export default function Nothing({message}) {
	return(
		<div className="nothing center">
			<h2 className="nothing__text">{message}</h2>
		</div>
	);
}