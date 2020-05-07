import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { changeAuth } from '../actions';

class App extends React.Component {
	renderButton() {
		return this.props.auth ? (
			<button onClick={() => this.props.changeAuth(false)}>
				Sign Out
			</button>
		) : (
			<button onClick={() => this.props.changeAuth(true)}>Sign In</button>
		);
	}
	renderHeader() {
		return (
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/post'>Post A Comment</Link>
				</li>
				<li>{this.renderButton()}</li>
			</ul>
		);
	}
	render() {
		return (
			<div>
				{this.renderHeader()}
				<Route path='/post' component={CommentBox} />
				<Route path='/' exact component={CommentList} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { auth: state.auth };
};

export default connect(mapStateToProps, { changeAuth })(App);
