
export const EnlaceMenu = ({ imagen, titulo }) => {
    return(
        <a className="enlace-menu" href="">
            <img src={ imagen } alt={ titulo } />
            <span>{ titulo }</span>
        </a>
    )
}