import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./style.scss";
import api from "../../../config/axios";

type User = {
    name: string;
};
const Adminheader: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            api.get("/user", {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then((res) => {
                    setUser(res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, []);
    return (
        <>
            <div className='nav-container'>
                <div className='nav-function'>
                    <Link to='/admin'>
                        <img className='logo' src={logo} />
                    </Link>
                    <div className='user-logout'>
                        {user && <p>Xin chào, {user.name}</p>}
                        <button
                            className='logout-btn'
                            onClick={() => {
                                localStorage.removeItem("token");
                                alert("Đăng xuất thành công");
                            }}>
                            <Link className='logout-txt' to='/'>
                                Đăng xuất
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Adminheader;
