import React from 'react';
import styled from 'styled-components';
import { Work } from '../Types';
import { Tweet } from 'react-twitter-widgets';
import HydrangeaJSVideo from '../../contents/HydrangeaJS.mp4';
import HydrangeaJSImage from '../../contents/HydrangeaJS.png';

const Div = styled.div`
	text-align: left;
`

const Video = styled.video`
	width: 80%;
	margin: auto;
`;

const H1 = styled.h1`
	font-size: 36px;
`;

const P = styled.p`
	font-size: 24px;
`;

const HydrangeaJSContent: React.FC = () => {
	return (
		<Div>
			<div style={{textAlign: "center"}}>
				<Video autoPlay={true} muted loop>
					<source src={HydrangeaJSVideo}/>
				</Video>
				<P>
					デモ: <a href="https://wakewakame.github.io/HydrangeaJS/">https://wakewakame.github.io/HydrangeaJS/</a><br/>
					リポジトリ: <a href="https://github.com/wakewakame/HydrangeaJS">https://github.com/wakewakame/HydrangeaJS</a>
				</P>
			</div>
			<br/>
			<P>
				大学3年のときに作成した、WebGLベースのGUIフレームワークです。
				<br/><br/>
				<a href="https://github.com/wakewakame/AudioNode">AudioNode</a>の開発でGUI部分のコードが巨大になりすぎたため、
				GUIは個別に作ることにしました。
				その時にできたのがこのフレームワークです。
			</P>
			<br/>
			<H1>関連ツイート</H1>
			<Tweet tweetId={"1175426469339656192"} options={{ align: "center" }}/>
			<Tweet tweetId={"1178240029987991553"} options={{ align: "center" }}/>
		</Div>
	);
};

export const HydrangeaJS: Work = {
	title: "HydrangeaJS",
	date:  "2019/10/15",
	thumbnail: HydrangeaJSImage,
	description: "WebGLで開発したGUIフレームワークです",
	content: HydrangeaJSContent,
};
