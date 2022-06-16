import { buttonType , buttonSize} from "./theme"

function Button({size,type,children, handleClick}){

    //Combine all classnames from props specified
    const className=[buttonSize[size], buttonType[type]].join(" ")


    return(
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button