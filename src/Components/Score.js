import React from "react";
import "./Score.css";

class Score extends React.Component {
	state = { score: 0, count: 1, win: false, pay: true };

	increment = () => {
		const { score } = this.state;
		this.setState({ score: this.state.score + this.state.count });
		if (score >= 100) {
			this.setState({ win: true });
			this.setState({ pay: false });
		}
		// this.youWin()
	};

	payTen = () => {
		const { count, score } = this.state;

		if (score < 10) {
			// window.alert
			alert("You can't afford that!");
		} else {
			// score -10
			this.setState({ score: score - 10 });
			// change the button text from +1 to +2
			this.setState({ count: count + 1 });
		}
	};

	youWin = () => {
		this.setState((prevState) => ({ win: !this.state.win }));
	};

	reset = () => {
		this.setState({ score: 0, count: 1, win: false, pay: true });
	};

	render() {
		const { score, count, win, pay } = this.state;
		return (
			<>
				{pay ? (
					<div className="score">
						Current Score: {score}
						<button onClick={this.increment}>+{count}</button>
						<button onClick={this.payTen}>
							Pay 10 points to change from +{count} to +{count + 1}
						</button>
					</div>
				) : null}

				{win ? (
					<div>
						<h2>You Win!</h2>
						<button onClick={this.reset}>Play Again?</button>
					</div>
				) : null}
			</>
		);
	}
}

export default Score;
