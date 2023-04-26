import React from "react";
import { childrenProps } from "../interface";
import Header from "../../components/Header";
import JPAcademyFooter from "../../components/Footer/jpa";
const JPAcademyLayout: React.FC<childrenProps> = ({
    children,
}): React.ReactElement => {
    return (
        <>
            <Header />
            {children}
            <JPAcademyFooter />
        </>
    );
};

export default JPAcademyLayout;
