import mongoose from "mongoose";
const { Schema } = mongoose;
const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "subject",
    },
  ],
  username: {
    type: String,
  },
  gender: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  department: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
  fatherContactNumber: {
    type: Number,
  },
  dob: {
    type: String,
    required: true,
  },
  passwordUpdated: {
    type: Boolean,
    default: false,
  },
  location:{
    type:String,
    default:"",
  },
  skills:{
    type:String,
    default:"",
  },
  linkedin:{
    type:String,
    default:"",
  },
  github:{
    type:String,
    default:"",
  },
  achievements:{
    type:String,
    default:"",
  },
  certificates2:{
    type:String,
    default:"",
  },
  certificates1:{
    type:String,
    default:"",
  },

  schoolname:{
    type:String,
    default:"",
  },
  schoolduration:{
    type:String,
    default:"",
  },
  schoolqualification:{
    type:String,
    default:"",
  },

  collegename:{
    type:String,
    default:"",
  },
  collegeduration:{
    type:String,
    default:"",
  },
  collegequalification:{
    type:String,
    default:"",
  },


  orgname:{
    type:String,
    default:"",
  },
  orgduration:{
    type:String,
    default:"",
  },
  orgdescription:{
    type:String,
    default:"",
  },
});

export default mongoose.model("student", studentSchema);
