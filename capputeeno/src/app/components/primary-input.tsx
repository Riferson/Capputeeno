import styled from "styled-components";
import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes } from "react";

interface InputPorps extends InputHTMLAttributes<HTMLInputElement> {

}

export const PrimaryInput = styled.input`
    width: 352px;
    border-radius: 8px;
    background-color: var(--bg-secondary);
    padding: 10px 16px;
    font-family: inherit;
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--text-dark);
    border: none;
`
const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`



export function PrimaryIconWSearchIcon(props: InputPorps) {
    return(
        <InputContainer>
            <PrimaryInput {...props}/>
            <SearchIcon/>
        </InputContainer>
    )
}