import React from 'react';
import styled from 'styled-components';
import { Work } from '../Types';
import { Tweet } from 'react-twitter-widgets';
import Youtube from 'react-youtube';
import SoundGoogleMapImage from '../../contents/SoundGoogleMap.jpg';

const Div = styled.div`
	text-align: left;
`

const H1 = styled.h1`
	font-size: 36px;
`;

const P = styled.p`
	font-size: 24px;
`;

const SoundGoogleMapContent: React.FC = () => {
	return (
		<Div>
			<div style={{textAlign: "center"}}>
				<Youtube videoId="0ZR4q2ALdIM"/>
				<P>
					動画: <a href="https://www.youtube.com/watch?v=0ZR4q2ALdIM">https://www.youtube.com/watch?v=0ZR4q2ALdIM</a><br/>
					リポジトリ: <a href="https://github.com/wakewakame/SoundGoogleMap">https://github.com/wakewakame/SoundGoogleMap</a>
				</P>
			</div>
			<br/>
			<P>
				大学3年のときに作成した、Google Mapが音に合わせて踊るようになるChromeの拡張機能です。
			</P>
			<br/>
			<H1>仕組み</H1>
			<P>
				Google Mapの3D機能はWebGLで実装されています。
				そのため、頂点シェーダをコンパイルしている関数をフックすることで、建物を好きな形に変形することができます。
				<br/><br/>
				また、Google Mapのソースコードは週に1回以上は更新されるようです。
				さらにこのソースコードは軽量化のためか、ほとんどの変数名や関数名がランダムな文字列となっています。
				そのため、フックをする関数の場所は正規表現を用いて判別しています。
				かなり無理矢理な方法のため、いつ動かなくなるかわかりません。
				<br/><br/>
				詳しい仕組みはGitHubの<a href="https://github.com/wakewakame/SoundGoogleMap">README</a>に書いてあります。
			</P>
			<br/>
			<H1>関連ツイート</H1>
			<Tweet tweetId={"1157966041361682433"} options={{ align: "center" }}/>
			<Tweet tweetId={"1157967548496789506"} options={{ align: "center" }}/>
			<Tweet tweetId={"1155143279249199105"} options={{ align: "center" }}/>
			<Tweet tweetId={"1206596574760976386"} options={{ align: "center" }}/>
		</Div>
	);
};

export const SoundGoogleMap: Work = {
	title: "SoundGoogleMap",
	date:  "2019/08/04",
	thumbnail: SoundGoogleMapImage,
	description: "Google Mapが音に合わせて踊るようになるChromeの拡張機能です",
	content: SoundGoogleMapContent,
};
