import React, { useState } from "react";
import {
    Option,
    CategoryOption,
    ExperienceOption,
    SkillOption,
    PositionOption,
    LocationOption,
} from "../option";
import Select from "react-select";

const TestPage = () => {
    const [category, setCategory] = useState<Option | null>(null);
    const [experience, setExperience] = useState<Option | null>(null);
    const [skill, setSkill] = useState<Option | null>(null);
    const [position, setPosition] = useState<Option | null>(null);
    const [location, setLocation] = useState<Option | null>(null);

    const handleCategorySelect = (option: Option | null) => {
        setCategory(option);
    };

    const handleExperienceSelect = (option: Option | null) => {
        setExperience(option);
    };

    const handleSkillSelect = (option: Option | null) => {
        setSkill(option);
    };

    const handlePositionsSelect = (option: Option | null) => {
        setPosition(option);
    };

    const handleLocationsSelect = (option: Option | null) => {
        setLocation(option);
    };

    return (
        <div>
            <Select
                options={CategoryOption}
                value={category}
                onChange={handleCategorySelect}
            />
            <Select
                options={ExperienceOption}
                value={experience}
                onChange={handleExperienceSelect}
            />
            <Select
                options={SkillOption}
                value={skill}
                onChange={handleSkillSelect}
            />
            <Select
                options={PositionOption}
                value={position}
                onChange={handlePositionsSelect}
                
            />
            <Select
                options={LocationOption}
                value={location}
                onChange={handleLocationsSelect}
            />
        </div>
    );
};

export default TestPage;
