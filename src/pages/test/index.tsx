import React, { useState } from "react";
import axios from "axios";

interface Session {
    title: string;
    lessons: string[];
}

const MyComponent: React.FC = () => {
    const [sessions, setSessions] = useState<Session[]>([
        { title: "", lessons: [""] },
    ]);

    const handleAddSession = () => {
        setSessions([...sessions, { title: "", lessons: [""] }]);
    };

    const handleAddLesson = (sessionIndex: number) => {
        const updatedSessions = [...sessions];
        updatedSessions[sessionIndex].lessons.push("");
        setSessions(updatedSessions);
    };

    const handleSessionTitleChange = (sessionIndex: number, title: string) => {
        const updatedSessions = [...sessions];
        updatedSessions[sessionIndex].title = title;
        setSessions(updatedSessions);
    };

    const handleLessonChange = (
        sessionIndex: number,
        lessonIndex: number,
        lesson: string
    ) => {
        const updatedSessions = [...sessions];
        updatedSessions[sessionIndex].lessons[lessonIndex] = lesson;
        setSessions(updatedSessions);
    };

    const handleRemoveSession = (sessionIndex: number) => {
        const updatedSessions = [...sessions];
        updatedSessions.splice(sessionIndex, 1);
        setSessions(updatedSessions);
    };

    const handleRemoveLesson = (sessionIndex: number, lessonIndex: number) => {
        const updatedSessions = [...sessions];
        updatedSessions[sessionIndex].lessons.splice(lessonIndex, 1);
        setSessions(updatedSessions);
    };

    const handleSubmit = () => {
        axios
            .post("/api/sessions", { sessions })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            {sessions.map((session, sessionIndex) => (
                <div key={sessionIndex}>
                    <p>Tên bài học</p>
                    <input
                        type='text'
                        value={session.title}
                        onChange={(event) =>
                            handleSessionTitleChange(
                                sessionIndex,
                                event.target.value
                            )
                        }
                    />
                    {session.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex}>
                            <p>Tên nội dung</p>
                            <input
                                type='text'
                                value={lesson}
                                onChange={(event) =>
                                    handleLessonChange(
                                        sessionIndex,
                                        lessonIndex,
                                        event.target.value
                                    )
                                }
                            />
                            <button
                                onClick={() =>
                                    handleRemoveLesson(
                                        sessionIndex,
                                        lessonIndex
                                    )
                                }>
                                Remove Lesson
                            </button>
                        </div>
                    ))}
                    <button onClick={() => handleAddLesson(sessionIndex)}>
                        Add Lesson
                    </button>
                    <button onClick={() => handleRemoveSession(sessionIndex)}>
                        Remove Session
                    </button>
                </div>
            ))}
            <button onClick={handleAddSession}>Add Session</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default MyComponent;
