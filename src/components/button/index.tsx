import * as React from "react";
import { BUTTON_TYPE, BUTTON_SIZE } from '../../core/constants/app';
import { btnRegular, btnPrimary, btnLarge, btnSmall, btnXSmall, btn } from './styles';
import { CSSProperties } from 'typestyle/lib/types';

type TButton = {
    onClick: () => void;
    text: string;
    type: BUTTON_TYPE;
    size: BUTTON_SIZE;
    disabled: boolean;
    customCss?: CSSProperties;
}

const Button: React.FC<TButton> = (props: TButton) => {
    let btnSize = btnRegular;
    let btnType = btnPrimary;

    switch (props.size) {
        case BUTTON_SIZE.LARGE:
            btnSize = btnLarge;
            break;
        case BUTTON_SIZE.SMALL:
            btnSize = btnSmall;
            break;
        case BUTTON_SIZE.XSMALL:
            btnSize = btnXSmall;
            break;
    }

    switch (props.type) {
        case BUTTON_TYPE.PRIMARY:
            btnType = btnPrimary;
            break;
    }

    return (
        <div
            onClick={() => {
                !props.disabled && props.onClick();
            }}
            className={`${btnSize} ${props.customCss} ${btn} ${btnType(props.disabled)}`}
        >
            {props.text}
        </div>
    );
};

export default Button;  