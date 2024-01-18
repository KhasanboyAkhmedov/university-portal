import React from 'react'

const Blog = () => {
  return (
    <>
        <div className="card">
            <div className="card-body">
                <div className="new_post">
                    <div className="form-group">
                        <textarea rows="4" className="form-control no-resize" placeholder="Please type what you want..."></textarea>
                    </div>
                    <div className="mt-4 text-right">
                        <button className="mr-1 btn btn-warning"><i className="icon-link"></i></button>
                        <button className="mr-1 btn btn-warning"><i className="icon-camera"></i></button>
                        <button className="btn btn-primary">Post</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="card blog_single_post">
                    <div className="img-post">
                        <img className="d-block img-fluid" src="../assets/images/gallery/6.jpg" alt="First slide" />
                    </div>
                    <div className="card-body">
                        <h4><a href>All photographs are accurate</a></h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                    </div>
                    <div className="footer">
                        <div className="actions">
                            <a href className="btn btn-outline-secondary">Continue Reading</a>
                        </div>
                        <ul className="stats list-unstyled">
                            <li><a href>General</a></li>
                            <li><a href className="icon-heart"> 28</a></li>
                            <li><a href className="icon-bubbles"> 128</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card blog_single_post">
                    <div className="img-post">
                        <img className="d-block img-fluid" src="../assets/images/gallery/4.jpg" alt="First slide" />
                    </div>
                    <div className="card-body">
                        <h4><a href>All photographs are accurate</a></h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                    </div>
                    <div className="footer">
                        <div className="actions">
                            <a href className="btn btn-outline-secondary">Continue Reading</a>
                        </div>
                        <ul className="stats list-unstyled">
                            <li><a href>General</a></li>
                            <li><a href className="icon-heart"> 28</a></li>
                            <li><a href className="icon-bubbles"> 128</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card blog_single_post">
                    <div className="img-post">
                        <img className="d-block img-fluid" src="../assets/images/gallery/1.jpg" alt="First slide" />
                    </div>
                    <div className="card-body">
                        <h4><a href>All photographs are accurate</a></h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                    </div>
                    <div className="footer">
                        <div className="actions">
                            <a href className="btn btn-outline-secondary">Continue Reading</a>
                        </div>
                        <ul className="stats list-unstyled">
                            <li><a href>General</a></li>
                            <li><a href className="icon-heart"> 28</a></li>
                            <li><a href className="icon-bubbles"> 128</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card blog_single_post">
                    <div className="img-post">
                        <img className="d-block img-fluid" src="../assets/images/gallery/2.jpg" alt="First slide" />
                    </div>
                    <div className="card-body">
                        <h4><a href>All photographs are accurate</a></h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                    </div>
                    <div className="footer">
                        <div className="actions">
                            <a href className="btn btn-outline-secondary">Continue Reading</a>
                        </div>
                        <ul className="stats list-unstyled">
                            <li><a href>General</a></li>
                            <li><a href className="icon-heart"> 28</a></li>
                            <li><a href className="icon-bubbles"> 128</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog