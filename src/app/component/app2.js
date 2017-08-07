import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { styles } from "../styles.js";
import { list } from "../index.js"

export class App2 extends React.Component {
	constructor(props) {
    super(props);
    this.state = {list: list};
  }
	componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      100
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({list: list});
  }
	remove = (i) => {
		list.splice(i, 1)
	}
	complete = (i) => {
		list[i].done = true;
	}
  render() {
    return (
      <div className="App row">
				<div className="col-sm-6 text-center">
					<h3 className="row">Todo</h3> {
						this.state.list.map((item, i) =>
						<div style={Object.assign({}, styles.listItem, item.done && styles.none)} key={"item_" + i}>
							{ !item.done && <div className="row">
                <div className="col-sm-5 col-sm-push-1 text-left">
								  <span> • {item.name} </span>
                </div>
                <div className="col-sm-6 text-right">
  								<button style={Object.assign({}, styles.complete)} className="btn" onClick={() => this.complete(i)}> Complete </button>
  								<button style={Object.assign({}, styles.remove)} className="btn" onClick={() => this.remove(i)}> X </button>
                </div>
							</div> }
						</div>
					)
				}
				</div>
				<div className="verticalDivider"></div>
				<div className="col-sm-6 text-center">
	        <h3>Done</h3> {
						this.state.list.map((item, i) =>
						<div className="row" style={Object.assign({}, styles.listItem, !item.done && styles.none)} key={"item_" + i}>
							{ item.done && <div className="row">
                <div className="col-sm-5 col-sm-push-1 text-left">
  								<span> • {item.name} </span>
                </div>
                <div className="col-sm-6 text-right">
  								<button style={Object.assign({}, styles.remove)} className="btn" onClick={() => this.remove(i)}> X </button>
                </div>
							</div> }
						</div>
					)
				}
				</div>
      </div>
    );
  }
}
