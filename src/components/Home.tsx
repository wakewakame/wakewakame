import { Header } from './Header';
import { Main } from './Main';
import { Work } from './Types';

export const Home: React.FC<{ works: Work[] }> = props => {
	return (
		<div>
			<Header/>
			<Main works={ props.works }/>
		</div>
	);
};
