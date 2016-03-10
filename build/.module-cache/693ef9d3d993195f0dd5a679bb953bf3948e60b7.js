var ContentBox = React.createClass({displayName: "ContentBox",
	render: function() {
		return ( React.createElement("div", {className: "commentBox"}, 
			"Hello, world!I am a CommentBox. ")
		);
	}
});
React.render( React.createElement(CommentBox, null) , document.getElementById('content'));