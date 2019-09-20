import React, { Component } from "react";
import { returnStatement } from "@babel/types";
class Drop extends Component {
  render() {
    return (
      <div>
        <h2>Drag and Drop</h2>
        <p>Drag the image back and forth between the two div elements.</p>

        <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
          <img
            src="img_w3slogo.gif"
            draggable="true"
            // ondragstart={this.drag_box(DragEvent)}
            id="drag1"
            width="88"
            height="31"
          />
        </div>

        <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)" />
      </div>
    );
  }
}

export default Drop;
