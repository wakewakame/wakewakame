import React from 'react';
import styled from 'styled-components';
import { Work } from '../Types';
import { Tweet } from 'react-twitter-widgets';
import AudioNodeVideo from '../../contents/AudioNode.mp4';
import AudioNodeImage from '../../contents/AudioNode.png';

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

const AudioNodeContent: React.FC = () => {
	return (
		<Div>
			<div style={{textAlign: "center"}}>
				<Video autoPlay={true} muted loop>
					<source src={AudioNodeVideo}/>
				</Video>
				<P>
					デモ: <a href="https://wakewakame.github.io/AudioNode/dst/">https://wakewakame.github.io/AudioNode/dst/</a><br/>
					リポジトリ: <a href="https://github.com/wakewakame/AudioNode">https://github.com/wakewakame/AudioNode</a>
				</P>
			</div>
			<br/>
			<P>
				大学3年のときに作成した、ブラウザ上で動作する音声処理ソフトです。
				<br/><br/>
				ノードを繋げて音声を処理することができます。
				上の動画ではマイクの入力にローパスフィルターをかけて、その音をスピーカーから出力しています。
			</P>
			<br/>
			<H1>仕組み</H1>
			<P>
				複雑な音声処理をリアルタイムに実行するため、音声処理はGPU上で行っています。
				ブラウザからGPUの計算資源を利用するため、WebGLを利用しました。
				そのため、音声波形はWebGLのテクスチャとして管理されています。
				また、音声のフィルター処理はWebGLのフラグメントシェーダで行っています。
			</P>
			<br/>
			<H1>関連ツイート</H1>
			<Tweet tweetId={"1184850474404499462"} options={{ align: "center" }}/>
			<Tweet tweetId={"1188499265036804096"} options={{ align: "center" }}/>
			<Tweet tweetId={"1230670758730399744"} options={{ align: "center" }}/>
			<Tweet tweetId={"1231370136386334720"} options={{ align: "center" }}/>
		</Div>
	);
};

export const AudioNode: Work = {
	title: "AudioNode",
	date: "2019/10/27",
	thumbnail: AudioNodeImage,
	description:  "ブラウザ上で動作するノードベースの音声処理ソフトです",
	content: AudioNodeContent,
};
