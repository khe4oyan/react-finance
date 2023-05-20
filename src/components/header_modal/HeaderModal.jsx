import { useState } from 'react';
import './headerModal.css'

export default function HeaderModal({balance, setBalance, modalClose}) {
	const [inputValue, setInputValue] = useState('');

	function add() {
		setBalance((prev) => {
			return prev += +inputValue;
		});
		modalClose();
	}

	function rem() {
		setBalance((prev) => {
			return prev -= +inputValue;
		});
		modalClose();
	}

	function set() {
		if (inputValue == '') {
			return;
		}
		setBalance(+inputValue);
		modalClose();
	}

	return (
		<div className='modal center'>
			<div className='modal__box'>
				<h2 className='modal__box__header'>Balance Change</h2>
				<input onChange={(e) => {setInputValue(e.target.value)}} type='number' placeholder='money' />
				<div className='modal__box__buttons'>
					<button onClick={rem} className='modal__buttons__button'>rem</button>
					<button onClick={add} className='modal__buttons__button'>add</button>
					<button onClick={set} className='modal__buttons__button'>set</button>
				</div>
				<button onClick={() => {modalClose()}} className='modal-close-btn'>x</button>
			</div>
		</div>
	);
}