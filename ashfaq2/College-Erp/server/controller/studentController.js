import student from "../models/student.js";
import Test from "../models/test.js";
import Student from "../models/student.js";
import Subject from "../models/subject.js";
import Marks from "../models/marks.js";
import Attendence from "../models/attendance.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const studentLogin = async (req, res) => {
  const { username, password } = req.body;
  console.log(username)
  console.log(password)
  const errors = { usernameError: String, passwordError: String };
  try {
    const existingStudent = await Student.findOne({ username });
    if (!existingStudent) {
      errors.usernameError = "Student doesn't exist.";
      return res.status(404).json(errors);
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingStudent.password
    );
    if (!isPasswordCorrect) {
      errors.passwordError = "Invalid Credentials";
      return res.status(404).json(errors);
    }

    const token = jwt.sign(
      {
        email: existingStudent.email,
        id: existingStudent._id,
      },
      "sEcReT",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingStudent, token: token });
    console.log('working')
  } catch (error) {
    console.log(error);
  }
};

export const updatedPassword = async (req, res) => {
  try {
    const { newPassword, confirmPassword, email } = req.body;
    const errors = { mismatchError: String };
    if (newPassword !== confirmPassword) {
      errors.mismatchError =
        "Your password and confirmation password do not match";
      return res.status(400).json(errors);
    }

    const student = await Student.findOne({ email });
    let hashedPassword;
    hashedPassword = await bcrypt.hash(newPassword, 10);
    student.password = hashedPassword;
    await student.save();
    if (student.passwordUpdated === false) {
      student.passwordUpdated = true;
      await student.save();
    }

    res.status(200).json({
      success: true,
      message: "Password updated successfully",
      response: student,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateStudent = async (req, res) => {
  try {
    const {
      name,
      dob,
      department,
      contactNumber,
      avatar,
      email,
      batch,
      section,
      year,
      fatherName,
      motherName,
      fatherContactNumber,
      location,
      linkedin,
      github,
      skills,
      achievements,
      certificates2,
      certificates1,
      schoolname,
      schoolduration,
      schoolqualification,
      collegename,
      collegeduration,
      collegequalification,
      orgname,
      orgduration,
      orgdescription,
    } = req.body;
    const updatedStudent = await Student.findOne({ email });
    if (name) {
      updatedStudent.name = name;
      await updatedStudent.save();
    }
    if (dob) {
      updatedStudent.dob = dob;
      await updatedStudent.save();
    }
    if (department) {
      updatedStudent.department = department;
      await updatedStudent.save();
    }
    if (schoolname) {
      updatedStudent.schoolname = schoolname;
      await updatedStudent.save();
    }
    if (schoolduration) {
      updatedStudent.schoolduration = schoolduration;
      await updatedStudent.save();
    }
    if (schoolqualification) {
      updatedStudent.schoolqualification = schoolqualification;
      await updatedStudent.save();
    }
    if (collegename) {
      updatedStudent.collegename = collegename;
      await updatedStudent.save();
    }
    if (collegeduration) {
      updatedStudent.collegeduration = collegeduration;
      await updatedStudent.save();
    }
    if (collegequalification) {
      updatedStudent.collegequalification = collegequalification;
      await updatedStudent.save();
    }
    if (orgname) {
      updatedStudent.orgname = orgname;
      await updatedStudent.save();
    }
    if (orgduration) {
      updatedStudent.orgduration = orgduration;
      await updatedStudent.save();
    }
    if (orgdescription) {
      updatedStudent.orgdescription = orgdescription;
      await updatedStudent.save();
    }
    if (contactNumber) {
      updatedStudent.contactNumber = contactNumber;
      await updatedStudent.save();
    }
    if (batch) {
      updatedStudent.batch = batch;
      await updatedStudent.save();
    }
    if (section) {
      updatedStudent.section = section;
      await updatedStudent.save();
    }
    if (year) {
      updatedStudent.year = year;
      await updatedStudent.save();
    }
    if (motherName) {
      updatedStudent.motherName = motherName;
      await updatedStudent.save();
    }
    if (fatherName) {
      updatedStudent.fatherName = fatherName;
      await updatedStudent.save();
    }
    if (fatherContactNumber) {
      updatedStudent.fatherContactNumber = fatherContactNumber;
      await updatedStudent.save();
    }
    if (location) {
      updatedStudent.location=location;
      await updatedStudent.save()
    }
    if (linkedin) {
      updatedStudent.linkedin=linkedin;
      await updatedStudent.save()
    }
    if (github) {
      updatedStudent.github=github;
      await updatedStudent.save()
    }
    if (skills) {
      updatedStudent.skills=skills;
      await updatedStudent.save()
    }
    if (achievements) {
      updatedStudent.achievements=achievements;
      await updatedStudent.save()
    }
    if (certificates1) {
      updatedStudent.certificates1=certificates1;
      await updatedStudent.save()
    }
    if (certificates2) {
      updatedStudent.certificates2=certificates2;
      await updatedStudent.save()
    }
    if (avatar) {
      updatedStudent.avatar = avatar;
      await updatedStudent.save();
    }
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const testResult = async (req, res) => {
  try {
    const { department, year, section } = req.body;
    const errors = { notestError: String };
    const student = await Student.findOne({ department, year, section });
    const test = await Test.find({ department, year, section });
    if (test.length === 0) {
      errors.notestError = "No Test Found";
      return res.status(404).json(errors);
    }
    var result = [];
    for (var i = 0; i < test.length; i++) {
      var subjectCode = test[i].subjectCode;
      var subject = await Subject.findOne({ subjectCode });
      var marks = await Marks.findOne({
        student: student._id,
        exam: test[i]._id,
      });
      if (marks) {
        var temp = {
          marks: marks.marks,
          totalMarks: test[i].totalMarks,
          subjectName: subject.subjectName,
          subjectCode,
          test: test[i].test,
        };

        result.push(temp);
      }
    }

    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const attendance = async (req, res) => {
  try {
    const { department, year, section } = req.body;
    const errors = { notestError: String };
    const student = await Student.findOne({ department, year, section });

    const attendence = await Attendence.find({
      student: student._id,
    }).populate("subject");
    if (!attendence) {
      res.status(400).json({ message: "Attendence not found" });
    }

    res.status(200).json({
      result: attendence.map((att) => {
        let res = {};
        res.percentage = (
          (att.lectureAttended / att.totalLecturesByFaculty) *
          100
        ).toFixed(2);
        res.subjectCode = att.subject.subjectCode;
        res.subjectName = att.subject.subjectName;
        res.attended = att.lectureAttended;
        res.total = att.totalLecturesByFaculty;
        return res;
      }),
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
