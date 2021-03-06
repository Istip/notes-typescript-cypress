import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { INote } from './App.interfaces';
import Note from './components/Note';

const App: FC = () => {
  const [note, setNote] = useState<string>('');
  const [days, setDays] = useState<number>(0);

  // The list of all of the notes
  const [notes, setNotes] = useState<INote[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'note') {
      setNote(e.target.value);
    }

    if (e.target.name === 'days') {
      setDays(Number(e.target.value));
    }
  };

  const addNote = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newNote = { id: Date.now(), note, days };
    setNotes([...notes, newNote]);

    // resetting the input fields
    setNote('');
    setDays(0);
  };

  const completeNote = (id: number): void => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <>
      <div className="header">
        <h1>Add a Note</h1>

        <form onSubmit={addNote}>
          <div className="inputWrapper">
            <input
              id="note"
              name="note"
              value={note}
              type="text"
              placeholder="Enter your note..."
              onChange={onChange}
              required
            />

            <input
              id="days"
              name="days"
              value={days}
              type="number"
              placeholder="Enter deadline..."
              onChange={onChange}
              min={0}
              required
            />
          </div>
          <div className="buttonWrapper">
            <button>
              <b>Submit</b>
            </button>
          </div>
        </form>
      </div>

      <div className="center">
        <h1>Notes:</h1>
      </div>

      {notes.length ? (
        <div className="notesWrapper">
          {notes.map((note: INote) => (
            <Note key={note.id} note={note} completeNote={completeNote} />
          ))}
        </div>
      ) : (
        <div className="center">
          <h3>No notes on your list...</h3>
        </div>
      )}
    </>
  );
};

export default App;
