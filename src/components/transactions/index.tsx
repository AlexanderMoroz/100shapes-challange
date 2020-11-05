import React from 'react';
import { Box, Heading } from 'theme-ui';
import theme from '../../theme';
import { MotionBox, MotionFlex } from '../motion';
import { BsPlus } from 'react-icons/bs';

interface ITransactions {
	active: boolean;
	transactions: number[];
}

const Transactions: React.FunctionComponent<ITransactions> = ({ active, transactions }) => {
	return (
		<MotionBox
			animate={{
				y: active ? -80 : 0
			}}
			transition={{ ease: 'linear', duration: 0.3 }}
			px={5}
			pt={5}
			sx={{ position: 'relative', borderRadius: 24 }}
			bg="background"
		>
			<Heading as="h3" sx={{ fontSize: 1 }} mb={3}>Transactions</Heading>
			<MotionFlex
				as="button"
				p={0}
				initial={{ scale: 0 }}
				animate={{ scale: active ? 1 : 0 }}
				transition={{ ease: "easeOut" }}
				exit={{ display: 'none' }}
				sx={{
					position: 'absolute',
					right: '6%',
					top: '-29px',
					alignItems: 'center',
					justifyContent: 'center',
					height: 58,
					width: 58,
					bg: 'text',
					borderRadius: 29,
					appearance: 'none',
					border: 'none'
				}}
			>
				<BsPlus size={40} color={theme.colors.background} />
			</MotionFlex>
			<Box as="ul" sx={{ listStyle: 'none' }} p={0}>
				{transactions.map(i => <Box key={i} as="li" sx={{ bg: '#F9F9F9', height: 54, mb: 2, p: 0, borderRadius: 8 }}/>)}
			</Box>
		</MotionBox>
	);
}

export default Transactions;
