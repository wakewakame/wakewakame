import { useState } from 'react';
import styled from 'styled-components';
import { Timeline } from './Timeline';
import { About } from './About';
import { NotFound } from './NotFound';
import { Work } from './Types';

const Div = styled.div`
	width: 100vw;
`;

const CenterDiv = styled.div`
	text-align: center;
	width: min(1280px, 80vw);
	margin: auto;
`;

const Buttons = styled.div`
	margin-top: min(24px, 3.75vw);
	margin-bottom: min(36px, 5.625vw);
`;

const Button = styled.div<{primary: boolean}>`
	cursor: pointer;
	padding: min(4px, 0.625vw) min(20px, 3.125vw);
	border-radius: min(10px, 1.5625vw);
	display: inline;
	font-size: min(36px, 5.625vw);
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
