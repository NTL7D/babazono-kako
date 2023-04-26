import React from "react";
import NewTextEditor from "./modules/new.editor";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const AdminCreateNewPage: React.FC = () => {
    const { id } = useParams();
    return (
        <div>
            <Helmet>
                {id ? (
                    <title>Admin - Sửa bài viết </title>
                ) : (
                    <title>Admin - Tạo bài viết mới</title>
                )}
            </Helmet>
            <NewTextEditor />
        </div>
    );
};

export default AdminCreateNewPage;
