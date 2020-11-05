import React from "react";
import { AnimatePresence } from "framer-motion"
import theme from '../../theme';
import { MotionBox, MotionFlex, MotionHeading, MotionText } from "../motion";
// TODO use profile icon from export
import { CgProfile } from 'react-icons/cg';

const ActiveCard = ({ card }) => (
	<AnimatePresence>
		{
			card ? (
				<MotionBox
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					layoutId={`card-container-${card.id}`}
					sx={{
						position: 'absolute',
						top: -1,
						left: -1,
						width: `calc(100% + ${theme.space[1] * 2}px)`,
						background: theme.gradient,
						display: 'flex',
						flexDirection: 'column',
						px: `${theme.space[4] + theme.space[1] * 2}px`,
						pb: 4,
						pt: 6,
						borderRadius: 8,
						minHeight: 280,
						outline: 'none',
						transition: 'border-color',
					}}
				>
					<MotionHeading layoutId={`card-heading-${card.id}`} sx={{ color: 'background', fontSize: 0, fontWeight: 0, display: 'flex' }}>You're owed</MotionHeading>
					<MotionFlex layoutId={`card-amount-${card.id}`} sx={{ alignItems: 'center', color: "background" }} pt={0} pb={0}>
						<MotionText layoutId={`card-currency-${card.id}`} sx={{ fontSize: 24, fontWeight: 0 }} as="span">£</MotionText>
						<MotionText layoutId={`card-value-${card.id}`} sx={{ fontSize: 65, fontWeight: 0 }} as="span">{card.amount}</MotionText>
					</MotionFlex>
					<MotionBox
						layoutId={`card-profile-${card.id}`}
						bg="background"
						sx={{ opacity: '0 !important', height: 16, borderRadius: '50%', alignSelf: 'flex-end', '& svg': { m: '-1px' }}}
					>
						<CgProfile size={18} color={theme.colors.text} />
					</MotionBox>
				</MotionBox>
			) : null
		}
	</AnimatePresence>
)

export default ActiveCard;
