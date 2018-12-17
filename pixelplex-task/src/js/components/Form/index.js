import React, { Component } from 'react';
import {Row, Col, FormGroup, FormControl, Button} from 'react-bootstrap';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 250) return 'error';
    else if (length > 5) return 'success';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleClick(e) {
    if (e.target === document.querySelector('.submit')) {
      this.addMessage();
    }
  }

  handleKeyDown(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      this.addMessage();
    }
  }

  addMessage() {
    if (this.getValidationState() === 'success') {
      this.props.onAddMessage(this.state.value);
      this.state.value = '';
    }
  }

  render() {
    return (
      <form className="task-one-form" onClick={this.handleClick.bind(this)}
      onKeyDown={this.handleKeyDown.bind(this)}>
          <Row>
            <Col xs={8} sm={10} md={10} lg={12}>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                />
              <FormControl.Feedback />              
              </FormGroup>
            </Col>
            <Col xs={4} sm={2} md={2} lg={3} lgPush={9}>
              <Button className="submit">Add text</Button>
            </Col>
          </Row>
      </form>
    );
  }
}

export default connect(
  state => ({
    messages: state.messages
  }),
  dispatch => ({
    onAddMessage: (message) => {
      const messageItem = {
        id: Date.now().toString(),
        messageText: message
      }
      dispatch({type: 'LOAD_MESSAGE', messageItem});
    }
  })
)(Form);
