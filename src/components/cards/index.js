import React from "react";
import { Flex, Box } from 'theme-ui';
import { MotionBox, MotionFlex, MotionHeading, MotionText } from "../motion";
import theme from '../../theme';
// Export in svg from Figma for some reason was inaccurate, so I've decided to use npm module
import { CgProfile } from 'react-icons/cg';

const Cards = ({ cards, onCardClick = () => null }) => (
	<Box sx={{ overflow: 'auto', width: '100%' }} px={4} pt={3}>
		<Flex sx={{ listStyle: 'none' }} p={0}>
			{cards.map(({ amount, id }) => (
				<MotionBox
					onClick={() => onCardClick(id)}
					key={id}
					layoutId={`card-container-${id}`}
					sx={{
						background: theme.gradient,
						display: 'flex',
						flexDirection: 'column',
						p: 3,
						pb: 4,
						borderRadius: 8,
						border: '1px solid transparent',
						minHeight: 160,
						outline: 'none',
						mr: 3,
						width: 132,
						flexShrink: 0,
						opacity: 1,
						transition: 'border-color',
						'&:focus, &:active': {
							borderColor: 'text'
						}
					}}
				>
					<MotionHeading layoutId={`card-heading-${id}`}  sx={{ color: 'background', fontSize: 0, fontWeight: 0 }}>You're owed</MotionHeading>
					<MotionFlex layoutId={`card-amount-${id}`} sx={{ alignItems: 'center', color: "background" }} pt={2} pb={5}>
						<MotionText layoutId={`card-currency-${id}`} sx={{ fontSize: 18, fontWeight: 0 }} as="span">£</MotionText>
						<MotionText layoutId={`card-value-${id}`} sx={{ fontSize: 38, fontWeight: 0 }} as="span">{amount}</MotionText>
					</MotionFlex>
					<MotionBox layoutId={`card-profile-${id}`} bg="background" sx={{ opacity: 1, height: 16, borderRadius: '50%', alignSelf: 'flex-start', '& svg': { m: '-1px' }}}><CgProfile size={18} color={theme.colors.text} /></MotionBox>
				</MotionBox>
			))}
		</Flex>
	</Box>
)

export default Cards;
