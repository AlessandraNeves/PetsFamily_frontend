import "../styles/pet.css";
import SearchBar from "../components/SearchBar";
import PetCard from "../components/PetCard";
import { GRAPHQL_GET_PET_QUERY, GRAPHQL_GET_PET_SEARCH } from "../contexts/constants";
import { useState, useEffect } from "react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";

export default function Pets() {
  const [text, setText] = useState("...Carregando, aguarde...");
  const [petList, setPetList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");  
  const { data, error } = useQuery(gql`${GRAPHQL_GET_PET_QUERY}`);

  const [searchPets, { data: searchData, loading: searchLoading, error: searchError }] = useLazyQuery(
    gql`${GRAPHQL_GET_PET_SEARCH}`,
    { variables: { termo: searchTerm } }
  );

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

  useEffect(() => {
    if (searchData && searchData.searchPet) {
      setPetList(searchData.searchPet);
    }
  }, [searchData]);

  const handleSearch = (term) => {
    setSearchTerm(term);  
    if (term) {
      searchPets();  
    } else {
      setPetList(data?.allPets || []);  // Reseta para a lista original se não houver termo
    }
  };

  if (loading || searchLoading) return <div>{text}</div>;
  if (error || searchError) return <div className="error-message">Erro: {error?.message || searchError?.message}</div>;

  return (
    <div className="content-pet">
      <div className="header-pet">
        <div className="header-pet-btn">
          <button className="btn-pet-add">+ ADICIONAR PET</button>
        </div>
        <div className="header-pet-search">
          <SearchBar placeholder="Pesquisar por nome" onSearch={handleSearch} />
          <span className="filter-text">Filtro: {searchTerm ? searchTerm : "Nenhum"}</span>
        </div>
      </div>
      <hr className="separator" />
      <section className="main-pets">
        {petList.length > 0 ? (
          petList.map((p, index) => <PetCard key={index} Pet={p} />)
        ) : (
          <div>Não há pets disponíveis.</div>
        )}
      </section>
      <footer></footer>
    </div>
  );
}
