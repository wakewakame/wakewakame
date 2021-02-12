import { useHistory } from 'react-router-dom';
import { Work } from './Types';

export const TimelineItem: React.FC<{ work: Work }> = props => {
	const history = useHistory();
	const jump = () => {
		history.push('/contents/' + props.work.title);
	}

	return (
		<div onClick={ jump } style={{ 'cursor': 'pointer' }}>
			<h1>{ props.work.title }</h1>
		</div>
	);
};
