var ContentBox = React.createClass({displayName: "ContentBox",
	render: function() {
		return ( React.createElement("div", {className: "commentBox"}, 
			"Hello, world!I am a ContentBox. ")
		);
	}
});
React.render( React.createElement(ContentBox, null) , document.getElementById('content'));