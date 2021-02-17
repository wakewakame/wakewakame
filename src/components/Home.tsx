import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Main } from './Main';
import { Work } from './Types';

export const Home: React.FC<{ works: Work[] }> = props => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div>
			<Header/>
			<Main works={ props.works }/>
		</div>
	);
};
