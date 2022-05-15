import { INote } from '../App.interfaces';

interface Props {
  note: INote;
  key: number;
}

const Note = ({ note }: Props) => {
  return <>{note.note}</>;
};

export default Note;
