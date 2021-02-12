import { Link } from 'react-router-dom';
import { Work } from './Types';
import styled from 'styled-components';

const Div = styled.div`
	display: block;
	width: 360px;
	height: 360px;
	display: block;
	padding: 20px;
	padding-bottom: 0px;
	overflow: hidden;
`;

const Thumbnail = styled(Link)<{img: string}>`
	display: block;
	background-image: url(${({img}) => img});
	background-size: 100%;
	height: 202px;
	margin: 4px 0px;
`;

const DescDiv = styled.div`
	display: block;
	text-align: left;
	padding: 0px 4px;
	box-sizing: border-box;
`;

const Title = styled(Link)`
	display: inline;
	color: #575757;
	font-weight: bold;
	font-size: 28px;
	text-decoration: none;
`;

const Date = styled.p`
	margin: 0px;
	font-size: 20px;
	color: #777;
`;

const Desc = styled.p`
	margin: 0px;
	font-size: 20px;
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
