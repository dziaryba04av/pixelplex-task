import React, { Component } from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <Grid>
          <Row className="show-grid header">
            <Col className="logo" xs={12} sm={6} md={4} lg={4}>
              <Image src="../src/images/logo_w.png" className="logo-img"/>
            </Col>
            <Col xs={12} sm={6} md={8} lg={8}>
              <Row className="show-grid">
                <Col className="link-container" xs={6} sm={6} md={6} lg={6}>
                  <a href="javascript:window.location.reload()">Home link</a>
                </Col>
                <Col className="link-container" xs={6} sm={6} md={6} lg={6}>
                  <a href="https://pixelplex.io" target="_blank">Pixelplex link</a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
    )
  }
}