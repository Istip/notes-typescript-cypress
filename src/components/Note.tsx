import { INote } from '../App.interfaces';
import './Note.css';

interface Props {
  note: INote;
}

const Note = ({ note }: Props) => {
  const daysToFinish = (): string | undefined => {
    if (note.days === 0) {
      return 'Today has to be finished!';
    }

    if (note.days === 1) {
      return `${note.days} day left to finish!`;
    }

    if (note.days > 1) {
      return `${note.days} days left to finish!`;
    }
  };

  return (
    <div className="card">
      <div className="cardContent">
        <h3>{note.note}</h3>
        <p>{daysToFinish()}</p>
      </div>

      <div>
        <button className="hello">
          <b>❌</b>
        </button>
      </div>
    </div>
  );
};

export default Note;
