//const express = require('express');
//const { MongoClient } = require('mongodb'); // MongoDB driver
//const cors = require('cors');
//
//const app = express();
//const port = 3000;
//
//app.use(cors()); // Enable CORS for all origins (for development purposes)
//app.use(express.json()); // Middleware to parse JSON bodies in requests
//
//// MongoDB connection URI
//const uri = 'mongodb+srv://azzanmohammed76:NYhR6ZnwvASN1lfy@cluster0.7gztrh8.mongodb.net/';
//
//// Function to connect to MongoDB and retrieve all documents
//async function getAllData() {
//  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//
//  try {
//    await client.connect(); // Connect to MongoDB
//    const database = client.db('test'); // Use the correct database
//    const collection = database.collection('students'); // Use the correct collection
//    
//    // Fetch all documents in the collection
//    const documents = await collection.find({}).toArray();
//    return documents;
//  } catch (error) {
//    console.error('Error connecting to MongoDB:', error);
//    return []; // Return an empty array in case of error
//  } finally {
//    await client.close(); // Always close the MongoDB connection
//  }
//}
//
//// Function to find persons by name in MongoDB
//async function findPersonsByName(name) {
//  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//
//  try {
//    await client.connect(); // Connect to MongoDB
//    const database = client.db('test'); // Use the correct database
//    const collection = database.collection('students'); // Use the correct collection
//    
//    // Query the collection to find documents with the given name
//    const results = await collection.find({ name }).toArray(); // Query by 'name'
//    return results;
//  } catch (error) {
//    console.error('Error querying MongoDB:', error);
//    return []; // Return empty array on error
//  } finally {
//    await client.close(); // Close the MongoDB connection
//  }
//}
//
//// Define a GET route to retrieve all data
//app.get('/data', async (req, res) => {
//  try {
//    const data = await getAllData(); // Fetch all data
//    res.json(data); // Send the data as JSON
//  } catch (error) {
//    res.status(500).json({ message: 'Error fetching data' }); // Send an error response
//  }
//});
//
//// Define a POST route to find persons by name
//app.post('/submit', async (req, res) => {
//  const { name } = req.body; // Extract 'name' from the request body
//
//  if (!name) {
//    return res.status(400).json({ message: 'Name parameter is required' }); // Validate the input
//  }
//
//  try {
//    const persons = await findPersonsByName(name); // Query MongoDB with the provided name
//
//    if (persons.length === 0) {
//      return res.status(404).json({ message: 'No persons found with the given name' }); // Handle no results
//    }
//
//    res.status(200).json(persons); // Return the matching persons as JSON
//  } catch (error) {
//    res.status(500).json({ message: 'Error querying MongoDB' }); // Handle errors
//  }
//});
//
//// Start the Express server
//app.listen(port, () => {
//  console.log(`Server is running at http://localhost:${port}`);
//});




const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
const PORT = 5000;

// MongoDB Connection
mongoose.connect('mongodb+srv://azzanmohammed76:NYhR6ZnwvASN1lfy@cluster0.7gztrh8.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Routes
// Create a new student
//app.post('/api/students', async (req, res) => {
//  try {
//    // Assuming the request body contains the student data
//    const studentData = req.body;
//    // Here, you can directly save the student data to MongoDB without specifying a schema
//    const student = await mongoose.connection.collection('students').insertOne(studentData);
//    res.status(201).json(student.ops[0]); // Return the newly created student
//  } catch (error) {
//    res.status(500).json({ error: error.message });
//  }
//});

// Get all students
app.get('/api/students', async (req, res) => {
  try {
    const students = await mongoose.connection.collection('students').find().toArray();
    res.status(200).json(students);
    console.log(students)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
