import { useContext } from 'react';
import { AuthContext } from '../contexts/_old';

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;