import React from "react";
import PropTypes from "prop-types";
import GuestName from "./GuestName";

const Guest = props => (
  <li>
    <GuestName
      isEditing={props.isEditing}
      handleNamesEdit={e => props.setName(e.target.value)}
    >
      {props.name}
    </GuestName>
    <label>
      <input
        type="checkbox"
        checked={props.IsConfirmed}
        onChange={props.handleConfirmation}
      />
      Confirmed
    </label>
    <button onClick={props.handleToggleEditing}>
      {props.isEditing ? "save" : "edit"}
    </button>
    <button onClick={props.removeGuest}>remove</button>
  </li>
);
Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired
};

export default Guest;
