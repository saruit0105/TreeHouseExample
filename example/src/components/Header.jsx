import React from "react";
import PropTypes from "prop-types";
import GuestForm from "./GuestForm";

const Header = props => (
  <header>
    <h1>RSVP</h1>
    <p>A Treehouse App</p>
    <GuestForm
      addGuest={props.addGuest}
      pendingGuests={props.pendingGuests}
      nameInput={props.nameInput}
    />
  </header>
);
Header.propTypes = {
  addGuest: PropTypes.func.isRequired,
  pendingGuests: PropTypes.number,
  nameInput: PropTypes.string.isRequired
};

export default Header;
