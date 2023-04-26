import React, { useState, useEffect } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../../config/axios";
import "./index.style.scss";

const ContactPage: React.FC = () => {
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [idTechnology, setIdTechnology] = useState("");
    const [technologyOption, setTechnologyOption] = useState([]);
    const [workaddress, setWorkaddress] = useState("");
    const [worktime, setWorktime] = useState("");

    useEffect(() => {
        api.get("/intro")
            .then((response) => {
                setTechnologyOption(response.data);
            })
            .catch((error) => {
                console.error(error.response.data);
            });
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
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
            <div className='image_bg'>
                <div className='form_contact'>
                    {/* <img class="image_box" src="https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Lien-he-01-scaled.jpg" alt=''/>
                    <p>hello</p> */}
                    <div className='button_contact'>
                        <a type='button'>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                size='lg'
                                style={{ color: "#ffffff" }}
                            />
                        </a>
                    </div>
                    <div className='box_contact'>
                        <div className='box_item'>
                            <div className='first_title'>
                                <h1>
                                    <span>Liên Hệ</span>
                                </h1>
                            </div>
                            <br></br>
                            <div className='second_title'>
                                <h2>
                                    <span>
                                        Nếu bạn đang quan tâm đến các vị trí
                                        tuyển dụng/tuyển sinh tại FPT SOFTWARE
                                        Academy – FPT Software, vui lòng liên hệ
                                        với chúng tôi:
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <br></br>
                        <div onSubmit={handleSubmit}>
                            <div className='form_box'>
                                <div className='left'>
                                    <span>
                                        <input
                                            type='text'
                                            className='input'
                                            name='your_name'
                                            value-size='40'
                                            aria-required='true'
                                            aria-invalid='false'
                                            placeholder='Họ và tên*'
                                            value={fullname}
                                            onChange={(event) =>
                                                setFullname(event.target.value)
                                            }></input>
                                    </span>
                                    <br></br>
                                    <span>
                                        <input
                                            type='tel'
                                            className='input'
                                            name='your_phone'
                                            value-size='40'
                                            aria-required='true'
                                            aria-invalid='false'
                                            placeholder='Số điện thoại*'
                                            value={phone}
                                            onChange={(event) =>
                                                setPhone(event.target.value)
                                            }></input>
                                    </span>
                                    <br></br>
                                    <span>
                                        <input
                                            type='email'
                                            className='input'
                                            name='your_mail'
                                            value-size='40'
                                            aria-invalid='false'
                                            placeholder='Địa chỉ email'
                                            value={email}
                                            onChange={(event) =>
                                                setEmail(event.target.value)
                                            }></input>
                                    </span>
                                </div>
                                <div className='right'>
                                    <span>
                                        <select
                                            name='location'
                                            aria-invalid='false'
                                            className='input'
                                            value={workaddress}
                                            onChange={(event) =>
                                                setWorkaddress(
                                                    event.target.value
                                                )
                                            }>
                                            <option value='Diadiemlamviec'>
                                                Địa điểm làm việc
                                            </option>
                                            <option value='Toanquoc'>
                                                Toàn quốc
                                            </option>
                                            <option value='Hanoi'>
                                                Hà Nội
                                            </option>
                                            <option value='Hochiminh'>
                                                Hồ Chí Minh
                                            </option>
                                            <option value='Quynhon'>
                                                Quy Nhơn
                                            </option>
                                            <option value='Tamky'>
                                                Tam Kỳ
                                            </option>
                                            <option value='Danang'>
                                                Đà Nẵng
                                            </option>
                                        </select>
                                    </span>
                                    <br></br>
                                    <span>
                                        <select
                                            id='idTechnology'
                                            name='idTechnology'
                                            className='input'
                                            value={idTechnology}
                                            onChange={(event) =>
                                                setIdTechnology(
                                                    event.target.value
                                                )
                                            }>
                                            <option value=''>
                                                Chọn công nghệ
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
                                    </span>
                                    <br></br>
                                    <span>
                                        <select
                                            name='work_type'
                                            aria-invalid='false'
                                            className='input'
                                            value={worktime}
                                            onChange={(event) =>
                                                setWorktime(event.target.value)
                                            }>
                                            <option value='Thoigianlamviec'>
                                                Thời gian làm việc
                                            </option>
                                            <option value='Fulltime'>
                                                Full time
                                            </option>
                                            <option value='Parttime'>
                                                Part time
                                            </option>
                                        </select>
                                    </span>
                                </div>
                            </div>
                            <div className='checkbox_form'>
                                <label>
                                    <input
                                        type='checkbox'
                                        className='checkbox_input'
                                        name='subcribe_blog[]'
                                        value='Đăng ký nhận tin từ chúng tôi'></input>
                                    <span className='checkbox_content'>
                                        Đăng ký nhận tin từ chúng tôi
                                    </span>
                                </label>

                                <input
                                    type='submit'
                                    value='Đăng ký'
                                    className='button_submit'></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
