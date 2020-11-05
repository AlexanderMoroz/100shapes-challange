import React from 'react';
import { Flex, Button } from 'theme-ui';
import { CgProfile } from 'react-icons/cg';
import { FiChevronLeft } from 'react-icons/fi';

const Header = ({ onBackClick = () => null, }) => (
	<Flex
		as="header"
		px={5}
		pt={7}
		pb={0}
		sx={{
			justifyContent: 'space-between',
			position: 'sticky',
			top: 0,
			left: 0,
			width: '100%',
			zIndex: 10,
		}}
	>
		<Button bg="transparent" p={0} color="background" onClick={onBackClick} sx={{ outline: 'none', }}>
			<FiChevronLeft size={30} />
		</Button>
		<Button bg="background" p={0} color="text"  sx={{ borderRadius: '50%', width: 30, height: 30, '& svg': { m: '-2px' } }}>
			<CgProfile size={32} />
		</Button>
	</Flex>
);

export default Header;