'use strict';

const e = React.createElement;


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    if (this.state.show) {
  return React.createElement("section", {
    class: "valitud-paket"
  }, React.createElement("section", {
    class: "large-12 cell widget-title"
  }, React.createElement("h3", null, "' . $text->", 'Valitud Paket', " . '")), React.createElement("section", null, React.createElement("section", {
    class: "large-12 cell selection1"
  }, "section 1"), React.createElement("section", {
    class: "large-12 cell selection2"
  }, "section 2"), React.createElement("section", {
    class: "large-12 cell selection3"
  }, "section 3")));
}

    return e(
      'a',
      { onClick: () => this.setState({ show: true }) },
      'Osta'
    );
  }
}

const domContainer = document.querySelector('#modal');
ReactDOM.render(e(Modal), domContainer);
