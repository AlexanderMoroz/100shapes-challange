import React, { useMemo, useState } from "react";
import Device from './components/device';
import { ThemeProvider, Flex, Box, Heading, Text, Button } from 'theme-ui';
import theme from './theme';
import Header from "./components/header";
import { accounts, transactions } from "./mock";
// TODO use profile icon from export
import { CgProfile } from 'react-icons/cg';

function App() {
	const [accountId, setAccountId] = useState(null);
	const activeAccount = useMemo(() => accounts.find(a => a.id === accountId), [accountId]);
	return (
		<ThemeProvider theme={theme}>
			<Device>
				<Flex sx={{ flexDirection: 'column', position: 'relative' }}>
					<Header onBackClick={() => setAccountId(null)}	/>
					{
						activeAccount ? (
							<Box
								sx={{
									position: 'absolute',
									top: 0,
									left: 0,
									width: '100%',
									background: theme.gradient,
									display: 'flex',
									flexDirection: 'column',
									px: 4,
									pb: 4,
									pt: 6,
									borderRadius: 8,
									minHeight: 280,
									outline: 'none',
									transition: 'border-color',
								}}
							>
								<Heading sx={{ color: 'background', fontSize: 0, fontWeight: 0 }}>You're owed</Heading>
								<Flex sx={{ alignItems: 'center', color: "background" }} pt={0} pb={0}>
									<Text sx={{ fontSize: 24, fontWeight: 0 }} as="span">£</Text>
									<Text sx={{ fontSize: 65, fontWeight: 0 }} as="span">{activeAccount.sum}</Text>
								</Flex>
								<Box bg="background" sx={{ height: 16, borderRadius: '50%', opacity: 0, alignSelf: 'flex-end', '& svg': { m: '-1px' }}}><CgProfile size={18} color={theme.colors.text} /></Box>
							</Box>
						) : null
					}
					<Heading as="h2" sx={{ fontSize: 2 }} mb={4} px={4}>Morning Lee</Heading>
					<Heading as="h2" sx={{ textTransform: 'uppercase', fontSize: 0 }} px={4}>Your account</Heading>
					<Box sx={{ overflow: 'auto', width: '100%' }} px={4} pt={3}>
						<Flex as="ul" sx={{ listStyle: 'none' }} p={0}>
							{accounts.map(({ sum, id }) => (
								<Box
									key={id}
									as="li"
									sx={{
										p: 0,
										mr: 3,
										width: 132,
										flexShrink: 0,
									}}
								>
									<Button
										onClick={() => setAccountId(id)}
										sx={{
											background: theme.gradient,
											display: 'flex',
											flexDirection: 'column',
											p: 3,
											pb: 4,
											borderRadius: 8,
											border: '1px solid transparent',
											minHeight: 160,
											width: '100%',
											outline: 'none',
											transition: 'border-color',
											'&:focus, &:active': {
												borderColor: 'text'
											}
										}}
									>
										<Heading sx={{ color: 'background', fontSize: 0, fontWeight: 0 }}>You're owed</Heading>
										<Flex sx={{ alignItems: 'center', color: "background" }} pt={2} pb={5}>
											<Text sx={{ fontSize: 18, fontWeight: 0 }} as="span">£</Text>
											<Text sx={{ fontSize: 38, fontWeight: 0 }} as="span">{sum}</Text>
										</Flex>
										<Box bg="background" sx={{ height: 16, borderRadius: '50%', alignSelf: 'flex-end', '& svg': { m: '-1px' }}}><CgProfile size={18} color={theme.colors.text} /></Box>
									</Button>
								</Box>
							))}
						</Flex>
					</Box>
					<Box px={4} mt={activeAccount ? -100 : 0} pt={32} sx={{ position: 'relative', borderRadius: 24 }} bg="background">
						<Heading as="h3" sx={{ fontSize: 0 }} mb={11}>Transactions</Heading>
						<Box as="ul" sx={{ listStyle: 'none' }} p={0}>
							{transactions.map(i => <Box key={i} as="li" sx={{ bg: '#F9F9F9', height: 54, mb: 2, p: 0, borderRadius: 8 }}/>)}
						</Box>
					</Box>
				</Flex>
			</Device>
		</ThemeProvider>
	);
}

export default App;
