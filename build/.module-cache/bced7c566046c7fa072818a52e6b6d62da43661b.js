var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		return ( React.createElement("div", {className: ""}, 
			"Hello ", this.props.author, "!I am a CommentList." 
		)
		);
	}
});
var CommentForm = React.createClass({displayName: "CommentForm",
	render: function() {
		return ( 
			React.createElement("div", {className: "commentForm"}, 
				this.props.author, 
				this.props.date, 
				"Hello wold!I am a CommentForm.", 
				this.props.children
			)
		);
	}

});

var CommentBox = React.createClass({
	displayName: 'CommentBox',
	render: function() {
		// return (
		// 	React.createElement('div', {
		// 		className: 'comentBox'
		// 	}, 'Hello world! I am a CommentBox.')
		// );
		return (
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "Comments"), 
				React.createElement(CommentList, {author: "kingwell", date: "2015-12-12"}), 
				React.createElement(CommentForm, {author: "leng", date: "2016-10-12"})
			)
		);
	}
});
ReactDOM.render(
	React.createElement(CommentBox, null),
	document.getElementById('content')
);