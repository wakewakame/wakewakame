import { TimelineItem } from './TimelineItem';
import { Work } from './Types';
import Youtube from 'react-youtube';
import styled from 'styled-components';

const Div = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(360px, 56.25vw), max-content));
	grid-gap: min(36px, 5.625vw);
	justify-content: center;
	padding: initial;
`;

const H1 = styled.h1`
	color: #575757;
	font-size: min(36px, 4.5vw);
	text-align: left;
	
`;

const WYoutube = styled(Youtube)`
	width: min(1280px, 80vw);
	height: min(720px, 45vw);
`;

export const Timeline: React.FC<{ works: Work[] }> = props => {
	return (
		<div>
			<H1>2009年 から 2019年 まで</H1>
			<WYoutube videoId="P8kGctoc2f4"/>
			<br/><br/>
			<H1>2019年 から</H1>
			<Div>
				{
					props.works.map((work, index) => (
						<TimelineItem work={work} key={index}/>
					))
				}
			</Div>
		</div>
	);
};
