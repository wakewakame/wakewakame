import { Link } from 'react-router-dom';
import { Work } from './Types';
import styled from 'styled-components';

const Div = styled.div`
	display: block;
	width: min(360px, 80vw);
	height: min(360px, 80vw);
	display: block;
	overflow: hidden;
`;

const Thumbnail = styled(Link)<{img: string}>`
	display: block;
	background-image: url(${({img}) => img});
	background-size: 100%;
	height: min(202px, 45vw);
	margin: min(4px, 0.625vw) 0px;
`;

const DescDiv = styled.div`
	display: block;
	text-align: left;
	padding: 0px min(4px, 0.625vw);
	box-sizing: border-box;
`;

const Title = styled(Link)`
	display: inline;
	color: #575757;
	font-weight: bold;
	font-size: min(28px, 6.5625vw);
	text-decoration: none;
`;

const Date = styled.p`
	margin: 0px;
	font-size: min(20px, 4.6875vw);
	color: #777;
`;

const Desc = styled.p`
	margin: 0px;
	font-size: min(20px, 4.6875vw);
	color: #575757;
`;

export const TimelineItem: React.FC<{ work: Work }> = props => {
	const url = "/contents/" + props.work.title;
	return (
		<Div>
			<DescDiv>
				<Title to={ url }>{ props.work.title }</Title>
			</DescDiv>
			<Thumbnail img={ props.work.thumbnail } to={ url }/>
			<DescDiv>
				<Date>{ props.work.date }</Date>
				<Desc>{ props.work.description }</Desc>
			</DescDiv>
		</Div>
	);
};
