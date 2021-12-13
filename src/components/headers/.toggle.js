import React, { useContext } from 'react'
import styled from 'styled-components';
import GlobalContextProvider from '../../context/GlobalContextProvider';

const Toggle = () => {
	const theme = useContext(GlobalContextProvider);

	return (
		<>
			<Switch2 bgc={theme}>
				<ChildButton
					onClick={e =>{
						window.__setPreferredTheme(
						theme === 'light'?'dark':'light'
					)}}
				/>
				<ChildSpan bgc={theme}/>
			</Switch2>
		</>
	)
};
const ChildSpan = styled.span`
position: fixed;
content: "";
margin-top: 1px;
margin-left: 1px;
height: 18px;
width: 18px;
background-color: #fff;
// -webkit-transition: .4s;
// transition: .4s;
border-radius: 50%;
${props => props.bgc === 'dark' ? 'transform: translateX(23px)' : 'translateX(0px)'};
`;
const Switch2 = styled.label.attrs({ htmlFor: 'toggleBtn'})`
position: fixed;
z-index: 15;
top: 15px;
right: 20px;
display: block;
width: 50px;
height: 20px;
border-radius: 25px;
${props => props.bgc === 'dark' ? 'background-color: #2196F3' : 'background-color: #aaa'};
`;
const ChildButton = styled.input.attrs({ type: 'button', id: 'toggleBtn' })`
opacity: 0;
width: 0;
height: 0;
`;
export default Toggle;