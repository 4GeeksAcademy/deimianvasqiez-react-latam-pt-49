export const TitleMain = (props) => {
    // podemos hacer javascript
    const {
        style,
        title,
        deimian } = props

    return (
        <>
            <h1 className={style}>{title} {deimian}</h1>
        </>
    )
}

// properti son objetos


/*
    let obj = {
        name: "Deimian",
        lastname: "Vásquez"
    }

    obj.name
    obj["name"]
*/


