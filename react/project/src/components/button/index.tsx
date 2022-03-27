import React from "react";
import style from './Button.module.scss'


//props Text
class Button extends React.Component {

    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}
export default Button;