import React, { Component } from "react";
import PropTypes from "prop-types";

/*
const Popup = (props) => {
  return(
    <div className={"modal-wrapper"}>
      <div className={"modal-backdrop"} />
      <div className={"modal-box"}>
        {props.children}
      </div>
    </div>
  )
}

export default Popup;

*/

export default class PopUp extends Component {


  render() {
    
    return (
      <div class="modal" id="modal">
        <h2>Modal Window</h2>
        <div class="content">{this.props.children}</div>
        <div class="actions">
          <button class="toggle-button" >
            close
          </button>
        </div>
      </div>
    );
  }

}
