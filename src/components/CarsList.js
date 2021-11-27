import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
//import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSms,faHeart,faPhoneAlt } from '@fortawesome/free-solid-svg-icons'


import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { height, width } from 'dom-helpers';
export default class CarsList extends Component {
  
state={
  x:1
}

increaseMe = ()=>{
  //var newx=this.x++;
  this.setState({
    x:this.state.x++
  })
  //this.state.x++;
}

    render() {
        let carImageStlye={
            width:"100%",
            height:"100%"
        }
        return (
            <>
            x={this.state.x}<br></br>
            <br></br>
            <button onClick={this.increaseMe}>click</button>
            <br></br>
            {this.props.cars.map((car) => {
              return (
                car.make
              );
            })}
  <Container>
  <Row className="mt-3">
    <Col>
    <Card>
  <Card.Body>
    <Card.Title>
        <a href="/">
        Suzuki Every Wagon  2016 JP Turbo Limited for ...
        </a>
        <a href="/">
        <div class="float-end">PKR 20.8 lacs</div>
        </a>
    </Card.Title>
    <Card.Text>
   <Row className="mt-1">
    <Col xs="2"><Card.Img variant="top" style={carImageStlye} src="https://cache2.pakwheels.com/ad_pictures/5512/daihatsu-move-l-6-2018-55129401.jpg" /></Col>
    <Col><p>Karachi</p>
      <p>
      2018 | 75,500 km | Petrol | 660 cc | Automatic | <img alt="Auction Sheet" class="d" src="https://wsa4.pakwheels.com/assets/auction-sheet-logo-ebf19d855fc7b2ff5ec2a081cc5b370c.svg" height="26"/>

      </p>
      <div className="text-muted">Updated 36 minutes ago</div>
      <div className="float-end">
      <Button variant="outline-danger"> <FontAwesomeIcon icon={faHeart} /></Button>&nbsp;
          <Button variant="info"> <FontAwesomeIcon icon={faSms} />Send Message</Button>&nbsp;
          <Button variant="success"> <FontAwesomeIcon icon={faPhoneAlt} /> Call Now</Button>
      </div></Col>
  </Row> 
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
  </Row>
   
</Container>

 
            </>
        )
    }
}
