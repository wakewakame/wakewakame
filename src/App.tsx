import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from './components/Home';
import { Content } from './components/Content';
import { NotFound } from './components/NotFound';
import { Work } from './components/Types';
import HeaderSvg from './contents/header.svg';
import TestImg from './contents/test.jpg';
import { AudioNode } from './components/items/AudioNode';

const Div = styled.div`
	background-image: url(${HeaderSvg});
	background-size: 100%;
`;

export const App: React.FC = () => {
	const createWork = (title: string, date: string, desc: string) => {
		const work: Work = {
			title: title,
			date: date,
			thumbnail: TestImg,
			description: desc,
			content: () => (<div></div>),
		};
		return work;
	};

	const works: Work[] = [
		AudioNode,
		createWork("HydrangeaJS", "2019/10/15", "WebGLで開発したGUIフレームワークです"),
		createWork("SoundGoogleMap", "2019/08/04", "Google Mapを改造して音に合わせて踊るようにしました"),
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
