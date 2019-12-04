import React from "react";
import PropTypes from "prop-types";

const GuestForm = props => (
  <form onSubmit={props.addGuest}>
    <input
      type="text"
      value={props.pendingGuests}
      placeholder="Invite Someone"
      onChange={props.nameInput}
    />
    <button type="submit" name="submit" value="submit">
      Submit
    </button>
  </form>
);
GuestForm.propTypes = {
  addGuest: PropTypes.func.isRequired,
  pendingGuests: PropTypes.number,
  nameInput: PropTypes.string.isRequired
};

export default GuestForm;
