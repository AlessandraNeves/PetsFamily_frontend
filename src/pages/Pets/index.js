import './style.css';
import SearchBar from "../../components/SearchBar";
import PetCard from "../../components/petCard";
import { useState, useEffect } from "react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";
import { GRAPHQL_GET_PET_QUERY, GRAPHQL_GET_PET_SEARCH } from "../../contants/graphQL";
import { useNavigate } from "react-router-dom";


export default function Pets() {
  const [text, setText] = useState("...Carregando, aguarde...");
  const [petList, setPetList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");  
  const { data, error, refetch } = useQuery(gql`${GRAPHQL_GET_PET_QUERY}`);
  const navigate = useNavigate();

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

  useEffect(() => {
    updatePetList();
  }, []);

  const handleAddPet = () => {
    navigate("/pets/add"); // Substitua pela rota correta de PetDetails
  };

  const handleSearch = (term) => {
    setSearchTerm(term);  
    if (term) {
      searchPets();  
    } else {
      setPetList(data?.allPets || []);  
    }
  };

  const updatePetList = async () => {
    await refetch(); 
  };

  if (loading || searchLoading) return <div>{text}</div>;
  if (error || searchError) return <div className="error-message">Erro: {error?.message || searchError?.message}</div>;

  return (
    <div className="content-pet">
      <div className="header-pet">
        <div className="header-pet-btn">
          <button className="btn-pet-add" onClick={handleAddPet}>+ ADICIONAR PET</button>
        </div>
        <div className="header-pet-search">
          <SearchBar placeholder="Pesquisar por nome" onSearch={handleSearch} />
          <span className="filter-text">Filtro: {searchTerm ? searchTerm : "Nenhum"}</span>
        </div>
      </div>
      <hr className="separator" />
      <section className="main-pets">
        {petList.length > 0 ? (
          petList.map((p, index) => (<PetCard key={index} Pet={p}/>))
        ) : (
          <div>Não há pets disponíveis.</div>
        )}
      </section>
      <footer></footer>
    </div>
  );
}
