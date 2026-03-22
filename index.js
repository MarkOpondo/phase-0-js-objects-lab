//Write your code here
// initialise new object
const attendee = {
  attendeeId : "T001",
  name : "Alice Smith",
  event : "JavaScript Conference",
  ticketType : "VIP",
  ticketPrice : 150.00
}

// Function to log attendee name
const logAttendeeName = (name) => {
  console.log(attendee.name);
}

// Function to log the ticket price
const logTicketPrice = (attendee) => {
  console.log(attendee.ticketPrice);
}

// Function to update the ticket type
const updateTicketType = (attendee, newType) => {
  attendee.ticketType = newType
  console.log(attendee)
}

// Function to update the ticket price
const updateTicketPrice = (attendee, newPrice) => {
  attendee.ticketPrice = newPrice
  console.log(attendee)
}

// Function to remove the event property
const removeEventProperty = (attendee) => {
  delete attendee.event
  console.log(attendee);
}

// Function to add new property in the object
const addCheckedInProperty = (attendee) => {
  attendee.checkedIn = true
  console.log(attendee);
}


// logAttendeeName()
// logTicketPrice(attendee)
// updateTicketType(attendee, "VVIP")
// updateTicketPrice(attendee, 200)
// removeEventProperty(attendee)
// addCheckedInProperty(attendee)


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};