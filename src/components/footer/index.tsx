import React from 'react';
import { Flex, Box } from 'theme-ui';
import { nav } from '../../mock';
import theme from '../../theme';
import { ICard } from '../cards';

interface IFooter {
	activeCard?: ICard;
}

const Footer: React.FunctionComponent<IFooter> = ({ activeCard = null }) => {
	const activeIndex = activeCard ? 1 : 0;
	return (
		<Flex
			as="footer"
			bg="background"
			p={4}
			pb={5}
			sx={{
				justifyContent: 'space-around',
				position: 'fixed',
				bottom: 0,
				left: 0,
				width: '100%',
				zIndex: 10,
			}}
		>
			{nav.map(i => {
				const active = i === activeIndex;
				return (
					<Flex
						role="button"
						key={i}
						p={0}
						pb={2}
						mx={1}
						bg="transparent"
						sx={{
							justifyContent: 'center' ,
							borderBottom: `3px solid`,
							borderColor: active ? theme.colors.primary : theme.colors.grey,
							borderRadius: 0,
							width: 43,
							transition: 'border-color 0.3s ease-in'
						}}>
						<Box
							bg="transparent"
							sx={{
								height: 24,
								width: 24,
								borderRadius: 12,
								border: `1px solid`,
								borderColor: active ? theme.colors.primary : theme.colors.grey,
								transition: 'border-color 0.2s ease-out'
							}}
						/>
					</Flex>
				)
			})}
		</Flex>
	);
}

export default Footer;