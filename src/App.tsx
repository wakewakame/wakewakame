import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from './components/Home';
import { Content } from './components/Content';
import { NotFound } from './components/NotFound';
import { Work } from './components/Types';
import HeaderSvg from './contents/header.svg';
import TestImg from './contents/test.jpg';

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
			content: desc
		};
		return work;
	};

	const works: Work[] = [
		createWork("ポートフォリオ", "2021/02/13", "このサイト"),
		createWork("GravityDesktop", "2020/02/13", "デスクトップ上のアイコンが落下します"),
		createWork("GravityDesktop2", "20XX/02/13", "GravityDesktopの後継です"),
		createWork("HydrangeaJS", "2021/XX/13", "WebGLを用いた自作UIフレームワークです"),
		createWork("AudioNode", "2021/02/XX", "ノードベースで音声処理を行うサイトです"),
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
