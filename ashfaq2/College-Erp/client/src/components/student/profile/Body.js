import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate";
import { Avatar } from "@mui/material";
import Data from "./Data";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex  items-center justify-between mr-8">
          <div className="flex space-x-2 text-gray-400">
            <AssignmentIndIcon />
            <h1>Profile lol</h1>
          </div>
          <div
            onClick={() => navigate("/student/update")}
            className="flex space-x-2 cursor-pointer">
            <SecurityUpdateIcon />
            <h1 className="font-bold">Update</h1>
          </div>
        </div>
        <div className="w-[98%] bg-white relative rounded-xl  ">
          <div className="absolute left-[50%] top-[-10%] ">
            <Avatar src={user.result.avatar} sx={{ width: 70, height: 70 }} />
          </div>
          <div className="overflow-y-scroll h-[27rem]">
            <div className="flex py-10 ml-10 space-x-40 ">
              <div className="flex flex-col space-y-10">
                <Data label="Name" value={user.result.name} />
                <Data label="Email" value={user.result.email} />
                <Data label="Username" value={user.result.username} />
                <Data label="Department" value={user.result.department} />
                <Data label="Father's Name" value={user.result.fatherName} />
                <Data label="Mother's Name" value={user.result.motherName} />
                <Data label="Location" value={user.result.location}/>
                <Data label="LinkedIn" value={user.result.linkedin}/>
                <Data label="Achievements" value={user.result.achievements}/>
                
                
                <Data label="Previous edu inst" value={user.result.schoolname}/>
                <Data label="duration" value={user.result.schoolduration}/>
                <Data label="qualification" value={user.result.schoolqualification}/>
            

              </div>
              <div className="flex flex-col space-y-10 ">
                <Data label="DOB" value={user.result.dob} />
                <Data label="Year" value={user.result.year} />
                <Data
                  label="Contact Number"
                  value={user.result.contactNumber}
                />
                <Data label="Section" value={user.result.section} />
                <Data
                  label="Father's Contact Number"
                  value={user.result.fatherContactNumber}
                />
                <Data label="Batch" value={user.result.batch} />
                <Data label="Skillset" value={user.result.skills}/>
                <Data label="GitHub" value={user.result.github}/>

                <Data label="current institute" value={user.result.collegename}/>
                <Data label="duration (expected)" value={user.result.collegeduration}/>
                <Data label="qualification" value={user.result.collegequalification}/>      

                <Data label="Latest exp. Org" value={user.result.orgname}/>
                <Data label="duration" value={user.result.orgduration}/>
                <Data label="description" value={user.result.orgdescription}/>

              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Body;
