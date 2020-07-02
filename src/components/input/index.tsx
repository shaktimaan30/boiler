import * as React from "react";
import { INPUT_SIZE } from '../../core/constants/app';
import { inputRegular, inputLarge, inputSmall, inputXSmall, inputPrimary, inputBody, errorMsg, } from './styles';
import { CSSProperties } from 'typestyle/lib/types';

type TInputField = {
    size: INPUT_SIZE;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    value: string;
    customCss?: CSSProperties;
}

const InputField: React.FC<TInputField> = (props: TInputField) => {
    let inputSize = inputRegular;

    switch (props.size) {
        case INPUT_SIZE.LARGE:
            inputSize = inputLarge;
            break;
        case INPUT_SIZE.SMALL:
            inputSize = inputSmall;
            break;
        case INPUT_SIZE.XSMALL:
            inputSize = inputXSmall;
            break;
    }

    return (
        <div className={inputBody}>
            <input className={`${inputPrimary(errorMsg.length > 0 ? true : false)} ${props.customCss} ${inputSize}`} type={"text"} placeholder={props.placeholder} onChange={(e) => props.onChange(e)} value={props.value} />
            {props.error && <div className={errorMsg}>{props.error}</div>}
        </div>
    );
}

export default InputField