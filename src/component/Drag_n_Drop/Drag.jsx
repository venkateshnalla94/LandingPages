import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { link } from "fs";
import "./Drag.css";
import Drop from "./Drop";
class Drag extends Component {
  state = {
    images: [
      {
        id: 1,
        image: ""
      }
    ]
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6" id="link_box">
            <div className="container">
              <Tab.Container
                id="list-group-tabs-example"
                defaultActiveKey="#link1"
              >
                <Row>
                  <Col sm={4}>
                    <ListGroup>
                      <ListGroup.Item action href="#link1">
                        iphone7plus
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2">
                        iphone8
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link3">
                        iphoneX
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link4">
                        iphoneXR
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link5">
                        iphoneXS
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col sm={7}>
                    <Tab.Content>
                      <Tab.Pane eventKey="#link1">{this.newMethod}</Tab.Pane>
                      <Tab.Pane eventKey="#link2">
                        {this.newMethod_iphone7}
                      </Tab.Pane>
                      <Tab.Pane eventKey="#link3">
                        {this.newMethod_iphoneX}
                      </Tab.Pane>
                      <Tab.Pane eventKey="#link4">
                        {this.newMethod_iphoneXR}
                      </Tab.Pane>
                      <Tab.Pane eventKey="#link5">
                        {this.newMethod_iphoneXS}
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
          <div className="col-md-4">
            <div className="container" id="drop_box">
              <div
                id="div1"
                ondrop="drop(event)"
                ondragover="allowDrop(event)"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  newMethod() {
    return (
      <div className="col-sm-8  col-lg-7">
        <img
          src="https://www.incredible.co.za/media/catalog/product/cache/3/image/1400x/0dc2d03fe217f8c83829496872af24a0/m/n/mnqm2aa_a.png"
          className="img-responsive"
          width="100%"
          draggable="true"
          ondragstart="drag(event)"
        />
      </div>
    );
  }
  newMethod_iphoneX() {
    return (
      <div className="col-sm-8  col-lg-4">
        <img
          src="https://purepng.com/public/uploads/large/purepng.com-iphone-xiphone-xapplescreen-21530617565atiut.png"
          className="img-responsive"
          width="100%"
          draggable="true"
          ondragstart="drag(event)"
        />
      </div>
    );
  }
  newMethod_iphoneXR() {
    return (
      <div className="col-sm-8  col-lg-6">
        <img
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-yellow-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226036826"
          className="img-responsive"
          width="100%"
          draggable="true"
          ondragstart="drag(event)"
        />
      </div>
    );
  }
  newMethod_iphoneXS() {
    return (
      <div class="col-sm-8  col-lg-6">
        <img
          src="https://cdn11.bigcommerce.com/s-53cwszo4/images/stencil/1024x1024/products/605/3595/xs_max_gold__33684.1536872702.png?c=2"
          className="img-responsive"
          width="100%"
          draggable="true"
          ondragstart="drag(event)"
        />
      </div>
    );
  }
  newMethod_iphone7() {
    return (
      <div class="col-sm-8  col-lg-6">
        <img
          id="01"
          className="img-responsive"
          width="100%"
          id="drop_img_1"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-plus-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795417455"
          alt="Smiley face"
          draggable="true"
        //   ondragstart={this.drag(event)}
        />
      </div>
    );
  }
}
export default Drag;
