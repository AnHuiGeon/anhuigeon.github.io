import React, { useContext } from 'react'
import styled from 'styled-components';
import GlobalContextProvider from '../../context/GlobalContextProvider';

const Toggle = () => {
	const theme = useContext(GlobalContextProvider);

	return (
		<Switch>
			<ChildInput
				checked={theme === 'dark'}
				onChange={e => window.__setPreferredTheme(
					e.target.checked?'dark':'light'
				)}
			/>
			<ChildSpan />
		</Switch>
	)
};

const ChildSpan = styled.span`
	position: fixed;
	cursor: pointer;
	width: 50px;
	height: 20px;
	background-color: #aaa;
	-webkit-transition: .4s;
	transition: .4s;
	border-radius: 25px;
	&:before {
		position: fixed;
		content: "";
		margin-top: 1px;
		margin-left: 3px;
		height: 18px;
		width: 18px;
		background-color: #fff;
		-webkit-transition: .4s;
		transition: .4s;
		border-radius: 50%;
	}
`;
const Switch = styled.label.attrs({ htmlFor: 'toggleTag'})`
	position: fixed;
	z-index: 15;
	top: 15px;
	right: 20px;
	display: block;
	width: 50px;
	height: 25px;
`;
const ChildInput = styled.input.attrs({ type: 'checkbox', id: 'toggleTag' })`
	opacity: 0;
	width: 0;
	height: 0;
	&:checked + ${ChildSpan} {
		background-color: #2196F3;
	}
	&:focus + ${ChildSpan} {
		box-shadow: 0 0 1px #2196F3;
	}
	&:checked + ${ChildSpan}{
		&:before {
			-webkit-transform: translateX(26px);
			-ms-transform: translateX(26px);
			transform: translateX(26px);
		}
	}
`;
export default Toggle;