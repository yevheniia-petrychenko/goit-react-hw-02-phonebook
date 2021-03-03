const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" name="filter" value={value} onChange={onChange}></input>
  </label>
);

export default Filter;
