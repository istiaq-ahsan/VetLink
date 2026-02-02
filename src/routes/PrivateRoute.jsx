import React from 'react'
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const{user, loading} = useAuth();

    if(loading){
        <div>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    }

    if(!user){
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

  return children;
}

export default PrivateRoute
