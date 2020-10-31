import logo from './logo.svg';
import './App.css';
import Device from './components/device';
import { devices } from "./components/device/devices";
import React, { useState } from "react";

function App() {
	const [device, setDevice]  = useState(devices[1].name);
	return (
		<div
			style={{
				minWidth: '100vw',
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#111111',
				flexDirection: 'column',
				paddingTop: 60,
				boxSizing: 'border-box'
			}}
		>
			<select onChange={e => setDevice(e.target.value)} style={{ marginBottom: '10vh', position: 'absolute', top: 40, left: '50%', transform: 'translate(-50%, -50%)' }}>
				{devices.map(d => <option value={d.name} key={d.name}>{d.label}</option>)}
			</select>
			<Device name={device}>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo"/>
						<p>
							Edit <code>src/App.js</code> and save to reload.
						</p>
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
					</header>
				</div>
			</Device>
		</div>
	);
}

export default App;
