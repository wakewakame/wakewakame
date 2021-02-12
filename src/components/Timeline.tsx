import { TimelineItem } from './TimelineItem';
import { Work } from './Types';
import styled from 'styled-components';

const Div = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(360px, max-content));
	grid-gap: 16px;
	justify-content: center;
	padding: initial;
`;

export const Timeline: React.FC<{ works: Work[] }> = props => {
	return (
		<Div>
		{
			props.works.map((work, index) => (
				<TimelineItem work={work} key={index}/>
			))
		}
		</Div>
	);
};
