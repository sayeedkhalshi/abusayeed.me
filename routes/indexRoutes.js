const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController');
const Contact = require('../models/contactModel');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/admin-register', (req, res) => {
  res.render('adminRegister');
});

router.get('/admin-login', (req, res) => {
  res.render('adminLogin');
});

router.post('/admin-register', authController.signup);

router.post('/admin-login', authController.login);

router.get(
  '/admin-dashboard',
  authController.protect,
  authController.restrictTo('admin'),
  async (req, res) => {
    const contacts = await Contact.find();
    res.render('adminDashboard', { contacts });
  }
);
router.get('/admin-logout', authController.protect, authController.logout);

router.post('/contact', async (req, res) => {
  const contact = await Contact.create(req.body);

  if (contact) {
    res.status(200).json({
      message:
        'Thanks for sending us a message. We will come back to you asap.',
    });
  }
});

module.exports = router;
