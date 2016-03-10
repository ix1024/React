var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		return ( React.createElement("div", {className: ""}, 
			"Hello ", React.createElement("strong", null, this.props.author, " "), "! ", React.createElement("em", null, this.props.date), "I am a CommentList." 
		)
		);
	}
});
var CommentForm = React.createClass({displayName: "CommentForm",
	render: function() {
		return ( 
			React.createElement("div", {className: "commentForm"}, 
				React.createElement("strong", null, this.props.author), 
				React.createElement("em", null, this.props.date), 
				"Hello wold!I am a CommentForm.", 
				this.props.children
			)
		);
	}

});

// var CommentBox = React.createClass({
// 	displayName: 'CommentBox',
// 	render: function() {
// 		// return (
// 		// 	React.createElement('div', {
// 		// 		className: 'comentBox'
// 		// 	}, 'Hello world! I am a CommentBox.')
// 		// );
// 		return (
// 			<div className="commentBox">
// 				<h1>Comments</h1>
// 				<CommentList author="kingwell" date="2015-12-12"/>
// 				<CommentForm author="leng" date="2016-10-12"/>
// 			</div>
// 		);
// 	}
// });
// ReactDOM.render(
// 	React.createElement(CommentBox, null),
// 	document.getElementById('content')
// );
// var Comment = React.createClass({
// 	render: function() {
// 		return (
// 			<div className="comment">
// 				<h2 className="commentAuthor">
// 					{this.props.author}
// 				</h2>
// 				{marked(this.props.children.toString())}
// 			</div>
// 		);
// 	}
// });
var data = [{
	author: "Pete Hunt",
	text: "This is one comment"
}, {
	author: "Jordan Walke",
	text: "This is *another* comment"
}];
var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        React.createElement(Comment, {author: comment.author}, 
          comment.text
        )
      );
    });
    return (
      React.createElement("div", {className: "commentList"}, 
        commentNodes.text
      )
    );
  }
});
var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.props.data}), 
        React.createElement(CommentForm, null)
      )
    );
  }
});

ReactDOM.render(
  React.createElement(CommentBox, {data: data}),
  document.getElementById('content')
);