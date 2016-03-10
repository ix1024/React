var ContentBox = React.createClass({displayName: "ContentBox",
	render: function() {
		// return ( < div className = "commentBox" >
		// 	Hello, world!I am a ContentBox. < /div>
		// );
		React.createElement("div", null)
	}
});
React.render( React.createElement(ContentBox, null) , document.getElementById('content'));