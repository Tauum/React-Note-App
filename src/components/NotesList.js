import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
	setNotes,
	allNotes
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					displayText = {note.displayText}
					handleDeleteNote={handleDeleteNote}
					setNotes={setNotes}
					allNotes={allNotes}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;
