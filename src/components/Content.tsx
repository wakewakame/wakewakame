import { useParams } from 'react-router-dom';
import { NotFound } from './NotFound';
import { Work } from './Types';

export const Content: React.FC<{ works: Work[] }> = props => {
	const { id } = useParams<{id: string}>();
	const workFind = props.works.filter(t => t.title == id);
	if (workFind.length != 1) return <NotFound/>;
	const work = workFind[0];

	return <h1>content {work.title}</h1>;
};
