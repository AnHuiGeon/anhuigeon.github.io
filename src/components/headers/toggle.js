import React from 'react'
import styled from 'styled-components';

const Toggle = (data) => {

	return (
		<>
			<Switch />
			<ChildInput
				checked={data.data === 'dark'}
				onChange={e => window.__setPreferredTheme(
					e.target.checked?'dark':'light'
				)}
			/>
			<ChildSpan />
		</>
	)
};
const ChildSpan = styled.span`
	z-index: 14;
	position: fixed;
	top: 15px;
	right: 20px;
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
const ChildInput = styled.input.attrs({ type: 'checkbox', id: 'toggleTag' })`
	display: none;
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
const Switch = styled.label.attrs({ htmlFor: 'toggleTag'})`
	position: fixed;
	z-index: 15;
	top: 15px;
	right: 20px;
	display: block;
	width: 50px;
	height: 20px;
`;
export default Toggle;