import React from "react";

class BtnBtn extends React.Component {
  render() {
    return (
      <a
        href={this.props.link}
        class="btn btn-outline-light btn-lg m-2"
        role="button"
      >
        {this.props.text}
      </a>
    );
  }
}

export default BtnBtn;
