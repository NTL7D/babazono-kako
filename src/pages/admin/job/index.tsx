import React, { useEffect, useState } from "react";
import { IoMdCreate } from "react-icons/io";
import "./index.style.scss";
import { Link, useParams } from "react-router-dom";
import api from "../../../config/axios";

interface JobTable {
    id: number;
    title: string;
    city: string;
    date: string;
}

const AdminJobPages: React.FC = () => {
    const [jobs, setJobs] = useState<JobTable[]>([]);

    useEffect(() => {
        const getJobList = () => {
            api.get<JobTable[]>("/jobs")
                .then((res) => {
                    setJobs(res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        };

        getJobList();
    }, []);

    const handleDelete = async () => {
        if (window.confirm("Bạn có chắc là muốn xoá bài viết không?")) {
            await api
                .put("/admin/jobs/changeStatus", {
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
        <div className='jobs-container'>
            <div className='jobs-wrapper'>
                {/* uncomment cái này để test api */}
                {/* <>
                    {jobs.map((item) => {
                        return (
                            <>
                                <Link to='/admin/jobs/content'>
                                    <button className='create-content-btn'>
                                        <IoMdCreate />
                                    </button>
                                </Link>
                                <table className='jobs-table'>
                                    <thead className='t-heading'>
                                        <tr>
                                            <th>ID</th>
                                            <th>Tên công việc</th>
                                            <th>Địa điểm</th>
                                            <th>Thời hạn</th>
                                            <th>Loại</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody key={item.id} className='t-content'>
                                        <tr>
                                            <td className='c'>{item.id}</td>
                                            <td className='c'>{item.title}</td>
                                            <td className='c'>{item.city}</td>
                                            <td className='c'>{item.date}</td>
                                            <td className='c-action'>
                                                <Link
                                                    to={`/admin/jobs/content/${item.id}`}>
                                                    <button className='btn update-btn'>
                                                        Sửa
                                                    </button>
                                                </Link>
                                                <button
                                                    className='btn delete-btn'
                                                    onClick={handleDelete}>
                                                    Xoá
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        );
                    })}
                </> */}
                {/* nếu test thành công thì xoá cái này */}
                <Link to='/admin/jobs/content'>
                    <button className='create-content-btn'>
                        <IoMdCreate />
                    </button>
                </Link>
                <table className='jobs-table'>
                    <thead className='t-heading'>
                        <tr>
                            <th>ID</th>
                            <th>Tên công việc</th>
                            <th>Địa điểm</th>
                            <th>Thời hạn</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='t-content'>
                        <tr>
                            <td className='c'>1</td>
                            <td className='c'>
                                Lập trình viên Java/ Springboot
                            </td>
                            <td className='c'>HCM</td>
                            <td className='c'>31/2/2023</td>
                            <td className='c-action'>
                                <Link to={`/admin/jobs/content/:id`}>
                                    <button className='btn update-btn'>
                                        Sửa
                                    </button>
                                </Link>
                                <button
                                    className='btn delete-btn'
                                    onClick={handleDelete}>
                                    Xoá
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* // */}
            </div>
        </div>
    );
};

export default AdminJobPages;
