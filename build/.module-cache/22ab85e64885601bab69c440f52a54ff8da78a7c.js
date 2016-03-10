var CommentBox = React.createClass({displayName: "CommentBox",
	render: function() {
	 React.createElement("div", {className: "commentBox"}, 
		React.createElement("h1", null, "Comments"), 
		React.createElement(CommentList, null), 
		React.createElement(CommentForm, null)
	 )
	}
});