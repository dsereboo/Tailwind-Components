import { heroType , heroSize} from "./theme"

function Hero({size,type,children,}){

     //Combine all classnames from props specified
     const className=[heroSize[size], heroType[type]].join(" ")


    return(
        <section className={className}>
            {children}
        </section>
    )
}

export default Hero