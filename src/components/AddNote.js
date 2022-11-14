import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const [displayText, setDisplayText] = useState(true);
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		// figure out if note already exists
		if (noteText.trim().length > 0) {
			handleAddNote({noteText: noteText, displayText: displayText });
			setNoteText('');
			setDisplayText(true);
		}
	};


	return (
		<div className='note new'>
			<textarea rows='8' cols='10'
				placeholder='Type to add a note...' value={noteText} onChange={handleChange}/>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button
				onClick={() => setDisplayText( (prev) => !prev ) }
				
				className={`${displayText ? 'save' : 'save-dark'}`}
				>
				pop out
			</button>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
