import styled from 'styled-components';

const Div = styled.div`
	width: 100vw;
`;

const CenterDiv = styled.div`
	text-align: left;
	width: min(1280px, 80vw);
	margin: auto;
	font-size: 24px;
`;

export const About: React.FC = () => {
	return (
		<Div>
			<CenterDiv>
				<p>1999年に生まれる</p>
				<p>小学5年生のころに父に買ってもらった本でHSPを勉強する</p>
				<p>高校2年 C/C++に入門する</p>
				<p>高校3年 うんたらかんたら</p>
				<p>大学1年 うんたらかんたら</p>
				<p>大学2年 うんたらかんたら</p>
				<p>大学3年 うんたらかんたら</p>
			</CenterDiv>
		</Div>
	);
};
