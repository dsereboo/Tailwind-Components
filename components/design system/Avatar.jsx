import { avatarSize } from "./theme"


function Avatar({size,src}){

 
    const className=avatarSize[size]

    return(
        <img src={`${src}`} alt="user avatar" className={className}/>
    )
}

export default Avatar