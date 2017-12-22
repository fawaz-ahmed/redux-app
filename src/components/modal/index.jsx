import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class FollowersModal extends Component {

  render() {
    const { user, showModal, onClose } = this.props;
    const followers = this.props.followers[user.id];

    const followerBox = {
      border: '2px solid gray',
      marginBottom: 5,
      borderRadius: 20,
      padding: 10,
    };

    const imgStyle = {
      marginRight: 10,
      borderRadius: '20%'
    };

    return (
      <Modal isOpen={showModal} toggle={onClose} backdrop={true}>
        <ModalHeader toggle={onClose}>
          Followers of {user.login}
          <br />
          <small># of followers : {followers && followers.length}</small>
        </ModalHeader>
        <ModalBody>
          {followers && followers.map(follower => (
            <div key={`follower-${follower.id}`} style={followerBox}>
              <img
                alt={`${follower.login} profile`}
                src={follower.avatar_url}
                width={30}
                className="img-fluid"
                style={imgStyle}
              />
              <label>
                <strong>{follower.login}</strong>
              </label>
            </div>
          ))}
        </ModalBody>
      </Modal>
    );
  }
}

FollowersModal.propTypes = {
  user: PropTypes.object,
  showModal: PropTypes.bool,
  onClose: PropTypes.func,
  followers: PropTypes.object,
};

export default FollowersModal;
