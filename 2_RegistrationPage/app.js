const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (your HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post('/submit', (req, res) => {
  // Retrieve form data
  const { firstName, lastName, motherName, fatherName, address, gender, state, city, dob, pincode, course, email } = req.body;

  // Compose the email message
  const subject = 'Registration Confirmation';
  const message = `
    First Name: ${firstName}
    Last Name: ${lastName}
    Mother's Name: ${motherName}
    Father's Name: ${fatherName}
    Address: ${address}
    Gender: ${gender}
    State: ${state}
    City: ${city}
    Date of Birth: ${dob}
    Pincode: ${pincode}
    Course: ${course}
    Email: ${email}
  `;

  // Configure the email transport (you need to provide your email service details)
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: 'vemulapallih6@gmail.com',
      pass: 'ljcb qshv yokz mjtb',
    },
  });

  // Email data
  const mailOptions = {
    from: 'vemulapallih6@gmail.com',
    to: email,
    subject,
    text: message,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Email sending failed.');
    } else {
      console.log('Email sent:', info.response);
      res.send('Registration successful! Check your email for confirmation.');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
