import React from 'react'

const Activity = () => {
  return (
    <>
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Activity</h3>
                <div className="card-options">
                    <a href className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                    <a href className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
                    <a href className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                    <div className="item-action dropdown ml-2">
                        <a href data-toggle="dropdown"><i className="fe fe-more-vertical"></i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href className="dropdown-item"><i className="dropdown-icon fa fa-eye"></i> View Details </a>
                            <a href className="dropdown-item"><i className="dropdown-icon fa fa-share-alt"></i> Share </a>
                            <a href className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download"></i> Download</a>
                            <div className="dropdown-divider"></div>
                            <a href className="dropdown-item"><i className="dropdown-icon fa fa-copy"></i> Copy to</a>
                            <a href className="dropdown-item"><i className="dropdown-icon fa fa-folder"></i> Move to</a>
                            <a href className="dropdown-item"><i className="dropdown-icon fa fa-edit"></i> Rename</a>
                            <a href className="dropdown-item"><i className="dropdown-icon fa fa-trash"></i> Delete</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="timeline_item ">
                    <img className="tl_avatar" src="../assets/images/xs/avatar1.jpg" alt="" />
                    <span><a href>Elisse Joson</a> San Francisco, CA <small className="float-right text-right">20-April-2019 - Today</small></span>
                    <h6 className="font600">Hello, 'Im a single div responsive timeline without media Queries!</h6>
                    <div className="msg">
                        <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web card she has is the Lorem card.</p>
                        <a href className="mr-20 text-muted"><i className="fa fa-heart text-pink"></i> 12 Love</a>
                        <a className="text-muted" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-comments"></i> 1 Comment</a>
                        <div className="collapse p-4 section-gray show" id="collapseExample">
                            <form className="well">
                                <div className="form-group">
                                    <textarea rows="2" className="form-control no-resize" placeholder="Enter here for tweet..."></textarea>
                                </div>
                                <button className="btn btn-primary">Submit</button>
                            </form>
                            <ul className="recent_comments list-unstyled mt-4 mb-0">
                                <li>
                                    <div className="avatar_img">
                                        <img className="avatar" src="../assets/images/xs/avatar4.jpg" alt="" />
                                    </div>
                                    <div className="comment_body">
                                        <h5>Donald Gardner <small className="float-right font-14">Just now</small></h5>
                                        <p>Lorem ipsum Veniam aliquip culpa laboris minim tempor</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="timeline_item ">
                    <img className="tl_avatar" src="../assets/images/xs/avatar4.jpg" alt="" />
                    <span><a href title="">Dessie Parks</a> Oakland, CA <small className="float-right text-right">19-April-2019 - Yesterday</small></span>
                    <h6 className="font600">Oeehhh, that's awesome.. Me too!</h6>
                    <div className="msg">
                        <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.</p>
                        <div className="timeline_img mb-20">
                            <img className="width100" src="../assets/images/gallery/1.jpg" alt="Awesome" />
                            <img className="width100" src="../assets/images/gallery/2.jpg" alt="Awesome" />
                        </div>
                        <a href className="mr-20 text-muted"><i className="fa fa-heart text-pink"></i> 23 Love</a>
                        <a className="text-muted" role="button" data-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"><i className="fa fa-comments"></i> 2 Comment</a>
                        <div className="collapse p-4 section-gray" id="collapseExample1">
                            <form className="well">
                                <div className="form-group">
                                    <textarea rows="2" className="form-control no-resize" placeholder="Enter here for tweet..."></textarea>
                                </div>
                                <button className="btn btn-primary">Submit</button>
                            </form>
                            <ul className="recent_comments list-unstyled mt-4 mb-0">
                                <li>
                                    <div className="avatar_img">
                                        <img className="avatar" src="../assets/images/xs/avatar4.jpg" alt="" />
                                    </div>
                                    <div className="comment_body">
                                        <h5>Donald Gardner <small className="float-right font-14">Just now</small></h5>
                                        <p>Lorem ipsum Veniam aliquip culpa laboris minim tempor</p>
                                        <div className="timeline_img mb-20">
                                            <img className="width150" src="../assets/images/gallery/7.jpg" alt="Awesome" />
                                            <img className="width150" src="../assets/images/gallery/8.jpg" alt="Awesome" />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar_img">
                                        <img className="avatar" src="../assets/images/xs/avatar3.jpg" alt="" />
                                    </div>
                                    <div className="comment_body">
                                        <h5>Dessie Parks <small className="float-right font-14">1min ago</small></h5>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="timeline_item ">
                    <img className="tl_avatar" src="../assets/images/xs/avatar7.jpg" alt="" />
                    <span><a href title="" >Rochelle Barton</a> San Francisco, CA <small className="float-right text-right">12-April-2019</small></span>
                    <h6 className="font600">An Engineer Explains Why You Should Always Order the Larger Pizza</h6>
                    <div className="msg">
                        <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, is the Lorem card.</p>
                        <a href className="mr-20 text-muted"><i className="fa fa-heart text-pink"></i> 7 Love</a>
                        <a className="text-muted" role="button" data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2"><i className="fa fa-comments"></i> 1 Comment</a>
                        <div className="collapse p-4 section-gray" id="collapseExample2">
                            <form className="well">
                                <div className="form-group">
                                    <textarea rows="2" className="form-control no-resize" placeholder="Enter here for tweet..."></textarea>
                                </div>
                                <button className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Activity