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
 var CommentList = React.createClass({displayName: "CommentList",
 	render: function() {
 		return (
 			React.createElement("div", {className: ""}, 
 				"Hello world! I am a CommentList."
 			)
 		);
 	}
 });