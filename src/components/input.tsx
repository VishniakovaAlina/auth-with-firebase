import React, {FC} from "react";

import "./input.scss";

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { error?: string | string[]}

const Input: FC<InputProps> = (props) => {
    return <div className="input__container">
        <input {...props} className={props.error ? `${props.className} input input-error` : `input ${props.className}`}/>
        {props.error && <span className="error">{props.error}</span>}
    </div>
};

export default Input;