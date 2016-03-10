var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		return ( React.createElement("div", {className: ""}, 
			"Hello world!I am a CommentList. ")
		);
	}
});
var CommentForm = React.createClass({displayName: "CommentForm",
	render: function() {
		return ( React.createElement("div", {className: "commentForm"}, 
			"Hello wold!I am a CommentForm. ")
		);
	}

});

var CommentBox = React.createClass({
	displayName: 'CommentBox',
	render: function() {
		return (
			React.createElement('div', {
				className: 'comentBox'
			}, 'Hello world! I am a CommentBox.')
		);
	}
});
ReactDOM.render(
	React.createElement(CommentBox, null),
	document.getElementById('content')
);