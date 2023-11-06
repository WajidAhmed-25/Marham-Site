const { Router } = require('express');
const router = Router();

const {post_doctor_registration,post_doctor_details, get_doctors_info,get_doctor_details,post_doctors,get_users,post_users,post_user_registration } = require('../controllers/index.controller')


router.get('/get_docs', get_doctors_info);
router.post('/post_doc', post_doctors);



router.get('/get_doctor_details',get_doctor_details)
router.post('/post_doctors_details',post_doctor_details)


router.get('/get_users', get_users);
router.post('/post_user', post_users);




router.post('/post_user_registration_details',post_user_registration)
router.post('/post_doctor_registration_details',post_doctor_registration)



module.exports = router;