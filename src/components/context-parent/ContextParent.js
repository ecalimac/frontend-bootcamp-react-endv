import React, { useContext } from 'react'
import Auth from '../auth/Auth';
import BootcampsRouteComponent from '../bootcamps-route/BootcampsRouteComponent';
import { AuthContext } from '../context/AuthContext';

// we want to keep in the state infos about authentification
// if we are authenticated: we'll show <BootcampsRouteComponent/>
// if we're not authenticated: we'll show <Auth> component
const ContextParent = (props) => {
    const authContext = useContext(AuthContext);
    let content = <Auth />;
    if (authContext.isAuth) {
        content = <BootcampsRouteComponent />;
    }
    return content;
}

export default ContextParent;