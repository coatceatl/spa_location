import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

class Footer extends Component {
  render () {
    return (
      <footer className='navbar-fixed-bottom'>
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              &copy; 2018
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
