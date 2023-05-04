import React from "react";
import { childrenProps } from "../interface";
import Header from "../../components/Header";
const JPAcademyLayout: React.FC<childrenProps> = ({
    children,
}): React.ReactElement => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default JPAcademyLayout;
