import React, { useEffect, useState } from "react";
import api from "../../config/axios";
import "./register.style.scss";

const RegisterPage: React.FC = () => {
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [idTechnology, setIdTechnology] = useState("");
    const [technologyOption, setTechnologyOption] = useState([]);
    const [workaddress, setWorkaddress] = useState("");
    const [worktime, setWorktime] = useState("");

    //response dữ liệu
    useEffect(() => {
        api.get("/intro")
            .then((response) => {
                setTechnologyOption(response.data);
            })
            .catch((error) => {
                console.error(error.response.data);
            });
    }, []);

    //request dữ liệu
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        api.post("/intro/new", {
            fullname,
            phone,
            email,
            idTechnology,
            workaddress,
            worktime,
        })
            .then((response) => {
                console.log(response.data);
                alert("Cảm ơn bạn đã đăng ký");
            })
            .catch((error) => {
                console.error(error.response.data);
            });
    };
    return (
        <div>
            <div className='form'>
                <div className='form-content'>
                    <div className='form-main'>
                        <div className='form-left'>
                            <div className='left-content'>
                                <h3>
                                    GIA NHẬP <br></br>
                                    FPT SOFTWARE ACADEMY
                                </h3>
                                <span>
                                    FPT Software Academy tự hào là bệ phóng sự
                                    nghiệp vững chắc cho 5000 kỹ sư công nghệ
                                    thông tin trẻ mỗi năm
                                </span>
                            </div>
                        </div>
                        <div className='form-right'>
                            <form
                                className='right-content'
                                onSubmit={handleSubmit}>
                                <input
                                    type='text'
                                    name='your-name'
                                    placeholder='Họ và Tên*'
                                    required
                                    value={fullname}
                                    onChange={(event) =>
                                        setFullname(event.target.value)
                                    }
                                />
                                <input
                                    type='tel'
                                    name='your-phone'
                                    placeholder='Số điện thoại*'
                                    required
                                    value={phone}
                                    onChange={(event) =>
                                        setPhone(event.target.value)
                                    }
                                />
                                <input
                                    type='email'
                                    name='your-email'
                                    placeholder='Địa chỉ email'
                                    required
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                                <select
                                    name='location'
                                    value={workaddress}
                                    onChange={(event) =>
                                        setWorkaddress(event.target.value)
                                    }>
                                    <option value='Địa điểm làm việc'>
                                        {" "}
                                        Địa điểm làm việc
                                    </option>
                                    <option value='Toàn quốc'>Toàn quốc</option>
                                    <option value='Hà Nội'>Hà Nội</option>
                                    <option value='Hồ Chí Minh'>
                                        Hồ Chí Minh
                                    </option>
                                    <option value='Quy Nhơn'>Quy Nhơn</option>
                                    <option value='Tam Kỳ'>Tam Kỳ</option>
                                    <option value='Đà Nẵng'>Đà Nẵng</option>
                                </select>
                                <select
                                    id='idTechnology'
                                    name='idTechnology'
                                    value={idTechnology}
                                    onChange={(event) =>
                                        setIdTechnology(event.target.value)
                                    }>
                                    <option value=''>
                                        -- Chọn công nghệ --
                                    </option>
                                    {technologyOption.map(
                                        (technology, index) => (
                                            <option
                                                key={index}
                                                value={technology.id}>
                                                {technology.name}
                                            </option>
                                        )
                                    )}
                                </select>
                                <select
                                    name='work-type'
                                    value={worktime}
                                    onChange={(event) =>
                                        setWorktime(event.target.value)
                                    }>
                                    <option value='Thời Gian làm việc'>
                                        Thời Gian làm việc
                                    </option>
                                    <option value='Full time'>Full time</option>
                                    <option value='Part time'>Part time</option>
                                </select>
                                <label>
                                    <input
                                        type='checkbox'
                                        value='Đăng kí nhận tin từ chúng tôi'
                                        className='input'></input>
                                    <span>Đăng kí nhận tin từ chúng tôi</span>
                                </label>
                                <div className='submit'>
                                    <input
                                        type='submit'
                                        value='Đăng kí'></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
