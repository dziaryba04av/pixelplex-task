import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import Form from '../Form';

class TaskOne extends Component {
  deleteMessage(e) { 
    e.target.classList.forEach(item =>{
      if (item === 'message-delete-button') {
        this.props.onDeleteMessage(e.target.parentNode.parentNode.dataset.key);
      }
    });
  }

  render() {
    return (
      <Grid className="task">
          <Row className="heading">
             Task 1 
          </Row>
          <Row className="show-grid">
            <Col xs={12} sm={12} md={12} lg={5}>
              <Form />
            </Col>
            <Col xs={12} sm={12} md={12} lg={7}>
              <div className="list-heading">List: </div>
              <ul class="list" onClick={this.deleteMessage.bind(this)}>
                {this.props.messageItems.map((item, index) =>
                    <li data-key={index}>
                      <div className="message-container">
                        {item.messageText}
                        <Button className="message-delete-button">delete text</Button>
                      </div>
                    </li>
                )}
              </ul>
            </Col>
          </Row>
        </Grid>
    )
  }
}

export default connect(
  state => ({
    messageItems: state.messages
  }),
  dispatch => ({
    onDeleteMessage: (key) => {
      dispatch({type: 'DELETE_MESSAGE', index: key});
    }
  })
)(TaskOne);
