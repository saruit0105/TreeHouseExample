import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
class App extends Component {
  state = {
    isFiltered: false,
    pendingGuests: "",
    guests: []
  };

  toggleGuestProperty = (property, id) => {
    this.setState({
      guests: this.state.guests.map((guest, id) => {
        if (id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });
  };

  lastId = 0;

  newGuestId = () => {
    const id = this.lastId;
    this.lastId += 1;
    return id;
  };

  nameInput = e => {
    this.setState({ pendingGuests: e.target.value });
  };

  addGuest = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuests,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...this.state.guests
      ],
      pendingGuests: ""
    });
  };

  toggleConfirmation = id => this.toggleGuestProperty("isConfirmed", id);

  removeGuest = id => {
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });
  };

  toggleEditing = id => this.toggleGuestProperty("isEditing", id);

  toggleFilter = () => this.setState({ isFiltered: !this.state.isFiltered });

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => (guest.isConfirmed ? total + 1 : total),
      0
    );

  setName = (name, id) => {
    this.setState({
      guests: this.state.guests.map((guest, id) => {
        if (id === guest.id) {
          console.log(this.state);
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });
  };

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <Header
          addGuest={this.addGuest}
          pendingGuest={this.state.pendingGuests}
          nameInput={this.nameInput}
        />
        <Main
          toggleGuestProperty={this.toggleGuestProperty}
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          guests={this.state.guests}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          isEditing={this.isEditing}
          setName={this.setName}
          isFiltered={this.state.isFiltered}
          removeGuest={this.removeGuest}
          pendingGuest={this.state.pendingGuests}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
        />
      </div>
    );
  }
}

export default App;
