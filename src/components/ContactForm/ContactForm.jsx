import { Component } from 'react';
import './contactForm.css';
import PropTypes from 'prop-types';

class ComtactForm extends Component {
  state = {
    number: '',
    name: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  formReset = () => {
    this.setState({ number: '', name: '' });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.formReset();
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { number, name } = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </label>

          <label>
            Number
            <input
              type="text"
              name="number"
              value={number}
              onChange={this.handleInputChange}
            />
          </label>

          <button className="addBtn">Add Contact</button>
        </form>
      </div>
    );
  }
}

export default ComtactForm;
