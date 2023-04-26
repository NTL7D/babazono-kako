export type Option = {
    id: number;
    value: string;
    label: string;
}

export const CategoryOption: Option[] = [
    { id: 1, value: 'full', label: 'FULL TIME' },
    { id: 2, value: 'part', label: 'PART TIME' },

]

export const ExperienceOption: Option[] = [
    { id: 1, value: "no-exp", label: "Chưa có kinh nghiệm" },
    { id: 2, value: "1st-exp", label: "Kinh nghiệm < 1 năm" }
]

export const SkillOption: Option[] = [

    { id: 6, value: "embedded", label: "C/Embedded" },
    { id: 7, value: "tech", label: "Technical Consultant" },
    { id: 8, value: "other", label: "Khác" }

]

export const PositionOption: Option[] = [
    { id: 1, value: "full", label: "FULL TIME" },
    { id: 2, value: "part", label: "PART TIME" },
    { id: 3, value: "intr", label: "INTERNSHIP" },
    { id: 4, value: "ctv", label: "CTV" }
]

export const LocationOption: Option[] = [
    { id: 1, value: "HCM", label: "HCM" },
    { id: 2, value: "HN", label: "Hà Nội" }
]