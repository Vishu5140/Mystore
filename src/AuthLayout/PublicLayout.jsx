import React from 'react'
import { Navigate } from 'react-router';
import { Outlet } from 'react-router';
function PublicLayout() {
    const isAuth=localStorage.getItem("auth");
     return isAuth ? <Navigate to="/" replace /> : <Outlet />;
}

export default PublicLayout