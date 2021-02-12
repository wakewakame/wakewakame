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
	margin-top: 24px;
	margin-bottom: 72px;
`;

const Button = styled.div<{primary: boolean}>`
	padding: 4px 20px;
	border-radius: 10px;
	display: inline;
	font-size: 36px;
	font-weight: bold;
	${({primary}) => primary ? `
		color: #575757;
	` : `
		color: #57575780;
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
					<Button primary={ view == 'works' } onClick={ viewWorks }>作品</Button>
					<Button primary={ view == 'about' } onClick={ viewAbout }>プロフィール</Button>
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
