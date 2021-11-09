import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import GlobalContextProvider from '../context/GlobalContextProvider';
// import React, { useEffect, useState } from 'react'

const Toggle = () => {
    const [theme, setTheme] = useContext(GlobalContextProvider);
    const colorHandler = ({target}) => {
        if(target.checked){
            setTheme('dark')
            localStorage.setItem('theme','dark')
        }else{
            setTheme('light')
            localStorage.setItem('theme','light')
        }
    }
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    }, [theme]);

    return(
        <Switch>
          <ChildInput
          defaultChecked={theme === 'dark' ? true:false}
          onChange={(e) => colorHandler(e)}
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


    /* 세이브 ======================================= 포인트 */
    // const [preferColor, setPreferColor] = useState(true);
    // const colorHandler = ({target}) => {
    //     if (target.checked == false && preferColor == true) {
    //         setPreferColor(true);
    //     } else {
    //         setPreferColor(false);
    //     }
    //     console.log('핸들러 이벤트 실행됨:',preferColor)
    // };
    // useEffect(() => {
    //     if (preferColor == 'dark') {
    //         document.documentElement.classList.add('dark');
    //         console.log('useEffect거쳐서 class변환 > if', preferColor)
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //         console.log('useEffect거쳐서 class변환 > if', preferColor)
    //     }
    //     console.log('useEffect거쳐서 class변환', preferColor)
    // }, [preferColor]);
    // useEffect(() => {
    //     console.log('단한번만 실행:',preferColor)
    //     setPreferColor(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    //     console.log('effect > preferColor:', preferColor)
    //     if (preferColor == 'dark') {
    //         document.documentElement.classList.add('dark');
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //     }
    // }, [])
    /* 세이브 ======================================= 포인트 */