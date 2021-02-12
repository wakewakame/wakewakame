import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link, useParams, useHistory } from 'react-router-dom';
import './App.css';

type Work = {
	title: string,
	date: string,
	thumbnail: string,
	description: string,
	content: string,
};

const NotFound: React.FC = () => { return <h1>not found</h1>; }

const TimelineItem: React.FC<{ work: Work }> = props => {
	const history = useHistory();
	const jump = () => {
		history.push('/contents/' + props.work.title);
	}

	return (
		<div onClick={ jump } style={{ 'cursor': 'pointer' }}>
			<h1>{ props.work.title }</h1>
		</div>
	);
}

const Timeline: React.FC<{ works: Work[] }> = props => {
	return (
		<div>
		{
			props.works.map((work, index) => (
				<TimelineItem work={work} key={index}/>
			))
		}
		</div>
	);
}

const About: React.FC = () => { return <h1>about</h1>; }

const Header: React.FC = () => { return <h1>header</h1>; }
const Main: React.FC<{ works: Work[] }> = props => {
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
}

const Home: React.FC<{ works: Work[] }> = props => {
	return (
		<div>
			<Header/>
			<Main works={ props.works }/>
		</div>
	);
}
const Content: React.FC<{ works: Work[] }> = props => {
	const { id } = useParams<{id: string}>();
	const workFind = props.works.filter(t => t.title == id);
	if (workFind.length != 1) return <NotFound/>;
	const work = workFind[0];

	return <h1>content {work.title}</h1>;
}

function App() {
	const createWork = (title: string) => {
		const work: Work = {
			title: title,
			date: "",
			thumbnail: "",
			description: "",
			content: "",
		};
		return work;
	};

	const works: Work[] = [
		createWork("work1"),
		createWork("work2"),
		createWork("work3"),
	];

	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={ () => <Home works={ works }/> }/>
					<Route path="/contents/:id" component={ () => <Content works={ works }/> }/>
					<Route component={ NotFound }/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
