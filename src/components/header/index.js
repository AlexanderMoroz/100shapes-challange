import React from 'react';
import { Flex, Button } from 'theme-ui';
import { CgProfile } from 'react-icons/cg';

const Header = () => (
	<Flex
		as="header"
		p={3}
		pt={4}
		sx={{
			justifyContent: 'flex-end',
			position: 'sticky',
			top: 0,
			left: 0,
			width: '100%'
		}}
	>
		<Button bg="transparent" p={0} color="text">
			<CgProfile size={30} />
		</Button>
	</Flex>
);

export default Header;