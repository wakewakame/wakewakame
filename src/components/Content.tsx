import { useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { NotFound } from './NotFound';
import { Work } from './Types';

const Div = styled.div`
	width: 100vw;
	margin-top: 10px;
`;

const CenterDiv = styled.div`
	text-align: center;
	width: min(1024px, 80vw);
	margin: auto;
`;

const Home = styled(Link)`
	display: block;
	text-align: left;
	font-size: 24px;
	text-decoration: none;
	color: #575757;
	font-weight: bold;
	margin-top: 40px;
`;

const Title = styled.div`
	display: block;
	text-align: left;
	font-size: 36px;
	color: #575757;
	font-weight: bold;
	margin: 10px 0px;
`;

const Desc = styled.div`
	display: block;
	text-align: left;
	font-size: 28px;
	color: #575757;
	margin: 10px 0px;
`;

const P = styled.p`
	margin: 0px;
`;

export const Content: React.FC<{ works: Work[] }> = props => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const { id } = useParams<{id: string}>();
	const workFind = props.works.filter(t => t.title == id);
	if (workFind.length != 1) return <NotFound/>;

	const work = workFind[0];

	const Content = work.content;

	return (
		<Div>
			<CenterDiv>
				<Home to='/'>{ "< Home" }</Home>
				<Title><P>{ work.title }</P></Title>
				<Desc><Content/></Desc>
			</CenterDiv>
		</Div>
	);
};
