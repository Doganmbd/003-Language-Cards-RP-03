import "./Card.css"
import { categories } from "../../assets/data"
import Item from "../Item/Item"

const Card = () => {

    console.log(categories);
    return (
        <div className="card-area-container">
            <div className="bars"></div>
            <h1 className="language-title">Languages</h1>
            <div className="cards-container"></div>
            {categories.map((categorie,index)=> {
                return(
                    <Item card={categorie} key={index} />
                )
            })}
        </div>
    )
}
export default Card