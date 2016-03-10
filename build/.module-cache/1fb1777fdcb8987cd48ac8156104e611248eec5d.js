 var CommentBox = React.createClass({
 	displayName: 'CommentsBox',
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