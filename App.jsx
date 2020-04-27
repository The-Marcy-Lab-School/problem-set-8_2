const App = () => {
	return (
		<div>
			<h1 className='header'>User Cards</h1>
			<Search />
		</div>
	)
};

ReactDOM.render(<App />, document.querySelector('.container'));
