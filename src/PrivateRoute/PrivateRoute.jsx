import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <h3 className="text-center h-[300px] pt-28">Loading...</h3>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;