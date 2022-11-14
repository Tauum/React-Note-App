import { MdDeleteForever, MdModeEdit, MdCheck, MdClose } from 'react-icons/md';
import { useState } from 'react';
import AddNote from './AddNote';

const Note = ({ id, text, date, displayText, handleDeleteNote, allNotes, setNotes }) => {

	const [currentlySelected, setCurrentlySelected] = useState(false);

	const handleEditNote = (noteId) => {
		setCurrentlySelected(noteId)
	};


	const handleVisible = (id) => {
		// setCurrentlySelected(allNotes.filter((note) => note.id === id));
		var selectedElement = allNotes.filter((note) => note.id === id);
		console.log(selectedElement)
		const newNotes = allNotes.filter(
			(note) => note.id === id ? 
				note.displayText = !note.displayText : note.displayText
		)
		
	}
	// const addNote = (text) => {
	// 	const date = new Date();
	// 	const newNote = { id: nanoid(), text: text, date: date.toLocaleDateString(), };
	// 	const newNotes = [...notes, newNote];
	// 	setNotes(newNotes);
	// };

	// const deleteNote = (id) => {
	// 	const newNotes = notes.filter((note) => note.id !== id);
	// 	setNotes(newNotes);
	// };

	return (
		<div>
			{currentlySelected !== id ? 
			<div className='note'>
				<span>{text}</span>
				<div className='note-footer'>
					<small className='date'>{date}</small>
					<small className='pop-out'>pop-out:</small>
					{displayText === true ? 
						<MdCheck className='shown-icon' onClick={() => handleVisible(id)} size='1.3em' />	
						:
						<MdClose className='shown-icon' onClick={() => handleVisible(id)} size='1.3em' />
					}
					
					<MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size='1.3em' />
					<MdModeEdit onClick={() => handleEditNote(id)} className='edit-icon' size='1.3em' />
					

				</div>
			</div>

			: 
			<AddNote/>
			}
		</div>
	);
};

export default Note;
