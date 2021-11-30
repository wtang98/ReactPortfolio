"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _calculator = _interopRequireDefault(require("./components/assets/portfolioImages/calculator.PNG"));

var _game = _interopRequireDefault(require("./components/assets/portfolioImages/game.PNG"));

var _punkapi = _interopRequireDefault(require("./components/assets/portfolioImages/punkapi.PNG"));

var _tickettracker = _interopRequireDefault(require("./components/assets/portfolioImages/tickettracker.PNG"));

var _javagame = _interopRequireDefault(require("./components/assets/portfolioImages/javagame.PNG"));

var _morse = _interopRequireDefault(require("./components/assets/portfolioImages/morse.PNG"));

var _airbnb = _interopRequireDefault(require("./components/assets/portfolioImages/airbnb.PNG"));

var _facebook = _interopRequireDefault(require("./components/assets/portfolioImages/facebook.PNG"));

var _client = _interopRequireDefault(require("./components/assets/portfolioImages/client.PNG"));

var _amazon = _interopRequireDefault(require("./components/assets/portfolioImages/amazon.PNG"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var items = [{
  gHubUrl: "https://wtang98.github.io/Calculator/",
  cardId: "card1",
  backgroundImagePath: _calculator["default"],
  title: "Calculator",
  description: "HTML/CSS and Javascript calculator"
}, {
  gHubUrl: "https://wtang98.github.io/JavaScript-Game/",
  cardId: "card2",
  backgroundImagePath: _game["default"],
  title: "Reaction Game",
  description: "A reaction aim game that uses HTML/SCSS and JavaScript."
}, {
  gHubUrl: "https://wtang98.github.io/punk-api/",
  cardId: "card3",
  backgroundImagePath: _punkapi["default"],
  title: "Brewdog Api",
  description: "Brew Dog Api challenge using React and Api fetches."
}, {
  gHubUrl: "https://wtang98.github.io/ticket-tracker/",
  cardId: "card4",
  backgroundImagePath: _tickettracker["default"],
  title: "Ticket Tracker",
  description: "React exercise completed alongside another partner."
}, {
  gHubUrl: "https://github.com/wtang98/Java-Game",
  cardId: "card5",
  backgroundImagePath: _javagame["default"],
  title: "Java Game",
  description: " A game written in Java using the principles of Object Orientated programming."
}, {
  gHubUrl: "https://wtang98.github.io/Morse-Code-Translator/",
  cardId: "card6",
  backgroundImagePath: _morse["default"],
  title: "Morse Code Translator",
  description: "Morse code translator using HTML/CSS and JavaScript."
}, {
  gHubUrl: "https://wtang98.github.io/Airbnb-Clone/",
  cardId: "card7",
  backgroundImagePath: _airbnb["default"],
  title: "AirBnB Clone",
  description: "AirBnB clone built around the 2020 version of the website built in React"
}, {
  gHubUrl: "https://wtang98.github.io/Facebook-clone/",
  cardId: "card8",
  backgroundImagePath: _facebook["default"],
  title: "Facebook Clone",
  description: "FaceBook clone in React using firebase login."
}, {
  gHubUrl: "https://github.com/wtang98/_charlie",
  cardId: "card9",
  backgroundImagePath: _client["default"],
  title: "Student/ project tracker manager",
  description: "For the final project on the Nology Course, our group created a tracker for students and their projects for Nology; writing the front end in react and backend in Java and SQL."
}, {
  gHubUrl: "https://clone-e9b58.web.app",
  cardId: "card910",
  backgroundImagePath: _amazon["default"],
  title: "Amazon Clone",
  description: "An Amazon clone using react, firebase hosting, firebase database, firebase authentication, redux and Stripe Payments"
}];
var _default = items;
exports["default"] = _default;