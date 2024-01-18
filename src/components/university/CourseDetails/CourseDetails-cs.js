import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function CourseDetailsCS() {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const [empdata, empdatachange] = useState(null);

    useEffect(() => {
        fetch('https://dev.api.millatumidi.uz:9090/courseinfo')
            .then((response) => response.json())
            .then((response) => {
                empdatachange(response)
            })
            .catch((error) => {
                console.error('Error fetching course information:', error);
            });
    }, []);

    return (
        <>
            <div className="section-body">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="header-action">
                            <h1 className="page-title">Courses Details</h1>
                            <ol className="breadcrumb page-breadcrumb">
                                <li className="breadcrumb-item"><span>MU University</span></li>
                                <li className="breadcrumb-item"><Link to="/courses">Courses</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Details</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-body mt-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-12">
                            <div className="card">
                                <a href="#"><img className="card-img-top" src="../../../assets/images/gallery/cs.png" alt="" /></a>
                                <div className="card-body d-flex flex-column">
                                    <h5>Computer Science (Software Engineering)</h5>
                                    <div className="text-muted">Undergraduate Program</div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex align-items-center mt-auto">
                                        <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar4.jpg" alt="avatar" />
                                        <div>
                                            <a href="#">M. Pirnazarov</a>
                                            <small className="d-block text-muted">Head OF Dept.</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 col-md-12">
                            <div className="card">
                                <h4 className="text-center">Subjects</h4>
                                <div>
                                    <Link className="btn btn-success">Add New Subject (+)</Link>
                                </div>
                                <table className="table table-bordered mb-40">
                                    <thead>
                                    <tr>
                                        <th className="text-center" colSpan="12">SEMESTER I</th>
                                    </tr>
                                    </thead>
                                    <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Course Name</th>
                                        <th>GLH</th>
                                        <th>T</th>
                                        <th>P</th>
                                        <th>ECTS</th>
                                        <th>Edit</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>CS0001</td>
                                        <td>
                                            <Link to={{
                                                pathname: '/subjectDetails/CS0001',
                                            }}>
                                                Test Subject
                                            </Link>
                                        </td>
                                        <td>60</td>
                                        <td>4</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>
                                            <Link to="/subjectEdit/CS0001" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></Link>
                                        </td>
                                        <td>
                                            <Link to="#" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>CSC1010</td>
                                        <td>
                                            <Link to={{
                                                pathname: '/subjectDetails/CSC1010',
                                            }}>
                                                Introduction to Programming - 1
                                            </Link>
                                        </td>
                                        <td>60</td>
                                        <td>4</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>
                                            <Link to="/subjectEdit/CSC1010" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></Link>
                                        </td>
                                        <td>
                                            <Link to="#" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>BA1105</td>
                                        <td>
                                            <Link to={{
                                                pathname: '/subjectDetails/BA1105',
                                            }}>
                                                English for Academic Purposes (EAP)
                                            </Link>
                                        </td>
                                        <td>80</td>
                                        <td>4</td>
                                        <td>6</td>
                                        <td>8</td>
                                        <td>
                                            <Link to="/subjectEdit/BA1105" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></Link>
                                        </td>
                                        <td>
                                            <Link to="#" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>CSC1012</td>
                                        <td>
                                            <Link to={{
                                                pathname: '/subjectDetails/CSC1012',

                                            }}>
                                                Maths for Engineering, Science & Technology-1
                                            </Link>
                                        </td>
                                        <td>100</td>
                                        <td>4</td>
                                        <td>6</td>
                                        <td>10</td>
                                        <td>
                                            <Link to="/subjectEdit/CSC1012" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></Link>
                                        </td>
                                        <td>
                                            <Link to="#" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>CSC1014</td>
                                        <td>
                                            <Link to={{
                                                pathname: '/subjectDetails/CSC1014',

                                            }}>
                                                Introduction to IT
                                            </Link>
                                        </td>
                                        <td>60</td>
                                        <td>4</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>
                                            <Link to="/subjectEdit/CSC1014" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></Link>
                                        </td>
                                        <td>
                                            <Link to="#" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></Link>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseDetailsCS;
