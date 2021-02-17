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
	font-size: min(36px, 7vw);
`;

const P = styled.p`
	font-size: min(24px, 5vw);
	margin-top: 4px;
	margin-bottom: 40px;
`;

const A = styled.a`
	word-break: break-all;
`;

const HydrangeaJSContent: React.FC = () => {
	return (
		<Div>
			<div style={{textAlign: "center"}}>
				<Video autoPlay={true} muted loop>
					<source src={HydrangeaJSVideo}/>
				</Video>
				<P>
					デモ: <A href="https://wakewakame.github.io/HydrangeaJS/">https://wakewakame.github.io/HydrangeaJS/</A><br/>
					リポジトリ: <A href="https://github.com/wakewakame/HydrangeaJS">https://github.com/wakewakame/HydrangeaJS</A>
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
			<Tweet tweetId={"1178240029987991553"} options={{ align: "center" }}/>
			<Tweet tweetId={"1175426469339656192"} options={{ align: "center" }}/>
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
