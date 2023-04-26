import React from "react";
import Header from "../../components/Header";
import MainFooter from "../../components/Footer/primary";
import { childrenProps } from "../interface";

const DefaultLayout: React.FC<childrenProps> = ({
    children,
}): React.ReactElement => {
    return (
        <>
            <Header />
            {children}
            <MainFooter />
        </>
    );
};

export default DefaultLayout;
