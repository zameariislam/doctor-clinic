import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    let location = useLocation()


    if (!user?.uid) {
        return <Navigate to="/login" state={{ from: location }} replace />

    }
    return children



};

export default PrivateRoute;