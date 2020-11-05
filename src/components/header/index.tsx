import React from 'react';
import { Flex, Button, Box } from 'theme-ui';
import { CgProfile } from 'react-icons/cg';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from "react-router-dom";

const Header: React.FunctionComponent = () => (
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
		<Link to="/">
			<Box color="background" sx={{ outline: 'none', }}>
				<FiChevronLeft size={30} />
			</Box>
		</Link>
		<Button bg="background" p={0} color="text"  sx={{ borderRadius: '50%', width: 30, height: 30, '& svg': { m: '-1px' } }}>
			<CgProfile size={32} />
		</Button>
	</Flex>
);

export default Header;