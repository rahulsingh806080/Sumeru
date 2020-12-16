import React from "react";
import Iframe from "react-iframe";
export default class WhiteBoard extends React.Component {
  state = {
    count: 1,
    boards: [1],
  };

  addPage = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  previousPage = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <>
        <Iframe
          url={`https://wbo.ophir.dev/boards/${this.state.count}`}
          width="100%"
          height="100%"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
        <button onClick={this.addPage}>Add Page</button>
        <button onClick={this.previousPage}>Previous Page</button>
      </>
    );
  }
}
