import React, { useEffect, useState } from "react";
import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "../../../../redux/actions/studentActions";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { MenuItem, Select } from "@mui/material";
import Spinner from "../../../../utils/Spinner";
import { SET_ERRORS } from "../../../../redux/actionTypes";
import * as classes from "../../../../utils/styles";

const Body = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state);
  const departments = useSelector((state) => state.admin.allDepartment);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [value, setValue] = useState({
    name: "",
    dob: "",
    email: user.result.email,
    department: "",
    contactNumber: "",
    avatar: "",
    batch: "",
    year: "",
    motherName: "",
    fatherName: "",
    fatherContactNumber: "",
    section: "",
    location: "",
    linkedin: "",
    github: "",
    skills:"",
    achievements:"",
    certificates2:"",
    certificates1:"",

    schoolname:"",
    schoolduration:"",
    schoolqualification:"",
    collegename:"",
    collegeduration:"",
    collegequalification:"",
    orgname:"",
    orgduration:"",
    orgdescription:"",
  });

  useEffect(() => {
    if (Object.keys(store.errors).length !== 0) {
      setError(store.errors);
    }
  }, [store.errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});
    setLoading(true);
    if (
      value.name === "" &&
      value.dob === "" &&
      value.department === "" &&
      value.contactNumber === "" &&
      value.avatar === "" &&
      value.certificates1 === "" &&
      value.certificates2 === "" &&
      value.batch === "" &&
      value.year === "" &&
      value.motherName === "" &&
      value.fatherName === "" &&
      value.fatherContactNumber === "" &&
      value.section === "" &&
      value.location === "" &&
      value.linkedin === "" &&
      value.github === "" &&
      value.skills === "" &&
      value.achievements === "" &&

      value.schoolname === "" &&
      value.schoolduration === "" &&
      value.schoolqualification === "" &&

      value.collegename === "" &&
      value.collegeduration === "" &&
      value.collegequalification === "" &&

      value.orgname === "" &&
      value.orgduration === "" &&
      value.orgdescription === ""
    ) {
      alert("Enter atleast one value");
      setLoading(false);
    } else {
      dispatch(updateStudent(value));
      alert("Kindly login again to see updates");
    }
  };

  useEffect(() => {
    if (store.errors || store.student.updatedStudent) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [store.errors, store.student.updatedStudent]);

  useEffect(() => {
    dispatch({ type: SET_ERRORS, payload: {} });
  }, []);

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex  items-center justify-between mr-8">
          <div className="flex space-x-2 text-gray-400">
            <SecurityUpdateIcon />
            <h1>Update</h1>
          </div>

          <div
            onClick={() => navigate("/student/update/password")}
            className="flex space-x-2 cursor-pointer">
            <VisibilityOffIcon />
            <h1 className="font-bold">Password</h1>
          </div>
        </div>

        <div className=" mr-10 bg-white flex flex-col rounded-xl overflow-y-scroll h-[27rem] ">
          <form className={classes.adminForm0} onSubmit={handleSubmit}>
            <div className={classes.adminForm1}>
              <div className={classes.adminForm2l}>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Name :</h1>
                  <input
                    placeholder={user.result?.name}
                    className={classes.adminInput}
                    type="text"
                    value={value.name}
                    onChange={(e) =>
                      setValue({ ...value, name: e.target.value })
                    }
                  />
                </div>

                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>DOB :</h1>
                  <input
                    placeholder={user.result?.dob}
                    className={classes.adminInput}
                    type="text"
                    value={value.dob}
                    onChange={(e) =>
                      setValue({ ...value, dob: e.target.value })
                    }
                  />
                </div>

                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Email :</h1>
                  <input
                    placeholder={user.result?.email}
                    disabled
                    className={classes.adminInput}
                    type="text"
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Batch :</h1>
                  <input
                    placeholder={user.result?.batch}
                    className={classes.adminInput}
                    value={value.batch}
                    onChange={(e) =>
                      setValue({ ...value, batch: e.target.value })
                    }
                    type="text"
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Father's Name :</h1>
                  <input
                    placeholder={user.result?.fatherName}
                    className={classes.adminInput}
                    value={value.fatherName}
                    onChange={(e) =>
                      setValue({ ...value, fatherName: e.target.value })
                    }
                    type="text"
                  />
                </div>

                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Mother's Name :</h1>
                  <input
                    placeholder={user.result?.motherName}
                    className={classes.adminInput}
                    value={value.motherName}
                    onChange={(e) =>
                      setValue({ ...value, motherName: e.target.value })
                    }
                    type="text"
                  />
                </div>
                
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Location :</h1>
                  <input
                    placeholder={user.result?.location}
                    className={classes.adminInput}
                    value={value.location}
                    onChange={(e) =>
                      setValue({ ...value, location: e.target.value })
                    }
                    type="text"
                  />
                </div>

                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Skills :</h1>
                  <input
                    placeholder={user.result?.skills}
                    className={classes.adminInput}
                    value={value.skills}
                    onChange={(e) =>
                      setValue({ ...value, skills: e.target.value })
                    }
                    type="text"
                  />
                </div>


                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Achievements:</h1>
                  <input
                    placeholder={user.result?.achievements}
                    className={classes.adminInput}
                    value={value.achievements}
                    onChange={(e) =>
                      setValue({ ...value, achievements: e.target.value })
                    }
                    type="text"
                  />
                </div>


                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Previous edu inst:</h1>
                  <input
                    placeholder={user.result?.schoolname}
                    className={classes.adminInput}
                    value={value.schoolname}
                    onChange={(e) =>
                      setValue({ ...value, schoolname: e.target.value })
                    }
                    type="text"
                  />
                </div>


                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Duration:</h1>
                  <input
                    placeholder={user.result?.schoolduration}
                    className={classes.adminInput}
                    value={value.schoolduration}
                    onChange={(e) =>
                      setValue({ ...value, schoolduration: e.target.value })
                    }
                    type="text"
                  />
                </div>

                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Qualification:</h1>
                  <input
                    placeholder={user.result?.schoolqualification}
                    className={classes.adminInput}
                    value={value.schoolqualification}
                    onChange={(e) =>
                      setValue({ ...value, schoolqualification: e.target.value })
                    }
                    type="text"
                  />
                </div>


                




                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Current institute:</h1>
                  <input
                    placeholder={user.result?.collegename}
                    className={classes.adminInput}
                    value={value.collegename}
                    onChange={(e) =>
                      setValue({ ...value, collegename: e.target.value })
                    }
                    type="text"
                  />
                </div>


                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Duration:</h1>
                  <input
                    placeholder={user.result?.collegeduration}
                    className={classes.adminInput}
                    value={value.collegeduration}
                    onChange={(e) =>
                      setValue({ ...value, collegeduration: e.target.value })
                    }
                    type="text"
                  />
                </div>

                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Qualification:</h1>
                  <input
                    placeholder={user.result?.collegequalification}
                    className={classes.adminInput}
                    value={value.collegequalification}
                    onChange={(e) =>
                      setValue({ ...value, collegequalification: e.target.value })
                    }
                    type="text"
                  />
                </div>





                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Latest exp:</h1>
                  <input
                    placeholder={user.result?.orgname}
                    className={classes.adminInput}
                    value={value.orgname}
                    onChange={(e) =>
                      setValue({ ...value, orgname: e.target.value })
                    }
                    type="text"
                  />
                </div>


                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Duration:</h1>
                  <input
                    placeholder={user.result?.orgduration}
                    className={classes.adminInput}
                    value={value.orgduration}
                    onChange={(e) =>
                      setValue({ ...value, orgduration: e.target.value })
                    }
                    type="text"
                  />
                </div>

                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>description:</h1>
                  <input
                    placeholder={user.result?.orgdescription}
                    className={classes.adminInput}
                    value={value.orgdescription}
                    onChange={(e) =>
                      setValue({ ...value, orgdescription: e.target.value })
                    }
                    type="text"
                  />
                </div>



              </div>

              <div className={classes.adminForm2r}>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Department :</h1>
                  <Select
                    displayEmpty
                    sx={{ height: 36 }}
                    inputProps={{ "aria-label": "Without label" }}
                    value={value.department}
                    onChange={(e) =>
                      setValue({ ...value, department: e.target.value })
                    }>
                    <MenuItem value="">None</MenuItem>
                    {departments?.map((dp, idx) => (
                      <MenuItem key={idx} value={dp.department}>
                        {dp.department}
                      </MenuItem>
                    ))}
                  </Select>
                </div>

                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Contact Number :</h1>
                  <input
                    placeholder={user.result?.contactNumber}
                    className={classes.adminInput}
                    type="text"
                    value={value.contactNumber}
                    onChange={(e) =>
                      setValue({ ...value, contactNumber: e.target.value })
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Year :</h1>
                  <input
                    placeholder={user.result?.year}
                    className={classes.adminInput}
                    type="text"
                    value={value.year}
                    onChange={(e) =>
                      setValue({ ...value, year: e.target.value })
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Section :</h1>
                  <input
                    placeholder={user.result?.section}
                    className={classes.adminInput}
                    type="text"
                    value={value.section}
                    onChange={(e) =>
                      setValue({ ...value, section: e.target.value })
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>
                    Father's Contact Number :
                  </h1>
                  <input
                    placeholder={user.result?.fatherContactNumber}
                    className={classes.adminInput}
                    value={value.fatherContactNumber}
                    onChange={(e) =>
                      setValue({
                        ...value,
                        fatherContactNumber: e.target.value,
                      })
                    }
                    type="text"
                  />
                </div>

                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>LinkedIn :</h1>
                  <input
                    placeholder={user.result?.linkedin}
                    className={classes.adminInput}
                    value={value.linkedin}
                    onChange={(e) =>
                      setValue({ ...value, linkedin: e.target.value })
                    }
                    type="text"
                  />
                </div>


                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>GitHub :</h1>
                  <input
                    placeholder={user.result?.github}
                    className={classes.adminInput}
                    value={value.github}
                    onChange={(e) =>
                      setValue({ ...value, github: e.target.value })
                    }
                    type="text"
                  />
                </div>


                

                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Avatar :</h1>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setValue({ ...value, avatar: base64 })
                    }
                  />
                </div>


                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>certificates2 :</h1>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setValue({ ...value, certificates2: base64 })
                    }
                  />
                </div>

                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>certificates1 :</h1>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setValue({ ...value, certificates1: base64 })
                    }
                  />
                </div>


              </div>
            </div>

            <div className={classes.adminFormButton}>
              <button className={classes.adminFormSubmitButton} type="submit">
                Submit
              </button>

              <button
                onClick={() => navigate("/student/profile")}
                className={classes.adminFormClearButton}
                type="button">
                Cancel
              </button>
            </div>

            <div className={classes.loadingAndError}>
              {loading && (
                <Spinner
                  message="Updating"
                  height={30}
                  width={150}
                  color="#111111"
                  messageColor="blue"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Body;
