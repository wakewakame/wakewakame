import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from './components/Home';
import { Content } from './components/Content';
import { NotFound } from './components/NotFound';
import { Work } from './components/Types';
import HeaderSvg from './contents/header.svg';
import { AudioNode } from './components/items/AudioNode';
import { HydrangeaJS } from './components/items/HydrangeaJS';
import { SoundGoogleMap } from './components/items/SoundGoogleMap';

const Div = styled.div`
	background-image: url(${HeaderSvg});
	background-size: 100%;
`;

export const App: React.FC = () => {
	const works: Work[] = [
		AudioNode,
		HydrangeaJS,
		SoundGoogleMap,
	];

	return (
		<Div>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path="/" component={ () => <Home works={ works }/> }/>
					<Route path="/contents/:id" component={ () => <Content works={ works }/> }/>
					<Route component={ NotFound }/>
				</Switch>
			</BrowserRouter>
		</Div>
	);
};
