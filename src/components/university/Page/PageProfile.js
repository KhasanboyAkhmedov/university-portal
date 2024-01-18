import React, { Component } from 'react';
import Fullcalender from '../../common/fullcalender';
import { TabContent, TabPane, Nav, NavLink, NavItem } from "reactstrap";
import classnames from 'classnames';
import Profile from './ProfilePage/Profile';
import Status from './ProfilePage/Status';
import Activity from './ProfilePage/Activity';
import EditProfile from './ProfilePage/EditProfile';
import Blog from './ProfilePage/Blog';

export default class PageProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0
		};
	}
	render() {
		const { activeTab } = this.state
		return (
			<>
				<div className="section-body">
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center ">
							<div className="header-action">
								<h1 className="page-title">My Profile</h1>
								<ol className="breadcrumb page-breadcrumb">
									<li className="breadcrumb-item"><a href>Pages</a></li>
									<li className="breadcrumb-item active" aria-current="page">My Profile</li>
								</ol>
							</div>
							<Nav tabs className="page-header-tab">
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 0 })}
										onClick={() => this.setState({ activeTab: 0 })}
									>
										My Profile
                   					</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 1 })}
										onClick={() => this.setState({ activeTab: 1 })}
									>
										Calendar
                   					</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 2 })}
										onClick={() => this.setState({ activeTab: 2 })}
									>
										Timeline
                   					</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 3 })}
										onClick={() => this.setState({ activeTab: 3 })}
									>
										Profile
    			               		</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={classnames({ active: activeTab === 4 })}
										onClick={() => this.setState({ activeTab: 4 })}
									>
										Blog
    			               </NavLink>
								</NavItem>
							</Nav>
						</div>
					</div>
				</div>
				<div className="section-body mt-4">
					<div className="container-fluid">
						<div className="row clearfix">
							{/* <Status/>  */}
							<div className="col-md-12">
								<TabContent activeTab={activeTab}>
									<TabPane tabId={0} className={classnames(['fade show'])}>
										<div className={window.innerWidth >= 321 ? `card` : ''}>
											<div className={window.innerWidth >= 321 ? `card-body` : ''}>
												<Profile />
											</div>
										</div>
									</TabPane>
									<TabPane tabId={1} className={classnames(['fade show'])}>
										<div className="card">
											<div className="card-body">
												<Fullcalender />
											</div>
										</div>
									</TabPane>
									<TabPane tabId={2} className={classnames(['fade show'])}>
										<Activity/>
									</TabPane>
									<TabPane tabId={3} className={classnames(['fade show'])}>
										<EditProfile/>
									</TabPane>
									<TabPane tabId={4} className={classnames(['fade show'])}>
										<Blog/>
									</TabPane>
								</TabContent>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
