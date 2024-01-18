import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function SubjectEdit() {
    const { id } = useParams();
    const [courseCode, setCourseCode] = useState("");
    const [title, setTitle] = useState("");
    const [level, setLevel] = useState("");
    const [year, setYear] = useState("");
    const [semester, setSemester] = useState("");
    const [courseCoordinator, setCourseCoordinator] = useState("");
    const [status, setStatus] = useState("");
    const [taughtLanguage, setTaughtLanguage] = useState("");
    const [description, setDescription] = useState("");
    const [objectives, setObjectives] = useState("");
    const [contents, setContents] = useState("");
    const [teachingMethods, setTeachingMethods] = useState("");
    const [requirementTextBooks, setRequirementTextBooks] = useState("");
    const [recommendedRecourses, setRecommendedRecourses] = useState("");
    const [studentAssessmentMethods, setStudentAssessmentMethods] = useState("");
    const [learningOutcomes, setLearningOutcomes] = useState("");
    const [workLoad, setWorkLoad] = useState("");
    const [ectscredits, setEctscredits] = useState("");
    const [data, setData] = useState({
        courseCode: "",
        title: "",
        level: "",
        year: "",
        semester: "",
        courseCoordinator: "",
        status: "",
        taughtLanguage: "",
        description: "",
        objectives: "",
        contents: "",
        teachingMethods: "",
        requirementTextBooks: "",
        recommendedRecourses: "",
        studentAssessmentMethods: "",
        learningOutcomes: "",
        workLoad: "",
        ectscredits: "",
    });

    useEffect(() => {
        fetch('https://dev.api.millatumidi.uz:9090/courseinfo/coursecode/' + id)
            .then((response) => response.json())
            .then((reply) => {
                setData(reply.data);
                setCourseCode(reply.data.courseCode);
                setTitle(reply.data.title);
                setLevel(reply.data.level);
                setYear(reply.data.year);
                setSemester(reply.data.semester);
                setCourseCoordinator(reply.data.courseCoordinator);
                setStatus(reply.data.status);
                setTaughtLanguage(reply.data.taughtLanguage);
                setDescription(reply.data.description);
                setObjectives(reply.data.objectives);
                setContents(reply.data.contents);
                setTeachingMethods(reply.data.teachingMethods);
                setRequirementTextBooks(reply.data.requirementTextBooks);
                setRecommendedRecourses(reply.data.recommendedRecourses);
                setStudentAssessmentMethods(reply.data.studentAssessmentMethods);
                setLearningOutcomes(reply.data.learningOutcomes);
                setWorkLoad(reply.data.workLoad);
                setEctscredits(reply.data.ectscredits);
            })
            .catch((error) => {
                console.error('Error fetching course information:', error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const empdata = {
            courseCode,
            title,
            level,
            year,
            semester,
            courseCoordinator,
            status,
            taughtLanguage,
            description,
            objectives,
            contents,
            teachingMethods,
            requirementTextBooks,
            recommendedRecourses,
            studentAssessmentMethods,
            learningOutcomes,
            workLoad,
            ectscredits,
        };

        const token = localStorage.getItem('token');
        if (!token) {
            // Redirect the user to the login page or handle unauthorized access as needed
            // For example, you can use react-router-dom to navigate to the login page:
            // history.push('/login');
            alert("No token received in login response");
            return;
        }

        fetch(`https://dev.api.millatumidi.uz:9090/courseinfo/` + id, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(empdata),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                alert("Saved succe  ssfully!");
            })
            .catch((error) => {
                console.error('Error saving data:', error);
                alert("Error saving data. Please try again.");
            });
    };

    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="card-title text-center">Edit Page</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Course title</label>
                                        <input
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Course code:</label>
                                        <input
                                            value={courseCode}
                                            onChange={(e) => setCourseCode(e.target.value)}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Level</label>
                                        <input
                                            value={level}
                                            onChange={(e) => setLevel(e.target.value)}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Year</label>
                                        <input
                                            value={year}
                                            onChange={(e) => setYear(e.target.value)}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Semester</label>
                                        <input
                                            value={semester}
                                            onChange={(e) => setSemester(e.target.value)}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">ECTS</label>
                                        <input
                                            value={ectscredits}
                                            onChange={(e) => setEctscredits(e.target.value)}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Lecturer</label>
                                        <input
                                            value={courseCoordinator}
                                            onChange={(e) => setCourseCoordinator(e.target.value)}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Language of Instruction</label>
                                        <input
                                            value={taughtLanguage}
                                            onChange={(e) => setTaughtLanguage(e.target.value)}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Course Description</label>
                                        <input
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Course Objectives</label>
                                        <input
                                            value={objectives}
                                            onChange={(e) => setObjectives(e.target.value)}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Teaching methods</label>
                                        <input
                                            value={teachingMethods}
                                            onChange={(e) => setTeachingMethods(e.target.value)}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Student Assessment Methods</label>
                                        <input
                                            value={studentAssessmentMethods}
                                            onChange={(e) => setStudentAssessmentMethods(e.target.value)}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Learning Outcomes</label>
                                        <input
                                            value={learningOutcomes}
                                            onChange={(e) => setLearningOutcomes(e.target.value)}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Required Textbook(s)</label>
                                        <input
                                            value={requirementTextBooks}
                                            onChange={(e) => setRequirementTextBooks(e.target.value)}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Recommended Resources</label>
                                        <input
                                            value={recommendedRecourses}
                                            onChange={(e) => setRecommendedRecourses(e.target.value)}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="">Course Content:</label>
                                        <input
                                            value={contents}
                                            onChange={(e) => setContents(e.target.value)}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit">Save</button>
                                        <Link to="/courses" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SubjectEdit;

// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
//
// function SubjectEdit() {
//     const { id } = useParams();
//
//     const [courseCode, setCourseCode] = useState("");
//     const [title, setTitle] = useState("");
//     const [level, setLevel] = useState("");
//     const [year, setYear] = useState("");
//     const [semester, setSemester] = useState("");
//     const [courseCoordinator, setCourseCoordinator] = useState("");
//     const [status, setStatus] = useState("");
//     const [taughtLanguage, setTaughtLanguage] = useState("");
//     const [description, setDescription] = useState("");
//     const [objectives, setObjectives] = useState("");
//     const [contents, setContents] = useState("");
//     const [teachingMethods, setTeachingMethods] = useState("");
//     const [requirementTextBooks, setRequirementTextBooks] = useState("");
//     const [recommendedRecourses, setRecommendedRecourses] = useState("");
//     const [studentAssessmentMethods, setStudentAssessmentMethods] = useState("");
//     const [learningOutcomes, setLearningOutcomes] = useState("");
//     const [workLoad, setWorkLoad] = useState("");
//     const [ectscredits, setEctscredits] = useState("");
//     const [data, setData] = useState({
//         courseCode: "",
//         title: "",
//         level: "",
//         year: "",
//         semester: "",
//         courseCoordinator: "",
//         status: "",
//         taughtLanguage: "",
//         description: "",
//         objectives: "",
//         contents: "",
//         teachingMethods: "",
//         requirementTextBooks: "",
//         recommendedRecourses: "",
//         studentAssessmentMethods: "",
//         learningOutcomes: "",
//         workLoad: "",
//         ectscredits: "",
//     });
//
//     useEffect(() => {
//         fetch('https://dev.api.millatumidi.uz:9090/courseinfo/coursecode/' + id)
//             .then((response) => response.json())
//             .then((reply) => {
//                 setData(reply.data);
//                 setCourseCode(reply.data.courseCode);
//                 setTitle(reply.data.title);
//                 setLevel(reply.data.level);
//                 setYear(reply.data.year);
//                 setSemester(reply.data.semester);
//                 setCourseCoordinator(reply.data.courseCoordinator);
//                 setStatus(reply.data.status);
//                 setTaughtLanguage(reply.data.taughtLanguage);
//                 setDescription(reply.data.description);
//                 setObjectives(reply.data.objectives);
//                 setContents(reply.data.contents);
//                 setTeachingMethods(reply.data.teachingMethods);
//                 setRequirementTextBooks(reply.data.requirementTextBooks);
//                 setRecommendedRecourses(reply.data.recommendedRecourses);
//                 setStudentAssessmentMethods(reply.data.studentAssessmentMethods);
//                 setLearningOutcomes(reply.data.learningOutcomes);
//                 setWorkLoad(reply.data.workLoad);
//                 setEctscredits(reply.data.ectscredits);
//             })
//             .catch((error) => {
//                 console.error('Error fetching course information:', error);
//             });
//     }, [id]);
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         try {
//             // Step 1: Placeholder for obtaining the dynamic token (replace with actual authentication)
//             const authItem = {
//                 email: '',
//                 password: '',
//             };
//
//             const authResponse = await fetch('https://dev.api.millatumidi.uz:9090/users/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Accept: 'application/json',
//                 },
//                 body: JSON.stringify(authItem),
//             });
//
//             if (!authResponse.ok) {
//                 const errorResponse = await authResponse.json();
//                 console.error('Authentication Error:', errorResponse);
//                 throw new Error(`Authentication failed! Status: ${authResponse.status}`);
//             }
//
//             const authResult = await authResponse.json();
//             const token = authResult.token;
//
//             // Step 2: Use the obtained token to make the data update request
//             const empdata = {
//                 courseCode,
//                 title,
//                 level,
//                 year,
//                 semester,
//                 courseCoordinator,
//                 status,
//                 taughtLanguage,
//                 description,
//                 objectives,
//                 contents,
//                 teachingMethods,
//                 requirementTextBooks,
//                 recommendedRecourses,
//                 studentAssessmentMethods,
//                 learningOutcomes,
//                 workLoad,
//                 ectscredits,
//             };
//
//             const updateResponse = await fetch(`https://dev.api.millatumidi.uz:9090/courseinfo/` + id, {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`,
//                 },
//                 body: JSON.stringify(empdata),
//             });
//
//             if (!updateResponse.ok) {
//                 throw new Error(`HTTP error! Status: ${updateResponse.status}`);
//             }
//
//             const updateData = await updateResponse.json();
//             alert('Saved successfully!');
//         } catch (error) {
//             console.error('Error:', error);
//             alert('Error saving data. Please try again.');
//         }
//     }
//
//     return (
//         <div className="row">
//             <div className="offset-lg-3 col-lg-6">
//                 <form className="container" onSubmit={handleSubmit}>
//                     <div className="card">
//                         <div className="card-title text-center">Edit Page</div>
//                         <div className="card-body">
//                             <div className="row">
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label htmlFor="">Course title</label>
//                                         <input
//                                             value={title}
//                                             onChange={(e) => setTitle(e.target.value)}
//                                             type="text"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label htmlFor="">Course code:</label>
//                                         <input
//                                             value={courseCode}
//                                             onChange={(e) => setCourseCode(e.target.value)}
//                                             type="text"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label htmlFor="">Level</label>
//                                         <input
//                                             value={level}
//                                             onChange={(e) => setLevel(e.target.value)}
//                                             type="text"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label htmlFor="">Year</label>
//                                         <input
//                                             value={year}
//                                             onChange={(e) => setYear(e.target.value)}
//                                             type="text"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label htmlFor="">Semester</label>
//                                         <input
//                                             value={semester}
//                                             onChange={(e) => setSemester(e.target.value)}
//                                             type="text"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label htmlFor="">ECTS</label>
//                                         <input
//                                             value={ectscredits}
//                                             onChange={(e) => setEctscredits(e.target.value)}
//                                             type="text"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label htmlFor="">Lecturer</label>
//                                         <input
//                                             value={courseCoordinator}
//                                             onChange={(e) => setCourseCoordinator(e.target.value)}
//                                             type="text"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label htmlFor="">Language of Instruction</label>
//                                         <input
//                                             value={taughtLanguage}
//                                             onChange={(e) => setTaughtLanguage(e.target.value)}
//                                             type="text"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label htmlFor="">Course Description</label>
//                                         <input
//                                             value={description}
//                                             onChange={(e) => setDescription(e.target.value)}
//                                             type="text"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label htmlFor="">Course Objectives</label>
//                                         <input
//                                             value={objectives}
//                                             onChange={(e) => setObjectives(e.target.value)}
//                                             type="text"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label htmlFor="">Teaching methods</label>
//                                         <input
//                                             value={teachingMethods}
//                                             onChange={(e) => setTeachingMethods(e.target.value)}
//                                             type="text"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label htmlFor="">Student Assessment Methods</label>
//                                         <input
//                                             value={studentAssessmentMethods}
//                                             onChange={(e) => setStudentAssessmentMethods(e.target.value)}
//                                             type="text"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label htmlFor="">Learning Outcomes</label>
//                                         <input
//                                             value={learningOutcomes}
//                                             onChange={(e) => setLearningOutcomes(e.target.value)}
//                                             type="text"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label htmlFor="">Required Textbook(s)</label>
//                                         <input
//                                             value={requirementTextBooks}
//                                             onChange={(e) => setRequirementTextBooks(e.target.value)}
//                                             type="text"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label htmlFor="">Recommended Resources</label>
//                                         <input
//                                             value={recommendedRecourses}
//                                             onChange={(e) => setRecommendedRecourses(e.target.value)}
//                                             type="text"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label htmlFor="">Course Content:</label>
//                                         <input
//                                             value={contents}
//                                             onChange={(e) => setContents(e.target.value)}
//                                             type="text"
//                                             className="form-control"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12">
//                                     <div className="form-group">
//                                         <button className="btn btn-success" type="submit">Save</button>
//                                         <Link to="/courses" className="btn btn-danger">Back</Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }
//
// export default SubjectEdit;
