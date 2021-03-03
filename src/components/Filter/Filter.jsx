import './filter.css';

const Filter = ({ value, onChange }) => (
  <label className="filterLabel">
    Find contacts by name
    <input type="text" name="filter" value={value} onChange={onChange}></input>
  </label>
);

export default Filter;
