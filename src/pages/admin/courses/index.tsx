import React, { useEffect, useState } from "react";
import api from "../../../config/axios";
import { Link } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";
import "./index.style.scss";

type CourseTable = {
    id: number;
    title: string;
    start_date: string;
    location: string;
    course_date: string;
    time: number;
    max_slot: number;
};
const AdminCoursesPage: React.FC = () => {
    const [courses, setCoures] = useState<CourseTable[]>([]);

    useEffect(() => {
        const getCourseList = () => {
            api.get<CourseTable[]>("/courses")
                .then((res) => {
                    setCoures(res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        };

        getCourseList();
    }, []);

    const handleDelete = async () => {
        if (window.confirm("Bạn có chắc là muốn xoá bài viết không?")) {
            await api
                .put("/admin/courses/changeStatus", {
                    status: "hidden",
                })
                .then(() => {
                    alert("Đã xoá");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    return (
        <div className='course-container'>
            <div className='course-wrapper'>
                <Link to='content'>
                    <button className='create-content-btn'>
                        <IoMdCreate />
                    </button>
                </Link>
                <table className='course-table'>
                    <thead className='t-heading'>
                        <tr>
                            <td>ID</td>
                            <td>Khoá học</td>
                            <td>Khai giảng</td>
                            <td>Khu vực</td>
                            <td>Lịch học</td>
                            <td>Số giờ</td>
                            <td>Học viên</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody className='t-content'>
                        <tr>
                            <td className='c'>1</td>
                            <td className='c'>
                                [HN] Fullstack Java Web Developer
                            </td>
                            <td className='c'>26-04-2023</td>
                            <td className='c'> Hà Nội</td>
                            <td className='c'> 18h00 -21h00 Thứ 2,4,6</td>
                            <td className='c'>216 giờ</td>
                            <td className='c'>15</td>
                            <td className='c-action'>
                                <button className='btn update-btn'>Sửa</button>
                                <button className='btn delete-btn'>Xoá</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminCoursesPage;
