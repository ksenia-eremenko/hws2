import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
    setColor?: (color: string) => void
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        setColor,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    const onChangeHandler = () => {
        console.log(xType);
        if (!xType) {
            setColor?.('violet')
        } else if (xType === 'red') {
            setColor?.('red')
        } else if (xType === 'secondary') {
            setColor?.('blue')
        }

    }
    const finalClassName = s.button
        + (xType === 'red' ? ' ' + s.red : '')
        + (!xType ? ' ' + s.default : '') 
        + (xType === 'disabled' ? ' ' + s.disabled : '') 
        + (xType === 'secondary' ? ' ' + s.secondary : '') 

    return (
        <button
            onClick={onChangeHandler}
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
