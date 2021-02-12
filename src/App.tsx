import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from './components/Home';
import { Content } from './components/Content';
import { NotFound } from './components/NotFound';
import { Work } from './components/Types';
import HeaderSvg from './contents/header.svg';

const Div = styled.div`
	background-image: url(${HeaderSvg});
	background-size: 100%;
`;

export const App: React.FC = () => {
	const createWork = (title: string) => {
		const work: Work = {
			title: title,
			date: "",
			thumbnail: "",
			description: "",
			content: "",
		};
		return work;
	};

	const works: Work[] = [
		createWork("work1"),
		createWork("work2"),
		createWork("work3"),
	];

	return (
		<Div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={ () => <Home works={ works }/> }/>
					<Route path="/contents/:id" component={ () => <Content works={ works }/> }/>
					<Route component={ NotFound }/>
				</Switch>
			</BrowserRouter>
		</Div>
	);
};
