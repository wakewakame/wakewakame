import { TimelineItem } from './TimelineItem';
import { Work } from './Types';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
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
