import './style.css';
import * as React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import noPhoto from "../../assets/img/no_photo.png";
import { useMutation, gql } from "@apollo/client";
import { GRAPHQL_ADD_PET_MUTATION, GRAPHQL_UPDATE_PET_MUTATION, GRAPHQL_REMOVE_PET_MUTATION } from "../../contants/graphQL";

const PetDetails = () => {
  let { state } = useLocation();
  const navigate = useNavigate();
  const isNewPet = !state?.pet?.id;

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
  const [updatePet, { loading: updatingLoading, error: updatingError }] = useMutation(gql`${GRAPHQL_UPDATE_PET_MUTATION}`);
  const [removePet, { error: removingError }] = useMutation(gql`${GRAPHQL_REMOVE_PET_MUTATION}`);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData(prev => ({ ...prev, [name]: value }));
    console.log(petData);
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
      if (isNewPet) {
        const { data } = await addPet({
          variables: {
            name: petData.name,
            birthday: petData.birthday,
            breed: petData.breed,
            domain: petData.domain,
            gender: petData.gender,
            microchip: parseInt(petData.microchip, 10),
            weight: parseFloat(petData.weight),
            photo: petData.photo || '',
            adoption: '',
            adoptionInfo: ''
          }
        });
  
        if (data?.addPet?.message) {
          alert(data.addPet.message);
        } else {
          alert("Pet adicionado com sucesso!");
          navigate("/pets")
        }
      } else {
        const { data } = await updatePet({
          variables: {
            id: parseInt(petData.id, 10), // Certifique-se de que o id seja do tipo Int
            edits: {
              name: petData.name,
              birthday: petData.birthday,
              breed: petData.breed,
              domain: petData.domain,
              gender: petData.gender,
              microchip: parseInt(petData.microchip, 10),
              weight: parseFloat(petData.weight),
              photo: petData.photo || '',
              adoption: '',
              adoptionInfo: ''
            }
          }
        });
  
        if (data?.editPet?.message) {
          alert(data.editPet.message);
        } else {
          alert("Pet atualizado com sucesso!");
          navigate("/pets")
        }
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao editar o pet");
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

  const handleCancel = () => {
    navigate("/pets");
  };

  return (
    <div className="pet-content">
      <form onSubmit={handleSubmit}>
        <div className="header-bar">
          <div className="title">Cadastro de Pet</div>
        </div>
        <hr className="form-divider" />
        <div className="container">
          <div className="coluna">
            <div class="linha">
              <div className="input-container">
                  <label className={petData.name ? "label active" : "label"}>Foto:</label>
                  <div className="input-photo-container">
                    <img id="fileImage" src={petData.photo || noPhoto} alt="Pet" />
                    <input 
                      id="fileInput"
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange}
                      style={{ display: 'none' }}
                    />
                    <button 
                      id="fileButton"
                      type="button" 
                      onClick={() => document.getElementById('fileInput').click()}>
                      selecionar foto
                    </button>
                  </div>
              </div>
           </div>
          </div>
          <div className="coluna">
            <div class="linha">
              <div className="input-container">
                <label className={petData.name ? "label active" : "label"}>Nome:</label>
                <input 
                  type="text" 
                  name="name" 
                  value={petData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>
            <div class="linha">
              <div className="input-container">
                  <label className={petData.name ? "label active" : "label"}>Data de Nascimento:</label>
                  <input 
                    type="date" 
                    name="birthday" 
                    value={petData.birthday} 
                    onChange={handleChange} 
                    required 
                  />
              </div>
            </div>
            <div class="linha">
              <div className="input-container">
                <label className={petData.microchip ? "label active" : "label"}>Microchip:</label>
                <input 
                    type="number" 
                    name="microchip" 
                    value={petData.microchip} 
                    onChange={handleChange} 
                    required 
                  />
              </div>
            </div>
          </div>
          <div className="coluna">
            <div className="linha">
              <div className="input-container">
                <label className={petData.domain ? "label active" : "label"}>Tipo:</label>
                <input 
                    type="text" 
                    name="domain" 
                    value={petData.domain} 
                    onChange={handleChange} 
                    required 
                  />
              </div>
            </div>
          </div>
          <div className="coluna">
            <div class="linha">
              <div className="input-container">
                <label className={petData.gender ? "label active" : "label"}>Gênero:</label>
                  <select 
                    name="gender" 
                    value={petData.gender}
                    onChange={handleChange}
                    required
                    >
                    <option value="">Selecione</option>
                    <option value="macho">macho</option>
                    <option value="fêmea">fêmea</option>
                  </select>
              </div>
            </div>
          </div>
          <div className="coluna">
            <div className="linha">
              <div className="input-container">
                <label className={petData.microchip ? "label active" : "label"}>Raça:</label>
                <input 
                    type="text" 
                    name="breed" 
                    value={petData.breed} 
                    onChange={handleChange}  
                    required 
                  />
                </div>
            </div>
          </div>
          <div className="coluna">
            <div className="linha">
              <div className="input-container">
                <label className={petData.weight ? "label active" : "label"}>Peso (Kg):</label>
                <input 
                    type="number" 
                    name="weight" 
                    value={petData.weight} 
                    onChange={handleChange} 
                    required 
                  />
              </div>
            </div>
          </div>
        </div>
        <hr className="form-divider" />
        <div className="container">
          <div className="coluna">
            <div className="button-group">
              <div className="button-item">
                <button type="button" className="btn-cancel" onClick={handleCancel}>
                  CANCELAR
                </button>
              </div>
            </div>
          </div>
          <div className="coluna">
              <div className="button-group">
                {!isNewPet && (
                  <div className="button-item">
                    <button type="button" className="btn-remove" onClick={handleDelete}>
                      EXCLUIR
                    </button>
                  </div>
                )}
              <div className="button-item">
                <button type="submit" disabled={addingLoading || updatingLoading}>
                  {isNewPet ? (addingLoading ? 'Adicionando...' : 'ADICIONAR') : (updatingLoading ? 'Salvando...' : 'SALVAR')}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {addingError && <p>Erro ao adicionar: {addingError.message}</p>}
          {updatingError && <p>Erro ao editar: {updatingError?.message}</p>}
          {removingError && <p>Erro ao excluir: {removingError?.message}</p>}
        </div>
      </form>
    </div>
  );
};

export default PetDetails;
