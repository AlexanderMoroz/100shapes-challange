import React, { useMemo, useState } from 'react';
import { ThemeProvider, Flex, Heading } from 'theme-ui';
import { AnimateSharedLayout } from 'framer-motion';
import theme from './theme';
import Header from './components/header';
import Footer from './components/footer';
import { cards, transactions } from './mock';
import Cards from './components/cards';
import ActiveCard from './components/activeCard';
import Transactions from './components/transactions';

const App: React.FunctionComponent = () => {
	const [cardId, setCardId] = useState<number |  null>(null);
	const activeCard = useMemo(() => cards.find(a => a.id === cardId), [cardId]);

	return (
		<ThemeProvider theme={theme}>
			<Flex sx={{ flexDirection: 'column', position: 'relative', pb: 84, overflow: 'hidden' }}>
				<Header onBackClick={() => setCardId(null)}	/>
				<AnimateSharedLayout type="crossfade">
					<ActiveCard card={activeCard} />
					<Heading as="h2" sx={{ fontSize: 2 }} mb={5} px={5}>Morning Lee</Heading>
					<Heading as="h2" sx={{ fontSize: 1 }} px={5}>Your accounts</Heading>
					<Cards cards={cards} onCardClick={setCardId} />
				</AnimateSharedLayout>
				<Transactions active={!!activeCard} transactions={transactions} />
				<Footer activeCard={activeCard} />
			</Flex>
		</ThemeProvider>
	);
};

export default App;