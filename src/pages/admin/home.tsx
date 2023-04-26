import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./home.scss";
import api from "../../config/axios";

type User = {
    name: string;
    position: string;
    avatar: string;
};

const AdminHomePage: React.FC = () => {
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
            <Helmet>
                <title>Admin - HomePage</title>
            </Helmet>

            <div className='admin-wrapper'>
                {user && (
                    <div className='admin-info'>
                        <div className='admin-image'>
                            <img src={user.avatar} />
                        </div>
                        <div className='admin-info-txt'>
                            <h1 className='admin'>{user.name}</h1>
                            <h1 className='admin'>Chức vụ: {user.position}</h1>
                        </div>
                    </div>
                )}

                <div className='admin-container'>
                    <Link className='news div-radius' to='/admin/news'>
                        <div className='div-txt'>Tin tức</div>
                    </Link>
                    <Link className='jobs div-radius' to='/admin/jobs'>
                        <div className='div-txt'>Việc làm</div>
                    </Link>
                    <Link className='courses div-radius' to='/admin/courses'>
                        <div className='div-txt'>Khoá học</div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AdminHomePage;
