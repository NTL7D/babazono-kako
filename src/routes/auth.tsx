import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface User {
    id: number;
    email: string;
    role: string;
}

const PrivateAuthRoutes = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios
                .get<User>("/api/auth", {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    setUser(res.data);
                    setIsAuthenticated(true);
                })
                .catch(() => {
                    setIsAuthenticated(false);
                });
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    if (isAuthenticated && user && user.role === "ADMIN") {
        return <Outlet />;
    } else {
        return <Navigate to='/login' />;
    }
};

export default PrivateAuthRoutes;
