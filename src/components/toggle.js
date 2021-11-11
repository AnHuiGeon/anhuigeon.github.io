import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import GlobalContextProvider from '../context/GlobalContextProvider';

const Toggle = ({ themeHookCallback }) => {
    const theme = useContext(GlobalContextProvider);
    const [check, setCheck] = useState(false)
    useEffect(() => {
        if(theme == 'dark'){
            setCheck(true)
        }else{
            setCheck(false)
        }
    }, [theme])

    return(
        <Switch>
          <ChildInput
          checked= {check}
          onChange={themeHookCallback}
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
const Switch = styled.label`
    position: fixed;
    z-index: 2;
    top: 15px;
    right: 20px;
    display: block;
    width: 50px;
    height: 25px;
`;
const ChildInput = styled.input.attrs({ type: 'checkbox' })`
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