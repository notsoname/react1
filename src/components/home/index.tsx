import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

class Home extends React.Component {
  state = {
    inputField: '',
  };
  onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.setState({ inputField: '' });
    const { inputField } = this.state;
    localStorage.setItem('text', inputField);
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputField: e.target.value });
    console.log(this.state.inputField);
  };
  render() {
    return (
      <>
        <Form onSubmit={this.onSubmit} className="d-flex">
          <InputGroup>
            <FormControl
              onChange={this.handleChange}
              placeholder="Text"
              aria-label="Text"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {localStorage.getItem('text') && <div>Text: {localStorage.getItem('text')}</div>}
      </>
    );
  }
}

export default Home;
