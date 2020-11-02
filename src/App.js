import React  from "react";
import Device from './components/device';
import { ThemeProvider, Flex, Box, Heading, Text, Button } from 'theme-ui';
import theme from './theme';
import Header from "./components/header";
// TODO use profile icon from export
import { CgProfile } from 'react-icons/cg';

const transactions = [...Array(6).keys()];
const accounts = [45, 350, 120, 95];

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Device>
				<Flex sx={{ flexDirection: 'column' }}>
				<Header	/>
				<Box>
					<Heading as="h2" sx={{ fontSize: 2 }} mb={4} px={4}>Morning Lee</Heading>
					<Heading as="h2" sx={{ textTransform: 'uppercase', fontSize: 0 }} px={4}>Your account</Heading>
					<Box sx={{ overflow: 'auto', width: '100%' }} px={4} pt={3} pb={32}>
						<Flex as="ul" sx={{ listStyle: 'none' }} p={0}>
							{accounts.map((sum, i) => (
								<Box
									key={i}
									as="li"
									sx={{
										p: 0,
										mr: 3,
										width: 132,
										flexShrink: 0,
									}}
								>
									<Button
										sx={{
											background: theme.gradient,
											display: 'flex',
											flexDirection: 'column',
											height: 54,
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
				</Box>
				<Box px={4}>
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
