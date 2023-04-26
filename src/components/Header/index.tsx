import React from "react";
import { Link } from "react-router-dom";
import "./index.style.scss";
import logo from "../../assets/logo.png";
const Header: React.FC = () => {
    return (
        <div className='sticky'>
            <div className='Header-format'>
                <div>
                    <Link to='/'>
                        <img src={logo} alt='Fpt' className='Image' />
                    </Link>
                </div>
                <div className='GroupText'>
                    <Link to='/gioi-thieu' className='Text'>
                        Giới thiệu
                    </Link>
                    <Link to='/tuyen-dung' className='Text'>
                        Tuyển dụng
                    </Link>
                    <Link to='/dao-tao-mo-rong' className='Text'>
                        Đào tạo mở rộng
                    </Link>
                    <Link to='/khai-giang' className='Text'>
                        Lịch khai giảng
                    </Link>
                    <Link to='/tin-tuc' className='Text'>
                        Tin tức & sự kiện
                    </Link>
                    <Link to='/lien-he' className='Text'>
                        Liên hệ
                    </Link>
                    <Link to='/jp' className='Text'>
                        Du học Nhật Bản
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
