import "../styles/pet.css"
import SearchBar from "../components/SearchBar"
import PetCard from "../components/PetCard"
// import Switch from "@mui/material/Switch"

import { GRAPHQL_GET_PET_QUERY} from "../contexts/constants"

import { useState, useEffect } from "react"
import { useQuery, gql } from "@apollo/client";

export default function Pets() {

  const [text, setText] = useState("...Carregando, aguarde...");
  const [petList, setPetList] = useState([])
  const [loading, setLoading] = useState(true);
  //const [showInactive, setShowInactive] = useState(false);

  const { data, error } = useQuery(gql`${ GRAPHQL_GET_PET_QUERY}`)

  useEffect(() => {
      if (error) {
        setText(error.message);
        setLoading(false);
      }
      if (data && data.allPets) {
        setPetList(data.allPets);
        setLoading(false);
      }
  }, [error, data]);

  if (loading) return <div>{text}</div>;
  if (error) return <div className="error-message">Erro: {error.message}</div>;

  //const filteredPetList = showInactive ? petList : petList.filter(pet => pet.active);

  // if (!Array.isArray(filteredPetList) || filteredPetList.length === 0) {
  //   return <div>Não há pets disponíveis.</div>;
  // }

  return (
    <div className="content-pet">
      <div className="header-pet">
        <div className="header-pet-btn">
          <button className="btn-pet-add">+ ADICIONAR PET</button>
        </div>
        {/* <div className="header-pet-switch">
            <Switch checked={showInactive} onChange={() => setShowInactive(!showInactive)} />
            <span>Exibir inativos</span>
        </div> */}
        <div className="header-pet-search">
          <SearchBar placeholder="Pesquisar" />
        </div>
      </div>
      <hr className="separator"/>
      <section className="main-pets">
          {petList.map((p, index) => (
              <PetCard key={index} Pet={p}/>
                        ))}
      </section>
      <footer></footer>
    </div>
   )
}