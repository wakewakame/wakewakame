import styled from 'styled-components';
import ProfileImg from '../contents/profile.png';

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
	margin-top: min(115.2px, 19.2%);
	width: min(280px, 44%);
	height: min(280px, 44%);
`;

const Name = styled.p`
	font-weight: bold;
	font-size: min(40px, 6.25vw);
	margin-top: min(38.4px, 6%);
	margin-bottom: min(32.0px, 5%);
	color: #575757;
`;

const MyLinks = styled.div`
	padding-bottom: min(51.2px, 8%);
`;

const MyLink = styled.a`
	color: #575757;
	font-size: min(30px, 4.68vw);
	font-weight: bold;
	margin: 0px min(12.8px, 2%);
`;

export const Header: React.FC = () => {
	return (
		<Div>
			<CenterDiv>
				<Img src={ProfileImg}/>
				<Name>まみむめも</Name>
				<MyLinks>
					<MyLink href="https://github.com/wakewakame">GitHub</MyLink>
					<MyLink href="https://twitter.com/hu_123456">Twitter</MyLink>
					<MyLink href="https://www.youtube.com/channel/UC4nBE7iKiuUadBNqIYEaztA">YouTube</MyLink>
				</MyLinks>
			</CenterDiv>
		</Div>
	);
};
