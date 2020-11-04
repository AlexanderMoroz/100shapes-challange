import React, { useMemo, useRef, useState } from "react";
import Device from './components/device';
import { ThemeProvider, Flex, Box, Heading, Text } from 'theme-ui';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import theme from './theme';
import Header from "./components/header";
import { accounts, transactions } from "./mock";
// TODO use profile icon from export
import { CgProfile } from 'react-icons/cg';

const MotionBox = motion.custom(Box);
const MotionFlex = motion.custom(Flex);
const MotionHeading = motion.custom(Heading);
const MotionText = motion.custom(Text);

const App = () => {
	const [accountId, setAccountId] = useState(null);
	const wrapperRef = useRef(null);
	const activeAccount = useMemo(() => accounts.find(a => a.id === accountId), [accountId]);

	return (
		<ThemeProvider theme={theme}>
			<Device>
				<Flex sx={{ flexDirection: 'column', position: 'relative' }} ref={wrapperRef}>
					<AnimateSharedLayout type="crossfade">
						<Header onBackClick={() => setAccountId(null)}	/>
						<AnimatePresence>
							{
								activeAccount ? (
										<MotionBox
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											layoutId={`account-container-${activeAccount.id}`}
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
											<MotionHeading layoutId={`account-heading-${activeAccount.id}`} sx={{ color: 'background', fontSize: 0, fontWeight: 0, display: 'flex' }}>You're owed</MotionHeading>
											<MotionFlex layoutId={`account-amount-${activeAccount.id}`} sx={{ alignItems: 'center', color: "background" }} pt={0} pb={0}>
												<MotionText layoutId={`account-currency-${activeAccount.id}`} sx={{ fontSize: 24, fontWeight: 0 }} as="span">£</MotionText>
												<MotionText layoutId={`account-value-${activeAccount.id}`} sx={{ fontSize: 65, fontWeight: 0 }} as="span">{activeAccount && activeAccount.sum}</MotionText>
											</MotionFlex>
											<MotionBox
												layoutId={`account-profile-${activeAccount.id}`}
											 	bg="background"
												sx={{ opacity: '0 !important', height: 16, borderRadius: '50%', alignSelf: 'flex-end', '& svg': { m: '-1px' }}}
											>
												<CgProfile size={18} color={theme.colors.text} />
											</MotionBox>
										</MotionBox>
								) : null
							}
						</AnimatePresence>
						<Heading as="h2" sx={{ fontSize: 2 }} mb={4} px={4}>Morning Lee</Heading>
						<Heading as="h2" sx={{ textTransform: 'uppercase', fontSize: 0 }} px={4}>Your account</Heading>
						<Box sx={{ overflow: 'auto', width: '100%' }} px={4} pt={3}>
							<Flex sx={{ listStyle: 'none' }} p={0}>
								{accounts.map(({ sum, id }) => (
									<MotionBox
										onClick={() => setAccountId(id)}
										key={id}
										layoutId={`account-container-${id}`}
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
										<MotionHeading layoutId={`account-heading-${id}`}  sx={{ color: 'background', fontSize: 0, fontWeight: 0 }}>You're owed</MotionHeading>
										<MotionFlex layoutId={`account-amount-${id}`} sx={{ alignItems: 'center', color: "background" }} pt={2} pb={5}>
											<MotionText layoutId={`account-currency-${id}`} sx={{ fontSize: 18, fontWeight: 0 }} as="span">£</MotionText>
											<MotionText layoutId={`account-value-${id}`} sx={{ fontSize: 38, fontWeight: 0 }} as="span">{sum}</MotionText>
										</MotionFlex>
										<MotionBox layoutId={`account-profile-${id}`} bg="background" sx={{ opacity: 1, height: 16, borderRadius: '50%', alignSelf: 'flex-end', '& svg': { m: '-1px' }}}><CgProfile size={18} color={theme.colors.text} /></MotionBox>
									</MotionBox>
								))}
							</Flex>
							</Box>
					</AnimateSharedLayout>
					<MotionBox
						animate={{
							y: activeAccount ? -100 : 0
						}}
						px={4}
						pt={32}
						sx={{ position: 'relative', borderRadius: 24 }}
						bg="background"
					>
						<Heading as="h3" sx={{ fontSize: 0 }} mb={11}>Transactions</Heading>
						<Box as="ul" sx={{ listStyle: 'none' }} p={0}>
							{transactions.map(i => <Box key={i} as="li" sx={{ bg: '#F9F9F9', height: 54, mb: 2, p: 0, borderRadius: 8 }}/>)}
						</Box>
					</MotionBox>
				</Flex>
			</Device>
		</ThemeProvider>
	);
}

export default App;
