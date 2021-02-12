import { useState } from 'react';
import styled from 'styled-components';
import { Timeline } from './Timeline';
import { About } from './About';
import { NotFound } from './NotFound';
import { Work } from './Types';

const Div = styled.div`
	width: 100vw;
	margin-bottom: min(300px, 18.75vw);
`;

const CenterDiv = styled.div`
	text-align: center;
	width: min(1280px, 80vw);
	margin: auto;
`;

const Buttons = styled.div`
	margin-top: 72px;
	margin-bottom: 72px;
`;

const Button = styled.div<{primary: boolean}>`
	padding: 10px 30px;
	margin: 0px 20px;
	border-radius: 30px;
	display: inline;
	font-weight: bold;
	font-size: 36px;
	border: solid #575757;
	border-width: 3px;
	${({primary}) => primary ? `
		background: #575757;
		color: #f6f6f6;
	` : `
		background: #0000;
		color: #575757;
	`};
`;

export const Main: React.FC<{ works: Work[] }> = props => {
	type ViewType = 'works' | 'about';
	const [ view, setView ] = useState<ViewType>('works');

	const viewWorks = () => { setView('works'); }
	const viewAbout = () => { setView('about'); }

	return (
		<Div>
			<CenterDiv>
				<Buttons>
					<Button primary={ view == 'works' } onClick={ viewWorks }>Works</Button>
					<Button primary={ view == 'about' } onClick={ viewAbout }>About</Button>
				</Buttons>
				{
					(view == 'works') ? <Timeline works={ props.works }/> :
					(view == 'about') ? <About/> :
					<NotFound/>
				}
			</CenterDiv>
		</Div>
	);
};
