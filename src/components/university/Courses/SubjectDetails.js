import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function SubjectDetails() {
    const [courseData, setCourseData] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        fetch('https://dev.api.millatumidi.uz:9090/courseinfo/coursecode/' + id)
            .then((response) => response.json())
            .then((reply) => {
                setCourseData(reply.data);
            })
            .catch((error) => {
                console.error('Error fetching course information:', error);
            });
    }, [id]);
    return (
        <div className="container">
            <div className="subject-details__card">
                <header className="text-center mt-5">
                    <h1 className="subject-title">{courseData?.title}</h1>
                    <p><b>Course code: {courseData?.courseCode}</b></p>
                </header>
                <table className="styled-table">
                    <thead>
                    <tr>
                        <th>Level</th>
                        <th>Year</th>
                        <th>Semester</th>
                        <th>ECTS Credits</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{courseData?.level}</td>
                        <td>{courseData?.year}</td>
                        <td>{courseData?.semester}</td>
                        <td>{courseData?.ectscredits}</td>
                    </tr>
                    </tbody>
                </table>

                <table className="styled-table">
                    <thead>
                    <tr>
                        <th colSpan={2}>Lecturer</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan={2} className="text-left">
                            {courseData?.courseCoordinator}
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table className="styled-table">
                    <thead>
                    <tr>
                        <th colSpan={2}>Language of Instruction</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan={2} className="text-left">
                            {courseData?.taughtLanguage}
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table className="styled-table">
                    <thead>
                    <tr>
                        <th colSpan={2}>Course Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan={2} className="text-left">
                            {courseData?.description}
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table className="styled-table">
                    <thead>
                    <tr>
                        <th colSpan={2}>Course Objectives</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan={2} className="text-left">
                            {courseData?.objectives.map(data => {
                                return <div key={data}>{data}</div>
                            })}
                        </td>
                    </tr>
                    </tbody>
                </table>

                <em className="pl-20"><b>Teaching/Assessment</b></em>

                <table className="styled-table">
                    <thead>
                    <tr>
                        <th colSpan={2}>Teaching methods</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan={2} className="text-left">
                            {courseData?.teachingMethods.map(data => {
                                return <div key={data}>{JSON.stringify(data)}</div>
                            })}
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table className="styled-table">
                    <thead>
                    <tr>
                        <th colSpan={2}>Student Assessment Methods</th>
                    </tr>
                    </thead>
                    <tbody>
                    {courseData?.studentAssessmentMethods.map(data => (
                        <tr key={data.name}>
                            <td>{data.name}</td>
                            <td>{data.value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <table className="styled-table">
                    <thead>
                    <tr>
                        <th colSpan={2}>Learning Outcomes</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan={2} className="text-left">
                            {courseData?.learningOutcomes}
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table className="styled-table">
                    <thead>
                    <tr>
                        <th colSpan={2}>Required Textbook(s)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan={2} className="text-left">
                            {courseData?.requirementTextBooks}
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table className="styled-table">
                    <thead>
                    <tr>
                        <th colSpan={2}>Recommended Resources</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan={2} className="text-left">
                            {courseData?.recommendedRecourses}
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div className="course-content">
                    <div className="course-content__box">
                        <div className="course-content__text">
                            <em className="course-content__title"><b>Course Content:</b></em>
                            <br/>
                            {courseData?.contents.map(data => {
                                return <div key={data}>{data}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubjectDetails;
