import React, { FormEvent, useEffect, useState } from "react";
import api from "../../config/axios";
import "./register.style.scss";
const RegisterPage: React.FC = () => {
    const [fullname, setFullname] = useState("");
    const [birthday, setBirthday] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [education, setEducation] = useState("");
    const [faculty, setFaculty] = useState("");
    const [graduayear, setGraduayear] = useState("");
    const [GPA, setGPA] = useState("");
    const [foreignlanguage, setForeignlanguage] = useState("");
    const [certificate, setCertificate] = useState("");
    const [idTechnology, setIdTechnology] = useState("");
    const [otherskill, setOtherskill] = useState("");
    const [wroktime, setWroktime] = useState("");
    const [profilelink, setProfilelink] = useState("");
    const [profile, setProfile] = useState<File | null>(null);
    const [technologyOption, setTechnologyOption] = useState([]);

    useEffect(() => {
        api.get("/intro")
            .then((response) => {
                setTechnologyOption(response.data);
            })
            .catch((error) => {
                console.error(error.response.data);
            });
    }, []);

    const handleSubmit = async (event: FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        const formData = new FormData();
        for (const [key, value] of Object.entries(InternshipRegisterPage)) {
            formData.append(key, value);
        }

        api.post("/intern", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {
                console.log(response.data);
                alert("Cảm ơn bạn đã đăng ký");
            })
            .catch((error) => {
                console.error(error.response.data);
            });
    };
    const handleProfileChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files[0];
        setProfile(file);
    };
    return (
        <div className='form'>
            <div className='form-content' onSubmit={handleSubmit}>
                <div className='content-head'>
                    <p>ĐĂNG KÝ THAM GIA THỰC TẬP</p>
                    <span>
                        FPT Software Academy tự hào là bệ phóng sự nghiệp vững
                        chắc cho 5000 kỹ sư công nghệ thông tin trẻ mỗi năm.
                    </span>
                </div>
                <div className='main-register'>
                    <form action='thuc-tap'>
                        <div className='row'>
                            <div className='info'>
                                <b>Thông tin cá nhân</b>
                            </div>
                            <div className='info-head'>
                                <div className='name'>
                                    <input
                                        type='text'
                                        name='fullname'
                                        placeholder='Họ và tên *'
                                        required
                                        value={fullname}
                                        onChange={(event) =>
                                            setFullname(event.target.value)
                                        }
                                    />
                                </div>
                                <div className='number'>
                                    <input
                                        type='text'
                                        name='phone'
                                        placeholder='Số điện thoại *'
                                        required
                                        value={phone}
                                        onChange={(event) =>
                                            setPhone(event.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className='info-mid'>
                                <div className='birth'>
                                    <input
                                        type='text'
                                        name='Ngày sinh'
                                        placeholder='Ngày sinh'
                                        value={birthday}
                                        onChange={(event) =>
                                            setBirthday(event.target.value)
                                        }
                                    />
                                </div>
                                <div className='mail'>
                                    <input
                                        type='text'
                                        name='Địa chỉ email'
                                        placeholder='Địa chỉ email'
                                        value={email}
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className='info-bottom'>
                                <div className='info-gender'>
                                    <select
                                        name='gender'
                                        id=''
                                        value={gender}
                                        onChange={(event) =>
                                            setGender(event.target.value)
                                        }>
                                        <option value='- Giới tính -'>
                                            - Giới tính -
                                        </option>
                                        <option value='Nam'>Nam</option>
                                        <option value='Nữ'>Nữ</option>
                                        <option value='Khác'>Khác</option>
                                    </select>
                                </div>
                                <div className='info-location'>
                                    <select
                                        name='location'
                                        id=''
                                        value={city}
                                        onChange={(event) =>
                                            setCity(event.target.value)
                                        }>
                                        <option value='Khu vực *'>
                                            Khu vực *
                                        </option>
                                        <option value='Toàn quốc'>
                                            Toàn quốc
                                        </option>
                                        <option value='Hà Nội'>Hà Nội</option>
                                        <option value='Hồ Chí Minh'>
                                            Hồ Chí Minh
                                        </option>
                                        <option value='Quy Nhơn'>
                                            Quy Nhơn
                                        </option>
                                        <option value='Tam Kỳ'>Tam Kỳ</option>
                                        <option value='Đà Nẵng'>Đà Nẵng</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='row-edu'>
                            <div className='edu'>
                                <b>Học vấn</b>
                            </div>
                            <div className='edu-head'>
                                <div className='edu-school'>
                                    <select
                                        name='school'
                                        id=''
                                        value={education}
                                        onChange={(event) =>
                                            setEducation(event.target.value)
                                        }>
                                        <option value='- Tốt nghiệp trường -'>
                                            - Tốt nghiệp trường -
                                        </option>
                                        <option value='ACT – Học viện Kỹ thuật mật mã'>
                                            ACT – Học viện Kỹ thuật mật mã
                                        </option>
                                        <option value='CAOTHANG - Cao Đẳng Kĩ Thuật Cao Thắng TP HCM'>
                                            CAOTHANG - Cao Đẳng Kĩ Thuật Cao
                                            Thắng TP HCM
                                        </option>
                                        <option value='DNU - Đại học Đồng Nai'>
                                            DNU - Đại học Đồng Nai
                                        </option>
                                        <option value='DONGA - Đại Học Đông Á'>
                                            DONGA - Đại Học Đông Á
                                        </option>
                                        <option value='DTU - Đại học Duy Tân'>
                                            DTU - Đại học Duy Tân
                                        </option>
                                        <option value='DUT – Đại học Bách Khoa (ĐH Đà Nẵng)'>
                                            DUT – Đại học Bách Khoa (ĐH Đà Nẵng)
                                        </option>
                                        <option value='EPU – Đại học Điện lực'>
                                            EPU – Đại học Điện lực
                                        </option>
                                        <option value='HANU – Đại học Hà Nội'>
                                            HANU – Đại học Hà Nội
                                        </option>
                                        <option value='HAUI – Đại học Công Nghiệp Hà Nội'>
                                            HAUI – Đại học Công Nghiệp Hà Nội
                                        </option>
                                        <option value='HCMUS - Đại học Khoa học tự nhiên (Đại học Quốc Gia HCM)'>
                                            HCMUS - Đại học Khoa học tự nhiên
                                            (Đại học Quốc Gia HCM)
                                        </option>
                                        <option value='HCMUTE - Đại học Sư Phạm Kỹ Thuật TP HCM-'>
                                            HCMUTE - Đại học Sư Phạm Kỹ Thuật TP
                                            HCM
                                        </option>
                                        <option value='HITC - Cao Đẳng Công Thương TP HCM'>
                                            HITC - Cao Đẳng Công Thương TP HCM
                                        </option>
                                        <option value='HOU – Đại học Mở'>
                                            HOU – Đại học Mở
                                        </option>
                                        <option value='HUMG – Đại học Mỏ địa chất'>
                                            HUMG – Đại học Mỏ địa chất
                                        </option>
                                        <option value='HUNRE - Đại học Tài nguyên và Môi trường Hà Nội'>
                                            HUNRE - Đại học Tài nguyên và Môi
                                            trường Hà Nội
                                        </option>
                                        <option value='HUS – Đại học Khoa học tự nhiên (Đại học Quốc gia Hà Nội)'>
                                            HUS – Đại học Khoa học tự nhiên (Đại
                                            học Quốc gia Hà Nội)
                                        </option>
                                        <option value='HUSC - Đại Học Khoa học Huế'>
                                            HUSC - Đại Học Khoa học Huế
                                        </option>
                                        <option value='HUST – Đại học Bách Khoa Hà Nội'>
                                            HUST – Đại học Bách Khoa Hà Nội
                                        </option>
                                        <option value='HUTECH - Đại học Công Nghệ Tp HCM'>
                                            HUTECH - Đại học Công Nghệ Tp HCM
                                        </option>
                                        <option value='LHU - Đại học Lạc Hồng'>
                                            LHU - Đại học Lạc Hồng
                                        </option>
                                        <option value='MTA – Học viện Kỹ thuật quân sư'>
                                            MTA – Học viện Kỹ thuật quân sư
                                        </option>
                                        <option value='NEU - Đại học Kinh Tế Quốc Dân'>
                                            NEU - Đại học Kinh Tế Quốc Dân
                                        </option>
                                        <option value='NLU - Đại học Nông Lâm TP HCM'>
                                            NLU - Đại học Nông Lâm TP HCM
                                        </option>
                                        <option value='NUCE – Đại học Xây dựng'>
                                            NUCE – Đại học Xây dựng
                                        </option>
                                        <option value='Other'>Other</option>
                                        <option value='PTIT – Học viện Bưu chính Viễn thông'>
                                            PTIT – Học viện Bưu chính Viễn thông
                                        </option>
                                        <option value='PVDU - Đại học Phạm Văn Đồng'>
                                            PVDU - Đại học Phạm Văn Đồng
                                        </option>
                                        <option value='SGU - Đại học Sài Gòn'>
                                            SGU - Đại học Sài Gòn
                                        </option>
                                        <option value='TLU – Đại học Thủy Lợi'>
                                            TLU – Đại học Thủy Lợi
                                        </option>
                                        <option value='TNU- Đại học Thái Nguyên'>
                                            TNU- Đại học Thái Nguyên
                                        </option>
                                        <option value='UED – Đại học Sư phạm Đà Nẵng'>
                                            UED – Đại học Sư phạm Đà Nẵng
                                        </option>
                                        <option value='UEL - Đại học Kinh tế Luật (Đại học Quốc Gia HCM)'>
                                            UEL - Đại học Kinh tế Luật (Đại học
                                            Quốc Gia HCM)
                                        </option>
                                        <option value='UET – Đại học Công Nghệ'>
                                            UET – Đại học Công Nghệ
                                        </option>
                                        <option value='UIT - Đại học Công nghệ Thông Tin (Đại học Quốc Gia HCM)'>
                                            UIT - Đại học Công nghệ Thông Tin
                                            (Đại học Quốc Gia HCM)
                                        </option>
                                        <option value='UTC - Đại học Giao Thông Vận Tải TP HCM'>
                                            UTC - Đại học Giao Thông Vận Tải TP
                                            HCM
                                        </option>
                                        <option value='UTE – Đại học Sư Phạm Kỹ Thuật Đà Nẵng'>
                                            UTE – Đại học Sư Phạm Kỹ Thuật Đà
                                            Nẵng
                                        </option>
                                        <option value='UTEHY - Đại học Sư Phạm Kỹ Thuật Hưng Yên'>
                                            UTEHY - Đại học Sư Phạm Kỹ Thuật
                                            Hưng Yên
                                        </option>
                                        <option value='VINHUNI - Đại Học Vinh'>
                                            VINHUNI - Đại Học Vinh
                                        </option>
                                    </select>
                                </div>
                                <div className='graduate'>
                                    <input
                                        type='text'
                                        name='graduate_year'
                                        placeholder='Năm tốt nghiệp'
                                        value={graduayear}
                                        onChange={(event) =>
                                            setGraduayear(event.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className='edu-bottom'>
                                <div className='edu-khoa'>
                                    <select
                                        name='faculty'
                                        id=''
                                        value={faculty}
                                        onChange={(event) =>
                                            setFaculty(event.target.value)
                                        }>
                                        <option value='- Khoa -'>
                                            - Khoa -
                                        </option>
                                        <option value='Cơ khí'>Cơ khí</option>
                                        <option value='Công nghệ thông tin'>
                                            Công nghệ thông tin
                                        </option>
                                        <option value='Điện - Điện tử'>
                                            Điện - Điện tử
                                        </option>
                                        <option value='Điện tử viễn thông'>
                                            Điện tử viễn thông
                                        </option>
                                        <option value='Khác'>Khác</option>
                                        <option value='Toán tin'>
                                            Toán tin
                                        </option>
                                    </select>
                                </div>
                                <div className='edu-score'>
                                    <input
                                        type='text'
                                        name='graduate_year'
                                        placeholder='Điểm trung bình hệ số 4'
                                        value={GPA}
                                        onChange={(event) =>
                                            setGPA(event.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='form-language'>
                    <div className='language'>
                        <b>Ngoại ngữ</b>
                        <div className='content-language'>
                            <div className='english'>
                                <label>
                                    <input
                                        type='checkbox'
                                        name='foreign_english'
                                        value='Tiếng Anh'
                                        onChange={(event) =>
                                            setForeignlanguage(
                                                event.target.value
                                            )
                                        }
                                    />
                                    <span>Tiếng Anh</span>
                                </label>
                            </div>
                            <div className='japanese'>
                                <label>
                                    <input
                                        type='checkbox'
                                        name='foreign_japanese'
                                        value='Tiếng Nhật'
                                        onChange={(event) =>
                                            setForeignlanguage(
                                                event.target.value
                                            )
                                        }
                                    />
                                    <span>Tiếng Nhật</span>
                                </label>
                            </div>
                        </div>
                        <div className='certificate'>
                            <b>Chứng chỉ ngoại ngữ</b>
                            <span>
                                <input
                                    type='text'
                                    name='experience'
                                    placeholder='Chứng chỉ ngoại ngữ'
                                    value={certificate}
                                    onChange={(event) =>
                                        setCertificate(event.target.value)
                                    }
                                />
                            </span>
                        </div>
                    </div>
                    <div className='skill'>
                        <div className='skill-work'>
                            <b>Kỹ năng công việc</b>
                        </div>
                        <select
                            name='technology'
                            id=''
                            value={idTechnology}
                            onChange={(event) =>
                                setIdTechnology(event.target.value)
                            }>
                            <option value=''>-- Chọn công nghệ --</option>
                            {technologyOption.map((technology, index) => (
                                <option key={index} value={technology.id}>
                                    {technology.name}
                                </option>
                            ))}
                        </select>
                        <div className='diff-skill'>
                            <input
                                type='text'
                                placeholder='Kỹ năng khác'
                                value={otherskill}
                                onChange={(event) =>
                                    setOtherskill(event.target.value)
                                }
                            />
                            {/* <button>
            <i class="fa-light fa-minus"></i>
            </button> */}
                        </div>
                        <select
                            name='work_type'
                            id=''
                            className='work-type'
                            value={wroktime}
                            onChange={(event) =>
                                setWroktime(event.target.value)
                            }>
                            <option value='- Hình thức -'>- Hình thức -</option>
                            <option value='Full time'>Full time</option>
                            <option value='Part time'>Part time</option>
                        </select>
                    </div>
                </div>
                <div className='form-work'>
                    <div className='work'>
                        <b>Hồ sơ công việc</b>
                        <input
                            type='text'
                            name='profile_url'
                            placeholder='Link hồ sơ trực tuyến'
                            value={profilelink}
                            onChange={(event) =>
                                setProfilelink(event.target.value)
                            }
                        />
                        <div className='link'>
                            {/* <button>Chọn file đính kèm</button> */}
                            <input
                                id='profile'
                                type='file'
                                onChange={handleProfileChange}
                            />
                            <span>
                                Attachment format: .doc, .docx, .pdf, .jpeg
                            </span>
                        </div>
                    </div>
                </div>
                <div className='bottom-button'>
                    <input type='submit' value='Đăng ký' />
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
