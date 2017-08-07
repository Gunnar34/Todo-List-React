import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { styles } from "../styles.js";
import { list } from "../index.js"

export class App1 extends React.Component {
  state = {
    disabled: true,
  }
  onChange = (e) => {
    const length = e.target.value.length;
    if (length >= 4) {
      this.setState(() => ({ disabled: false }))
    } else if (!this.state.disabled) {
      this.setState(() => ({ disabled: true }))
    }
  }
	submitWord = () => {
		list.push({
			name: this.refs.myInput.value,
			done: false,
		});
		this.refs.myInput.value = '';
		this.setState(() => ({ disabled: true }));
		console.log(list);
	}
  render() {
    const label = this.state.disabled ? 'Disabled' : 'Submit';
    return (
      <div className="App">
				<div className="row">
					<div className="col-sm-6 col-sm-push-3 text-center">
						<h1>Todo List</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 col-sm-push-3 text-center">
		        <button
		          style={Object.assign({}, styles.button, !this.state.disabled && styles.buttonEnabled)}
		          disabled={this.state.disabled}
							onClick={this.submitWord}
		        >{label}</button>
		        <input
							ref="myInput"
		          style={styles.input}
		          onChange={this.onChange}
		        />
					</div>
				</div>
      </div>
    );
  }
}
