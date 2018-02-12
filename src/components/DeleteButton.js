import React, { Component } from 'react';
import { CloseButton, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import './DeleteButton.css';

class DeleteButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      index: null,
      id: null
    };
  }


  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  deleteGroup = function deleteGroup() {
    let authToken = "Bearer " + localStorage.getItem('jwt');
    axios({
      url: `http://localhost:3000/groups/${this.state.id}`,
      method: 'delete',
      headers: {'Authorization': authToken, 'Content-Type': 'application/json'}
    })
    .then((response) => {
      console.log(response.data);
      // this.setState((prevState) => {
      //   var newGroups = prevState.groups.splice(groupIndex, 1);
      //   return {groups: newGroups}
      // });
    })
    .catch((error) => (console.log(error)));
  }

  componentDidMount() {
    this.setState({
      index: this.props.groupIndex,
      id: this.props.groupId
    });
  }

  render() {
    return (
      <div className="DeleteButton">
        <CloseButton onClick={this.handleShow} />

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to delete this?</Modal.Title>
          </Modal.Header>
          <Modal.Body className={"modal-body"}>
            <Button className={"delete-button"} onClick={this.deleteGroup}>Delete</Button>
            <Button className={"cancel-button"} onClick={this.handleClose}>Cancel</Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default DeleteButton;
