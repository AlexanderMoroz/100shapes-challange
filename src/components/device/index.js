import './devices.css';
import React, { useMemo } from "react";
import { devices } from "./devices";

const Device = ({ children, name = 'iphone-x' }) => {
	const Component = useMemo(() => devices.find(d => d.name === name).Component, [name]);
	return (
		<Component>
			{children}
		</Component>
	)
};

export default Device;