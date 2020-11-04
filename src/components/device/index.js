import './devices.css';
import React, { useMemo, useState } from "react";
import { devices } from "./devices";
import { Flex, Select } from "theme-ui";

const Device = ({ children }) => {
	const [device, setDevice]  = useState(devices[1].name);
	const Component = useMemo(() => devices.find(d => d.name === device).Component, [device]);
	return (
		<Flex
			sx={{
				minWidth: '100vw',
				minHeight: '100vh',
				backgroundColor: '#111111',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<Flex
				p={3}
				sx={{
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Select
					value={device}
					onChange={e => setDevice(e.target.value)}
					sx={{
						bg: 'background',
						width: 200,
					}}
				>
					{devices.map(d => <option value={d.name} key={d.name}>{d.label}</option>)}
				</Select>
			</Flex>
			<Flex
				alignItems="center"
				justifyContent="center"
				sx={{
					flexGrow: 1,
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Component>
					{children}
				</Component>
			</Flex>
		</Flex>

	)
};

export default Device;