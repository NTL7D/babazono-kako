import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import logo from "../../assets/logo.png";
import "./style.scss";
import api from "../../config/axios";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.post("/login", { email, password })
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                window.location.replace("/admin");
            })
            .catch((err) => {
                console.error(err);
            });
    };
    return (
        <div className='login-page'>
            <Helmet>
                <title>Đăng nhập ‹ Fsoft Academy </title>
            </Helmet>
            <div className='login-container'>
                <img src={logo} width={300} height={120} />
                <form className='form-login' onSubmit={handleSignin}>
                    <div className='input-1'>
                        <label className='text-label' htmlFor='email'>
                            Địa chỉ Email
                        </label>
                        <input
                            type='text'
                            name='email'
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className='input-1'>
                        <label className='password-label' htmlFor='Password'>
                            Mật khẩu
                        </label>
                        <input
                            type='password'
                            name='Password'
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className='submit-label'>
                        <div className='rember'>
                            <input className='check-box' type='checkbox' />
                            <span>Tự động đăng nhập</span>
                        </div>
                        <input
                            className='submit-button'
                            type='submit'
                            value='Đăng nhập'
                        />
                    </div>
                </form>
                <div className='forgor'>
                    <Link className='direct' to='/login/forget-password'>
                        Bạn quên mật khẩu?
                    </Link>
                    <Link className='direct' to='/'>
                        ← Quay lại Fsoft Academy
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
