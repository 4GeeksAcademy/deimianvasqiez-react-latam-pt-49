export const Card = (props) => {
    const { cardDetail } = props
    const { image, title, description } = cardDetail


    return (
        <div
            className="col-12 col-sm-6 col-md-4 card mb-3 CardList__my-personal-card px-3">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}