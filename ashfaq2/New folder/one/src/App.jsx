//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
//
//function App() {
//  const [data, setData] = useState([]); // Initialize state with an empty array
//  const [error, setError] = useState(null); // State to track errors
//  const [input, setInput] = useState(''); // Initialize with an empty string
//  const [response, setResponse] = useState([]); // State to store the POST response
//
//  useEffect(() => {
//    const fetchData = async () => {
//      try {
//        const response = await axios.get('http://localhost:3000/data'); // Fetch data from backend
//        setData(response.data); // Store the fetched data
//      } catch (err) {
//        setError('Error fetching data'); // Handle errors in data fetching
//      }
//    };
//
//    fetchData(); // Fetch data on component mount
//  }, []); // Empty dependency array means it runs once on mount
//
//  const handleSubmit = async () => {
//    try {
//      const response = await axios.post('http://localhost:3000/submit', { name: input }); // Send POST request
//      setResponse(response.data); // Store the response data
//      console.log('submitted')
//      console.log(response.data[0])
//    } catch (error) {
//      setError('Error sending data'); // Handle errors in POST request
//    }
//  };
//
//  return (
//    <div>
//      {/* Display error message if there's an error */}
//      {error && <p>Error: {error}</p>}
//
//      {/* Display fetched data */}
//      {/* 
//      {data.map((item, index) => (
//        <div key={index} className='text-2xl bg-lime-400'>
//          <p>{item.name}</p>
//          <p>{item.email}</p>
//          <p>{item.contactNumber}</p>
//          <p>Current year: {item.year}</p>
//        </div>
//      ))}*/}
//
//      
//      <input
//        type='text'
//        value={input} // Controlled component
//        onChange={(event) => setInput(event.target.value)} // Update state on input
//        placeholder='Enter name'
//      />
//
//      <button onClick={handleSubmit}>Submit</button> {/* Add a label to the button */}
//
//      {/* Display the response from the POST request */}
//      {/*<p>{JSON.stringify(response)}</p>*/}
//      {response.map((res, index) =>  (<>
//        <p key={index}>{res.name}</p>
//        <p key={index}>{res.email}</p>
//        <p key={index}>{res.contactNumber}</p> 
//        </>
//      ))}
//    </div>
//  );
//}
//
//export default App; // Export the component



import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/students')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setStudents(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);



  const handleDownloadPdf = () => {
    const input = document.getElementById('pdf-download-content');

    html2canvas(input)
      .then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 210;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('resume.pdf');
      });
  };



  return (
    <div className="text-black items-center justify-center h-screen">
      <div id='pdf-download-content'>
      <h1 className="text-center bg-lime-400 text-3xl font-bold mb-6">Resume</h1>
      <ul className="grid grid-cols-1 gap-6">
        {students.map(student => (
          
          <li key={student._id} className="bg-gray-100 p-4 rounded-md shadow-md">
            <img src={student.avatar} className='h-[5rem] w-[5rem] rounded-full mx-auto mb-2' alt="" />
            <h2 className="text-xl font-semibold text-center">{student.name}</h2>
            <p className="text-center">Email: {student.email}</p>
            <p className="text-center">Contact number: {student.contactNumber}</p>
            <p className="text-center">Location: {student.location}</p>
            <p className="text-center">LinkedIn: {student.linkedin}</p>
            <p className="text-center">Github: {student.github}</p>
            <p className="text-center">SKills: {student.skills}</p>
            <br />
            <br />
            <p className="text-center">Achievements: {student.achievements}</p>

            <p>Latest experience</p>
            <p className="text-center">Orgname: {student.orgname}</p>
            <p className="text-center">Orgduration: {student.orgduration}</p>
            <p className="text-center">Description: {student.orgdescription}</p>
            
            <p>Latest Eductation</p>
            <p className="text-center">School name: {student.collegename}</p>
            <p className="text-center">duration: {student.collegeduration}</p>
            <p className="text-center">Qualification: {student.collegequalification}</p>

            <p>Previous education</p>
            <p className="text-center">School name: {student.schoolname}</p>
            <p className="text-center">duration: {student.schoolduration}</p>
            <p className="text-center">Qualification: {student.schoolqualification}</p>

            
            <p>Certificates</p>
      {student.certificates1 && (
        <img src={student.certificates1} alt="" className='w-[14cm] h-[7cm]' />
      )}
      {student.certificates2 && (
        <img src={student.certificates2} alt="" className='w-[14cm] h-[7cm]' />
      )}
            
          </li>
        ))}
      </ul>
      <button onClick={handleDownloadPdf} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Download PDF
      </button>
      </div>
    </div>
    
  );
};

export default App;


