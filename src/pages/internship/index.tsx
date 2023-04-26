import React from "react";
import InternshipIntroPage from "./intro";
import RegisterPage from "./register";

const InternshipPage: React.FC = () => {
    return (
        <div>
            <InternshipIntroPage />
            <RegisterPage />
        </div>
    );
};

export default InternshipPage;
