import React, { useState } from "react";
import api from "../../config/axios";
import "./section.style.scss";
type Error = {
    field: string;
    message: string;
};
const Section: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [errors, setErrors] = useState<Error[]>([]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let error = errors;

        if (!name) {
            error.push({
                field: "name",
                message: "Họ tên không được để trống",
            });
        }

        if (!email) {
            errors.push({
                field: "email",
                message: "Email không được để trống",
            });
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.push({ field: "email", message: "Email không hợp lệ" });
        }

        if (!phone) {
            errors.push({
                field: "phone",
                message: "Số điện thoại không được để trống",
            });
        } else if (phone.length < 10) {
            errors.push({
                field: "phone",
                message: "Số điện thoại phải có ít nhất 10 ký tự",
            });
        }

        if (!city) {
            errors.push({
                field: "city",
                message: "Tỉnh thành không được để trống",
            });
        }

        setErrors(error);

        if (errors.length === 0) {
            api.post("/duhoc/new", {
                name,
                email,
                phone,
                city,
            })
                .then((res) => {
                    console.log(res.data);
                    alert("Cảm ơn bạn đã đăng ký");
                    setName(res.data.name);
                    setEmail(res.data.email);
                    setPhone(res.data.phone);
                    setCity(res.data.city);
                })
                .catch((error) => {
                    // handle error
                });
        }
    };

    return (
        <div className='container'>
            <div className='boxSection'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='boxLeft'>
                            <div className='title'>
                                <p>ĐĂNG KÝ NGAY</p>
                                <p>ĐỂ ĐƯỢC CHUYÊN GIA</p>
                                <p>TƯ VẤN MIỄN PHÍ & NHẬN HỌC BỔNG</p>
                            </div>
                            <div className='sumary'>
                                Bạn vui lòng để lại thông tin để trở thành người
                                đầu tiên được cập nhật mới nhất về các chương
                                trình học bổng, khoá học của Học viện FPT Japan
                            </div>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='boxRight'>
                            <div className='form'>
                                <form
                                    action='#'
                                    method='POST'
                                    onSubmit={handleSubmit}>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            name='name'
                                            className='form-control txtName'
                                            placeholder='Họ tên'
                                            value={name}
                                            onChange={(event) =>
                                                setName(event.target.value)
                                            }
                                        />
                                        {errors.map(
                                            (error, index) =>
                                                error.field === "name" && (
                                                    <p
                                                        key={index}
                                                        style={{
                                                            color: "red",
                                                        }}>
                                                        {error.message}
                                                    </p>
                                                )
                                        )}
                                    </div>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            name='email'
                                            className='form-control txtEmail'
                                            placeholder='Email'
                                            value={email}
                                            onChange={(event) =>
                                                setEmail(event.target.value)
                                            }
                                        />
                                        {errors.map(
                                            (error, index) =>
                                                error.field === "email" && (
                                                    <p
                                                        key={index}
                                                        style={{
                                                            color: "red",
                                                        }}>
                                                        {error.message}
                                                    </p>
                                                )
                                        )}
                                    </div>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            name='phone'
                                            className='form-control txtPhone'
                                            placeholder='Điện thoại'
                                            value={phone}
                                            onChange={(event) =>
                                                setPhone(event.target.value)
                                            }
                                        />
                                        {errors.map(
                                            (error, index) =>
                                                error.field === "phone" && (
                                                    <p
                                                        key={index}
                                                        style={{
                                                            color: "red",
                                                        }}>
                                                        {error.message}
                                                    </p>
                                                )
                                        )}
                                    </div>
                                    <div className='form-group'>
                                        <input
                                            type='text'
                                            name='district'
                                            className='form-control txtDistrict'
                                            placeholder='Tỉnh / Thành phố'
                                            value={city}
                                            onChange={(event) =>
                                                setCity(event.target.value)
                                            }
                                        />
                                        {errors.map(
                                            (error, index) =>
                                                error.field === "city" && (
                                                    <p
                                                        key={index}
                                                        style={{
                                                            color: "red",
                                                        }}>
                                                        {error.message}
                                                    </p>
                                                )
                                        )}
                                    </div>
                                    <div className='form-group'>
                                        <input
                                            type='submit'
                                            name='submit'
                                            id='rd-submits'
                                            className='form-control btn-submit'
                                            value='Đăng ký ngay'
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
