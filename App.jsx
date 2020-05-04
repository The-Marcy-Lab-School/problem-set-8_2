const App = () => {
	return (
	  <div>
	    <h1>Hello world</h1>
	    <UserCard userId="1" />
		<UserCard userId="2" />
		<UserCard userId="3" />
		<UserCard userId="4" />
		<UserCard userId="5" />
		<UserCard userId="6" />
	  </div>
	  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
