import React from "react";
import PropTypes from "prop-types";
import GuestList from "./GuestList";
import Counter from "./Counter";
import GuestFilter from "./GuestFilter";

const Main = props => (
  <div className="main">
    <GuestFilter
      toggleFilter={props.toggleFilter}
      isFiltered={props.isFiltered}
    />

    <Counter
      totalInvited={props.totalInvited}
      numberAttending={props.numberAttending}
      numberUnconfirmed={props.numberUnconfirmed}
    />
    <GuestList
      guests={props.guests}
      toggleConfirmation={props.toggleConfirmation}
      toggleEditing={props.toggleEditing}
      isEditing={props.isEditing}
      setName={props.setName}
      isFiltered={props.isFiltered}
      removeGuest={props.removeGuest}
      pendingGuest={props.pendingGuests}
    />
  </div>
);
Main.propTypes = {
  addGuest: PropTypes.func.isRequired,
  pendingGuests: PropTypes.number,
  nameInput: PropTypes.string.isRequired,
  guests: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
};

export default Main;
