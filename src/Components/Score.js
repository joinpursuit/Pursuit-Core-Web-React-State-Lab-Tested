import React from "react";

class Score extends React.Component {
	state = { score: 0 };

	increment = () => {
		this.setState({ score: this.state.score + 1 });
	};

	render() {
		const { score } = this.state;
		return (
			<div>
				Current Score: {score}
				<button onClick={this.increment}>+1</button>
			</div>
		);
	}
}

export default Score;
