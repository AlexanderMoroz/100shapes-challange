export const devices = [
	{
		name: 'note-8',
		label: 'galaxy note 8',
		Component: ({ children }) => (
			<div className="marvel-device note8">
				<div className="inner"/>
				<div className="overflow">
					<div className="shadow"/>
				</div>
				<div className="speaker"/>
				<div className="sensors"/>
				<div className="more-sensors"/>
				<div className="sleep"/>
				<div className="volume"/>
				<div className="camera"/>
				<div className="screen">
					{children}
				</div>
			</div>
		)
	},
	{
		name: 'iphone-x',
		label: 'iphone X',
		Component: ({ children }) => (
			<div className="marvel-device iphone-x">
				<div className="notch">
					<div className="camera"/>
					<div className="speaker"/>
				</div>
				<div className="top-bar"/>
				<div className="sleep"/>
				<div className="bottom-bar"/>
				<div className="volume"/>
				<div className="overflow">
					<div className="shadow shadow--tr"/>
					<div className="shadow shadow--tl"/>
					<div className="shadow shadow--br"/>
					<div className="shadow shadow--bl"/>
				</div>
				<div className="inner-shadow"/>
				<div className="screen" style={{ overflow: 'auto' }}>
					{children}
				</div>
			</div>
		)
	},
	{
		name: 'iphone-8',
		label: 'iphone 8',
		Component: ({ children }) => (
			<div className="marvel-device iphone8 silver">
				<div className="top-bar"/>
				<div className="sleep"/>
				<div className="volume"/>
				<div className="camera"/>
				<div className="sensor"/>
				<div className="speaker"/>
				<div className="screen">
					{children}
				</div>
				<div className="home"/>
				<div className="bottom-bar"/>
			</div>
		)
	},
	{
		name: 'nexus5',
		label: 'nexus 5',
		Component: ({ children }) => (
			<div className="marvel-device nexus5">
				<div className="top-bar"/>
				<div className="sleep"/>
				<div className="volume"/>
				<div className="camera"/>
				<div className="screen">
					{children}
				</div>
			</div>
		)
	},
];