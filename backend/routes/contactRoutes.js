import express from 'express';
const router = express.Router();

router.post('/contact', (req, res) => {
  const { name, email, number, msg } = req.body;
  // Handle form submission logic here (e.g., save to database, send email)
  console.log(`Received contact form submission: ${name}, ${email}, ${number}, ${msg}`);
  res.redirect('/thank-you'); // Redirect to a thank you page or show a success message
});

export default router;