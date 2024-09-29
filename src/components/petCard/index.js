import './style.css';
import { Link } from "react-router-dom"
import noPhoto from "../../assets/img/no_photo.png"

export default function Pet(pet) {

    const pet_data = pet.Pet

    function formatDate(dateString) {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
      }

    return (
        <article className="pet-card">
            <Link className="pet-link" to={`/pets/${pet_data.id}`} state={{pet: pet_data}}>
                {pet_data.photo? 
                    (<img src={`${pet_data.photo}`} alt="pet" className="pet-image"/>) :
                    (<img src={noPhoto} alt="pet" className="pet-image"/>)
                }
                <span className="pet-name">{pet_data.name}</span>
                <span className="pet-birthday"> {pet_data.birthday ? formatDate(pet_data.birthday) : "Data não disponível"}</span>
            </Link>
        </article>
    )
}        
