import "../../styles/components/CardList.css"
import { Card } from "./Card"

export const CardList = () => {

    const infoCards = [
        {
            image: "https://picsum.photos/id/237/300/300",
            title: "Uno",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, inventore nisi! Quis illo modi consequatur."
        },
        {
            image: "https://picsum.photos/id/237/300/300",
            title: "Dos",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, inventore nisi! Quis illo modi consequatur."
        },
        {
            image: "https://picsum.photos/id/237/300/300",
            title: "Tres",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, inventore nisi! Quis illo modi consequatur."
        },
        {
            image: "https://picsum.photos/id/237/300/300",
            title: "Tres",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, inventore nisi! Quis illo modi consequatur."
        },
    ]



    return (
        <div className="container">
            <div className="row">
                {
                    //escribimos el javascrip
                    /*
                        loops
                        map
                        filter
                        forEach
                        reduce

                        ternarios
                    */

                    infoCards.map((iterador, index) => {
                        return (
                            <Card
                                key={index}
                                cardDetail={iterador}
                            />
                        )
                    })

                }




            </div>
        </div>
    )
}

