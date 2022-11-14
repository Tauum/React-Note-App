import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			displayText: false,
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			displayText: true,
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			displayText: true,
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: '',
			displayText: false,
			date: '30/04/2021',
		},
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse( localStorage.getItem('react-notes-app-data') );
		if (savedNotes) { setNotes(savedNotes); }
	}, []);

	useEffect(() => {
		console.log(notes)
		localStorage.setItem( 'react-notes-app-data', JSON.stringify(notes) );
	}, [notes]);

	const addNote = (note) => {
		const date = new Date();
		console.log(note)
		const newNote = { id: nanoid(), text: note.noteText, 
			displayText: note.displayText, date: date.toLocaleDateString(), 
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
					// notes={notes}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
					setNotes={setNotes}
					allNotes={notes}
				/>


			</div>
		</div>
	);
};

export default App;
