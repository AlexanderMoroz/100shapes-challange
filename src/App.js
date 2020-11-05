import React, { useMemo, useRef, useState } from "react";
import { ThemeProvider, Flex, Heading } from 'theme-ui';
import { AnimateSharedLayout } from "framer-motion"
import theme from './theme';
import Header from './components/header';
import Footer from './components/footer';
import { cards, transactions } from "./mock";
import Cards from "./components/cards";
import ActiveCard from "./components/activeCard";
import Transactions from "./components/transactions";

const App = () => {
	const [cardId, setCardId] = useState(null);
	const wrapperRef = useRef(null);
	const activeCard = useMemo(() => cards.find(a => a.id === cardId), [cardId]);

	return (
		<ThemeProvider theme={theme}>
			<Flex sx={{ flexDirection: 'column', position: 'relative', pb: 84 }} ref={wrapperRef}>
				<Header onBackClick={() => setCardId(null)}	/>
				<AnimateSharedLayout type="crossfade">
					<ActiveCard card={activeCard} />
					<Heading as="h2" sx={{ fontSize: 2 }} mb={4} px={4}>Morning Lee</Heading>
					<Heading as="h2" sx={{ textTransform: 'uppercase', fontSize: 0 }} px={4}>Your card</Heading>
					<Cards cards={cards} onCardClick={setCardId} />
				</AnimateSharedLayout>
				<Transactions active={!!activeCard} transactions={transactions} />
				<Footer activeCard={activeCard} />
			</Flex>
		</ThemeProvider>
	);
};

export default App;
