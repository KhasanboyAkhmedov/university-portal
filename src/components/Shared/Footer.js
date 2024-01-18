import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        const currentYear = new Date().getFullYear();

        return (
            <div className="section-body">
                <footer className="d-flex footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <p> &copy; {currentYear} MU University</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
