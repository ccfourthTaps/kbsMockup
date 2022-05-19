import React from 'react';
import Styled from 'styled-components';
import { CheckCircleOutlined } from '@ant-design/icons';

const ButtonCustom = Styled.button`
cursor: pointer;
font-size:14px;
border-radius:3px;
backgroubd: #ffffff
margin-bottom: ${props => props.marginBottom || '0'}
width: ${props => props.width}
heigth: ${props => props.height}
&:hover {
    border-color:black
}
${props => {
    if(props.type === 'approve'){
        return `
        &:hover {
            background-color: #52c41a;
            color: white;
        }
        border-color:#52c41a
        color: #52c41a
        `
    } else if(props.type === 'submit'){
        return `
        &:hover {
            background-color: #a9690f;
            color: white;
            border-color:black;
        }
        border-color:#a9690f
        color: #a9690f
        `
    } else {
        return `
        border-color:#000000
        color: #000000
        `
    }
}};
border 1px solid;
padding: 0.25em 1em;
transition: 0.5s all ease-out;
`

const _checkIcon = i => {
    switch (i){
        case 'approve':
            return (
                <span style={{marginRight:5}}>
                    <CheckCircleOutlined />
                </span>
            )
            case 'submit':
            return (
                <span style={{marginRight:5}}>
                    <CheckCircleOutlined />
                </span>
            )
            default:
                return false
    }
}

const Button = props => {
    <ButtonCustom
    type={props.type}
    onClick={props.onClick}
    height={props.height}
    width={props.width}
    marginBottom={props.marginBottom}
    disabled={props.disabled}
    >
        {_checkIcon(props.type)}
        {props.children}
    </ButtonCustom>
}

export default Button;