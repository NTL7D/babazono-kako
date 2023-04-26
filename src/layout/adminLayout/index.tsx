import React from "react";
import { childrenProps } from "../interface";
import Adminheader from "../../components/Header/admin";
import MainFooter from "../../components/Footer/primary";

const AdminLayout: React.FC<childrenProps> = ({
    children,
}): React.ReactElement => {
    return (
        <>
            <Adminheader />
            {children}
        </>
    );
};

export default AdminLayout;
