import { TimelineItem } from './TimelineItem';
import { Work } from './Types';

export const Timeline: React.FC<{ works: Work[] }> = props => {
	return (
		<div>
		{
			props.works.map((work, index) => (
				<TimelineItem work={work} key={index}/>
			))
		}
		</div>
	);
};
