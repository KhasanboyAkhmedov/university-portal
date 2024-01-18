import React from 'react'

const Status = () => {
  return (
    <>
        <div className="col-lg-3 col-md-6">
            <div className="card">
                <div className="card-body">
                    <div className="widgets1">
                        <div className="icon">
                            <i className="icon-trophy text-success font-30"></i>
                        </div>
                        <div className="details">
                            <h6 className="mb-0 font600">Total Earned</h6>
                            <span className="mb-0">$96K +</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="card">
                <div className="card-body">
                    <div className="widgets1">
                        <div className="icon">
                            <i className="icon-heart text-warning font-30"></i>
                        </div>
                        <div className="details">
                            <h6 className="mb-0 font600">Total Likes</h6>
                            <span className="mb-0">6,270</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="card">
                <div className="card-body">
                    <div className="widgets1">
                        <div className="icon">
                            <i className="icon-handbag text-danger font-30"></i>
                        </div>
                        <div className="details">
                            <h6 className="mb-0 font600">Delivered</h6>
                            <span className="mb-0">720 Delivered</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="card">
                <div className="card-body">
                    <div className="widgets1">
                        <div className="icon">
                            <i className="icon-user text-primary font-30"></i>
                        </div>
                        <div className="details">
                            <h6 className="mb-0 font600">Jobs</h6>
                            <span className="mb-0">614</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Status