'use strict';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return React.createElement("section", {
      class: "table"
    }, React.createElement("section", {
      class: "title"
    }, React.createElement("h1", null, "Jhon Doe"), React.createElement("h2", null, "Full Stack Developer")), React.createElement("section", {
      class: "left"
    }, React.createElement("section", {
      class: "block"
    }, React.createElement("h3", null, "NJ"), React.createElement("span", null, "18"), React.createElement("p", null, "Node.JS")), React.createElement("section", {
      class: "block"
    }, React.createElement("h3", null, "PH"), React.createElement("span", null, "21"), React.createElement("p", null, "PHP")), React.createElement("section", {
      class: "block"
    }, React.createElement("h3", null, "RB"), React.createElement("span", null, "21"), React.createElement("p", null, "Ruby"))), React.createElement("section", {
      class: "center"
    }, React.createElement("section", {
      class: "block"
    }, React.createElement("h3", null, "HL"), React.createElement("span", null, "21"), React.createElement("p", null, "HTML")), React.createElement("section", {
      class: "block"
    }, React.createElement("h3", null, "CS"), React.createElement("span", null, "31"), React.createElement("p", null, "CSS")), React.createElement("section", {
      class: "block"
    }, React.createElement("h3", null, "JS"), React.createElement("span", null, "21"), React.createElement("p", null, "JavaScript")), React.createElement("section", {
      class: "block"
    }, React.createElement("h3", null, "JQ"), React.createElement("span", null, "21"), React.createElement("p", null, "jQuery")), React.createElement("section", {
      class: "block"
    }, React.createElement("h3", null, "RC"), React.createElement("span", null, "31"), React.createElement("p", null, "React")), React.createElement("section", {
      class: "block"
    }, React.createElement("h3", null, "NG"), React.createElement("span", null, "11"), React.createElement("p", null, "Angular"))), React.createElement("section", {
      class: "right"
    }, React.createElement("section", {
      class: "block"
    }, React.createElement("h3", null, "SQ"), React.createElement("span", null, "11"), React.createElement("p", null, "MySQL")), React.createElement("section", {
      class: "block"
    }, React.createElement("h3", null, "PG"), React.createElement("span", null, "11"), React.createElement("p", null, "PostgreSQL")), React.createElement("section", {
      class: "block"
    }, React.createElement("h3", null, "MG"), React.createElement("span", null, "11"), React.createElement("p", null, "MongoDB")), React.createElement("section", {
      class: "block"
    }, React.createElement("h3", null, "RD"), React.createElement("span", null, "11"), React.createElement("p", null, "Redis"))));
  }

}

const domContainer = document.querySelector('#modal');
ReactDOM.render(e(Modal), domContainer);
