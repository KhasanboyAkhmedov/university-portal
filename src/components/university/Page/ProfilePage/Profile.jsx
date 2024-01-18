// import Json from '../data.json';
import React, { useEffect, useState } from 'react';
// import './media.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  // local data 
  // useEffect(() => {
  //   // Set the user data from the imported JSON file
  //   setUserData(Json.data);
  // }, []);
  // local data end

  // fetching with API
  // const token = localStorage.getItem('token');
  const localToken = localStorage.getItem('user');
  console.log(localToken);
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDM1MDQ2ODksInN1YiI6ImNjYTA1NjdlLTA1ZjUtNGU0ZC1iYTUzLTIxYTNiNDJhMTIxMSJ9.iirSU5fMq9Z6uMMFxSR_cxegjhf2fKUvSs-fNiNC8do";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dev.api.millatumidi.uz:9090/users",{
          method: "GET",
          headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
      });
        const data = await response.json();
        console.log(data.data);
        setUserData(data.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [token]);
  // fetching with API End  
  
  // useEffect(() => {
  //   fetch("https://dev.api.millatumidi.uz:9090/users",{
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //       "Authorization": `Bearer ${token}`
  //     }
  //   })
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log(data.data);
  //         setUserData(data.data);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching data:', error);
  //       });
  // }, [token]);
  
  return(
      <div className={`d-flex justify-content-between `}>
          <div className="card col-4 col-md-4 text-center p-2" >
              <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb" 
                className="card-img-center p-3" alt="..."/>
                <h3 className="">Username</h3>
                <hr/>
                <p className="" key={userData?.role.id}>
                    {/* Staff position - */}
                    {userData?.role.name}
                </p> 
                <p>
                    {/* bio <br /> */}
                    {userData?.userProfile.bio}
                </p>
                <div className="row justify-content-center ">
                  <h6 className="fs-3 fw-bold ">
                      <span className='px-1'>Date of birth:</span>
                      {userData?.userProfile.dateOfBirth}
                  </h6>
                </div>
          </div>
          <div className="col-8 col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                    <div className="row">
                      <div className="col-3"> 
                        <h6 className="mb-0">Lastname</h6> 
                      </div>
                      <div className="col-9 text-secondary"> 
                        {userData?.lastName}
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-3">
                        <h6 className="mb-0">Name</h6>
                      </div>
                      <div className="col-9 text-secondary">
                        {userData?.firstName}
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-3">
                        <h6 className="mb-0">Midname</h6>
                      </div>
                      <div className="col-9 text-secondary">
                      {userData?.middleName}
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-3">
                        <h6 className="mb-0">Personal Email</h6>
                      </div>
                      <div className="col-9 text-secondary">
                        {userData?.userProfile.personalEmail}
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-3">
                        <h6 className="mb-0">Corporative email</h6>
                      </div>
                      <div className="col-9 text-secondary">
                        {userData?.corporateEmail}
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-3">
                        <h6 className="mb-0">Mobile</h6>
                      </div>
                      <div className="col-9 text-secondary">
                        {userData?.userProfile.contactNumber}
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-9 text-secondary">
                        {userData?.userProfile.address}
                      </div>
                    </div>
                    {/* <hr/>
                    <div className="row">
                      <div className="col-12">
                        <a className="btn btn-info " target="__blank" href="#">Edit</a>
                      </div>
                    </div> */}
              </div> 
            </div> 
          </div>
      </div>
  )
}

export default Profile