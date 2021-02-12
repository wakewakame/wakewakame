import { useState } from 'react';
import { Timeline } from './Timeline';
import { About } from './About';
import { NotFound } from './NotFound';
import { Work } from './Types';

export const Main: React.FC<{ works: Work[] }> = props => {
	type ViewType = 'works' | 'about';
	const [ view, setView ] = useState<ViewType>('works');

	const viewWorks = () => { setView('works'); }
	const viewAbout = () => { setView('about'); }

	return (
		<div>
			<button onClick={viewWorks}>workd</button>
			<button onClick={viewAbout}>about</button>
			{
				(view == 'works') ? <Timeline works={ props.works }/> :
				(view == 'about') ? <About/> :
				<NotFound/>
			}
		</div>
	);
};
