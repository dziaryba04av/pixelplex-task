import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';

class TaskTwo extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      counterValue: 0
    };
  }

  startCounter(intervalValue) {
    this.stopCounter();
    if (intervalValue) {
      this.interval = setInterval(() => {
        this.setState({counterValue: this.state.counterValue + intervalValue});
      }, intervalValue);
    }
  }

  stopCounter() {
    clearInterval(this.interval);
  }

  handleChange(e) {
    this.props.onChangeRange(parseInt(e.target.value));
  }

  render() {
    this.startCounter((this.props.sliderValue === 0 || this.props.sliderValue !== undefined) ?
    this.props.sliderValue : this.props.sliderDefaultValue);
    return (
      <Grid className="task">
          <Row className="heading">
            Task 2
          </Row>
          <Row className="show-grid">
            <Col xs={12} sm={5} md={5} lg={5}>
              <div className="slidecontainer">
                <input type="range" 
                defaultValue={this.props.sliderDefaultValue} 
                value={this.props.sliderValue}
                min={0} 
                max={5000} 
                step={100} 
                onChange={this.handleChange.bind(this)} 
                className="slider" id="myRange" />
                <Row className="labels-container">
                  <Col xs={6} sm={6} md={6} lg={6}>0</Col>
                  <Col xs={6} sm={6} md={6} lg={6}>5000</Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} sm={7} md={7} lg={7}>
              <div className="counter-heading">Counter: {this.state.counterValue}</div>
            </Col>
          </Row>
        </Grid>
    )
  }
}
 
export default connect(
  state => ({
    sliderDefaultValue: state.counter.defaultValue,
    sliderValue: state.counter.value
  }),
  dispatch => ({
    onChangeRange: (value) => {
      localStorage.setItem('sliderDefaultValue', value);
      dispatch({type: 'SET_VALUE', value});
    }
  })
)(TaskTwo);