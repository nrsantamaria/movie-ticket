// Business Logic
function Theater (movieNames, movieTimes, customerAges) {
  this.movieNames = ["Ghost in the Shell", "Power Rangers", "Logan", "Get Out", "Beauty and the Beast"];
  this.movieTimes = ["12 PM", "2 PM", "4 PM", "8 PM", "10 PM"];
  this.customerAges = ["59 and under", "60 and over"];
}

function Ticket(movieName, movieTime, customerAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.customerAge = customerAge;
  this.ticketPrice = 20;
};

Ticket.prototype.orderDetails = function (){
  return this.movieName + ", " + this.movieTime ;
};

Ticket.prototype.ticketChange = function (theater) {
  if (this.movieName !== "Ghost in the Shell"){
    this.ticketPrice -=  5;
  } else {
    this.ticketPrice;
  }
  if (this.movieTime !== "8 PM"){
    this.ticketPrice -=  5;
  } else {
    this.ticketPrice;
  }
  if (this.customerAge !== "59 and under"){
   this.ticketPrice -=  5;
  } else {
    this.ticketPrice;
  }
  console.log(this.ticketPrice);
};

// User Logic
$(document).ready(function() {
  $("#form-one").submit(function(event) {
  event.preventDefault();
  var movieNameInput = $("select.movieName").val();
  var movieTimeInput = $("select.movieTime").val();
  var ageInput = $("select.customerAge").val();
  var newTicket = new Ticket(movieNameInput, movieTimeInput, ageInput);
  var newTheater = new Theater();

  $("#output").last().append("<h2>" + "Your movie ticket cost equals: $" + newTicket.ticketChange() + "</h2>");
  });
});
