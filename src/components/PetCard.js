import "../styles/pet.css"
import noPhoto from "../assets/img/no_photo.png"

import { Link } from "react-router-dom"

export default function Pet(props) {

    const pet_data = props.Pet

    return (
        <article className="pet-card">
            <Link className="pet-link" to={`/pets/${pet_data.id}`} state={{pet: pet_data}}>
                {pet_data.photo? 
                    <img src={`${pet_data.photo}`} alt="pet" className="pet-image"/> :
                    <img src={noPhoto} alt="pet" className="pet-image"/>
                }
                <span className="pet-name">{pet_data.name}</span>
                <span className="pet-birthday">{pet_data.birthday}</span>
            </Link>
            <button className="btn-pet-schelude">AGENDAR</button>
        </article>
    )
}        

