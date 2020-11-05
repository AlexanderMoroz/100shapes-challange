import React, { useMemo } from 'react';
import { RouteComponentProps } from 'react-router';
import { Flex, Heading } from 'theme-ui';
import { AnimateSharedLayout } from 'framer-motion';
import Header from "../header";
import ActiveCard from '../activeCard';
import Cards from '../cards';
import { cards, transactions } from "../../mock";
import Transactions from '../transactions';
import Footer from '../footer';

interface MatchParams {
	id: string;
}

const Home: React.FunctionComponent<RouteComponentProps<MatchParams>> = ({ match }) => {
	const { id } = match.params;
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