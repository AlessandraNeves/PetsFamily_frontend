import './style.css';
import * as React from 'react';
import { useLocation, useNavigate} from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import noPhoto from "../../assets/img/no_photo.png";
import PetsIcon from '@mui/icons-material/PetsOutlined';
import { useMutation, gql } from "@apollo/client";
import { GRAPHQL_ADD_PET_MUTATION, GRAPHQL_REMOVE_PET_MUTATION } from "../../contants/graphQL";

const PetDetails = () => {
  let { state } = useLocation();

  const navigate = useNavigate();

  const [petData, setPetData] = React.useState({
    id: state?.pet?.id || '',
    name: state?.pet?.name || '',
    birthday: state?.pet?.birthday || '',
    breed: state?.pet?.breed || '',
    domain: state?.pet?.domain || '',
    gender: state?.pet?.gender || '',
    microchip: state?.pet?.microchip || '',
    photo: state?.pet?.photo || '',
    weight: state?.pet?.weight || '',
  });

  const [addPet, { loading: addingLoading, error: addingError }] = useMutation(gql`${GRAPHQL_ADD_PET_MUTATION}`);
  const [removePet, { error: removingError }] = useMutation(gql`${GRAPHQL_REMOVE_PET_MUTATION}`);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPetData(prev => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      alert("Por favor, selecione um arquivo de imagem válido.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPet({ variables: { input: petData } });
      alert("Pet adicionado com sucesso!");
    } catch (err) {
      console.error(err);
      alert("Erro ao adicionar o pet");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (window.confirm("Você tem certeza que deseja excluir este pet?")) {
      try {
        await removePet({
          variables: {
            id: parseInt(petData.id, 10),
          },
        });
        alert("Pet excluído com sucesso!");
        navigate("/pets");
      } catch (err) {
        console.error(err);
        alert("Erro ao excluir o pet");
      }
    }
  };

  return (
    <div>
      <div className="pet-content">
        <Card className="card-content">
          <div className="column">
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <PetsIcon fontSize="large" color='secondary'/>
                </IconButton>
              }
              title={petData.name || "Sem nome disponível"}
              subheader={petData.birthday || "Data de nascimento desconhecida"}
            />
            <CardMedia
              component="img"
              height="194"
              image={petData.photo || noPhoto}
              alt="Pet"
            />
            <div>
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
          </div>
          <div className="column">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <div className="input-item">
                  <label>Data de Nascimento:</label>
                  <input type="text" name="birthday" value={petData.birthday} onChange={handleChange} required />
                </div>
                <div className="input-item">
                  <label>Microchip:</label>
                  <input type="number" name="microchip" value={petData.microchip} onChange={handleChange} required />
                </div>
              </div>
              <div className="input-group">
                <div className="input-item">
                  <label>Tipo:</label>
                  <input type="text" name="domain" value={petData.domain} onChange={handleChange} required />
                </div>
                <div className="input-item">
                  <label>Gênero:</label>
                  <select name="gender" value={petData.gender} onChange={handleChange} required>
                    <option value="">Selecione</option>
                    <option value="macho">Macho</option>
                    <option value="fêmea">Fêmea</option>
                  </select>
                </div>
              </div>
              <div className="input-group">
                <div className="input-item">
                  <label>Raça:</label>
                  <input type="text" name="breed" value={petData.breed} onChange={handleChange} />
                </div>
                <div className="input-item">
                  <label>Peso (Kg):</label>
                  <input type="number" step="0.1" name="weight" value={petData.weight} onChange={handleChange} required />
                </div>
              </div>
              <div className="button-group">
                <button type="submit" disabled={addingLoading}>
                  {addingLoading ? 'Salvando...' : 'Salvar'}
                </button>
                <button type="button" className="btn-secondary" onClick={handleDelete}>
                  Excluir
                </button>
                {addingError && <p>Erro ao adicionar: {addingError.message}</p>}
                {removingError && <p>Erro ao excluir: {removingError.message}</p>}
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default PetDetails;