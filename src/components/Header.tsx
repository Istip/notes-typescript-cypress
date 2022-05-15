import { FC } from 'react';
import './header.css';

const Header: FC = () => {
  return (
    <div className="header">
      <h1>Add a Note</h1>

      <form>
        <div className="inputWrapper">
          <input
            id="note"
            name="note"
            type="text"
            placeholder="Enter your note..."
          />

          <input
            id="days"
            name="days"
            type="number"
            placeholder="Enter deadline..."
            min={1}
          />
        </div>
        <div className="buttonWrapper">
          <button>
            <b>Submit</b>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;
