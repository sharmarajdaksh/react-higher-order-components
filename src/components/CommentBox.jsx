import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from '../actions';
import requireAuth from './requireAuth';

class CommentBox extends Component {
	state = { comment: '' };

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({ comment: '' });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h4>Add a Comment</h4>
					<textarea
						name='commentinput'
						id='commentinput'
						value={this.state.comment}
						onChange={(e) =>
							this.setState({ comment: e.target.value })
						}
					></textarea>
					<div>
						<button>Submit Comment</button>
					</div>
				</form>
				<button
					className='fetch-comments'
					onClick={this.props.fetchComments}
				>
					Fetch Comments
				</button>
			</div>
		);
	}
}


export default connect(null, { saveComment, fetchComments })(
	requireAuth(CommentBox)
);
