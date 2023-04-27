import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { IoMdCreate } from "react-icons/io";
import api from "../../../config/axios";
import "./index.style.scss";

interface NewJob {
    id: number;
    title: string;
    poster: string;
}

const AdminNewPage: React.FC = () => {
    const [news, setNews] = useState<NewJob[]>([]);

    useEffect(() => {
        const getUploadedNews = () => {
            api.get<NewJob[]>("/news")
                .then((res) => {
                    setNews(res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        };
        getUploadedNews();
    }, []);

    const handleDelete = async () => {
        if (window.confirm("Bạn có chắc là muốn xoá bài viết không?")) {
            await api
                .put("/admin/news/changeStatus", {
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
        <div className='news-container'>
            <Helmet>
                <title>Admin - Tin tức</title>
            </Helmet>
            <div className='news-wrapper'>
                {/* uncomment cái này để test api */}
                <>
                    {news.map((item) => {
                        return (
                            <>
                                <Link to='/admin/news/content'>
                                    <button className='create-content-btn'>
                                        <IoMdCreate />
                                    </button>
                                </Link>
                                <table>
                                    <thead className='t-heading'>
                                        <tr>
                                            <th>ID</th>
                                            <th>Tiêu đề</th>
                                            <th>Nội dung</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody key={item.id} className='t-content'>
                                        <tr>
                                            <td className='c'>{item.id}</td>
                                            <td className='c'>{item.title}</td>
                                            <td className='c'>{item.poster}</td>
                                            <td className=' c-action'>
                                                <div className='action-grp'>
                                                    <Link
                                                        to={`/admin/news/content/${item.id}`}>
                                                        <button className='btn update-btn'>
                                                            Sửa
                                                        </button>
                                                    </Link>
                                                    <button
                                                        className='btn delete-btn'
                                                        onClick={handleDelete}>
                                                        Xoá
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        );
                    })}
                </>
                {/* nếu test thành công thì xoá cái này */}
                <>
                    <Link to='/admin/news/content'>
                        <button className='create-content-btn'>
                            <IoMdCreate />
                        </button>
                    </Link>
                    <table>
                        <thead className='t-heading'>
                            <tr>
                                <th>ID</th>
                                <th>Tiêu đề</th>
                                <th>Nội dung</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='t-content'>
                            <tr>
                                <td className='c'>1</td>
                                <td className='c'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quam quis molestias ut
                                    delectus eaque architecto quae cumque ipsum
                                    nam quibusdam ea laboriosam maiores, quos
                                    fugit dolor. Soluta repellat inventore
                                    perferendis.
                                </td>
                                <td className='c'>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Delectus provident fugit
                                    iste incidunt amet mollitia assumenda autem
                                    fuga, aliquid officia a vero ullam
                                    distinctio exercitationem placeat atque
                                    minima voluptas veniam! Quisquam magni
                                    veniam illo dignissimos omnis fugiat
                                    accusamus minus, impedit eius vel nobis
                                    animi. Ducimus consequuntur molestiae saepe
                                    eius eveniet, illo possimus quae dolores
                                    neque. Corporis in nulla consequuntur quis.
                                    Pariatur veniam, repellat, dolorem tempore
                                    eos dolore dolor, nihil officia fugiat ut
                                    itaque repudiandae eaque officiis quo
                                    accusamus. Repellat fugiat ex eum cumque
                                    corporis soluta temporibus itaque nesciunt
                                    eveniet ullam?
                                </td>
                                <td className=' c-action'>
                                    <div className='action-grp'>
                                        <Link to='/admin/news/content/:id'>
                                            <button className='btn update-btn'>
                                                Sửa
                                            </button>
                                        </Link>
                                        <button
                                            className='btn delete-btn'
                                            onClick={handleDelete}>
                                            Xoá
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
                {/* // */}
            </div>
        </div>
    );
};

export default AdminNewPage;
