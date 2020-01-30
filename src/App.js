import React, {useState} from 'react';
import './App.css';

const Progress = ({done}) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }

    setStyle(newStyle);
  }, 200)

  return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}

function App() {
  return (
    <div className="App">
      <div className="box">
        <h1 className="title">Progress Bar inspiring by <a href="http://collectui.com/designers/endubueze/progress-bar" target="_blank" className="link" rel="noopener noreferrer"> this</a></h1>
        <Progress done="80"/>
        <p>Please wait while the application loading..</p>
        <p className="border"></p>
      </div>
    </div>
  );
}

export default App;
