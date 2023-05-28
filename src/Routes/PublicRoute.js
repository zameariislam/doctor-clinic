import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    if (loading) {
        <progress className="progress w-56"></progress>
    }



    if (!user?.uid) {
        return children


    }
    navigate('/')


};

export default PublicRoute;