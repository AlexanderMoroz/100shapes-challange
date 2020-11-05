import React, { useMemo } from 'react';
import Header from "../header";
import { AnimateSharedLayout } from 'framer-motion';
import ActiveCard from '../activeCard';
import { Flex, Heading } from 'theme-ui';
import Cards from '../cards';
import { cards, transactions } from "../../mock";
import Transactions from '../transactions';
import Footer from '../footer';

const Home: React.FunctionComponent<{ match: any }> = ({ match }) => {
	let { id } = match.params;
	const activeCard = useMemo(() => cards.find(a => a.id === Number(id)), [id]);

	return (
		<Flex sx={{ flexDirection: 'column', position: 'relative', pb: 84, overflow: 'hidden' }}>
			<Header	/>
			<AnimateSharedLayout type="crossfade">
				<ActiveCard card={activeCard} />
				<Heading as="h2" sx={{ fontSize: 2 }} mb={5} px={5}>Morning Lee</Heading>
				<Heading as="h2" sx={{ fontSize: 1 }} px={5}>Your accounts</Heading>
				<Cards cards={cards} />
			</AnimateSharedLayout>
			<Transactions active={!!activeCard} transactions={transactions} />
			<Footer activeCard={activeCard} />
		</Flex>
	)
};

export default Home;