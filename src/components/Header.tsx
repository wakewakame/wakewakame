import styled from 'styled-components';
import ProfileImg from '../contents/profile.jpg';

const Div = styled.div`
	width: 100vw;
`;

const CenterDiv = styled.div`
	text-align: center;
	width: min(1280px, 80vw);
	margin: auto;
	border-bottom: 2px;
	border-style: solid;
	border-color: #777;
`;

const Img = styled.img`
	border-radius: 50%;
	margin-top: min(115.2px, 15.36vw);
	width: min(280px, 35.2vw);
	height: min(280px, 35.2vw);
`;

const Name = styled.p`
	font-weight: bold;
	font-size: min(40px, 6.25vw);
	margin-top: min(38.4px, 4.8vw);
	margin-bottom: min(8.0px, 1vw);
	color: #575757;
`;

const Will = styled.p`
	font-size: min(20px, 3.12vw);
	margin-top: 0px;
	margin-bottom: min(32.0px, 4vw);
	color: #575757;
`;

const MyLinks = styled.div`
	padding-bottom: min(51.2px, 6.4vw);
`;

const MyLink = styled.a`
	color: #575757;
	font-size: min(30px, 4.68vw);
	margin: 0px min(12.8px, 1.6vw);
	display: inline-block;
`;

export const Header: React.FC = () => {
	return (
		<Div>
			<CenterDiv>
				<Img src={ProfileImg}/>
				<Name>Taiki Yoshii</Name>
				<Will>プログラマーになるのが夢です</Will>
				<MyLinks>
					<MyLink href="https://github.com/wakewakame">GitHub</MyLink>
					<MyLink href="https://twitter.com/hu_123456">Twitter</MyLink>
					<MyLink href="https://www.youtube.com/channel/UC4nBE7iKiuUadBNqIYEaztA">YouTube</MyLink>
					<MyLink href="https://com.nicovideo.jp/live/co2922418">ニコニコ生放送</MyLink>
				</MyLinks>
			</CenterDiv>
		</Div>
	);
};
