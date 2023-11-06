const {Pool } = require('pg');

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'WaJId@ArAIn1225',
    database: 'Verde',
    port: '5432'
});

const get_doctors_info= async (req, res) => {
    const response = await pool.query('SELECT * FROM doctor_register');
    console.log(response.rows);
    res.status(200).json(response.rows);
}

const post_doctors = async (req, res) => {
    const { doc_name, doc_email, doc_password } = req.body;
  
    try {
      const response = await pool.query(
        'INSERT INTO doctors (doc_name, doc_email, doc_password) VALUES ($1, $2, $3) RETURNING *',
        [doc_name, doc_email, doc_password]
      );
  
      res.status(201).json(response.rows[0]); // Return the created doctor
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating a doctor');
    }
  };


const get_users = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    console.log(response.rows);
    res.status(200).json(response.rows);
}


const post_users = async (req, res) => {
    const { user_name, user_email, user_password } = req.body;
  
    try {
      const response = await pool.query(
        'INSERT INTO users (user_name,user_email,user_password) VALUES ($1, $2, $3) RETURNING *',
        [user_name, user_email, user_password]
      );
  
      res.status(201).json(response.rows[0]); // Return the created doctor
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating a doctor');
    }
  };




  
  const post_user_registration = async (req, res) => {
    const { user_reg_first, user_reg_last,user_reg_email,user_reg_phone,user_reg_password,user_reg_gender,user_reg_code } = req.body;
  
    try {
      const response = await pool.query(
        'INSERT INTO user_register (user_reg_first, user_reg_last,user_reg_email,user_reg_password ,user_reg_phone,user_reg_gender,user_reg_code) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [user_reg_first,user_reg_last,user_reg_email,user_reg_password,user_reg_phone,user_reg_gender,user_reg_code]
      );
  
      res.status(201).json(response.rows[0]); // Return the created doctor
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating a user');
    }
  };  




  const post_doctor_registration = async (req, res) => {
    const {doc_reg_first,doc_reg_last,doc_reg_email,doc_reg_phone,doc_reg_password,doc_reg_code,doc_reg_gender } = req.body;
  
    try {
      const response = await pool.query(
        'INSERT INTO doctor_register (doc_reg_first, doc_reg_last,doc_reg_email,doc_reg_phone,doc_reg_password,doc_reg_code,doc_reg_gender ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [doc_reg_first,doc_reg_last,doc_reg_email,doc_reg_phone,doc_reg_password,doc_reg_code,doc_reg_gender ]
      );
  
      res.status(201).json(response.rows[0]); // Return the created doctor
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating a doctor');
    }
  };  


  // const post_doctors_details = async (req, res) => {
  //   const {  doctor_details_city, doctor_details_country, doctor_details_department, doctor_details_experience, doctor_details_registration_num, doctor_details_qualification,  doctor_details_Discounted_Consultation_Fee,doctor_details_Booking_leading_time, doctor_details_payout_data, doctor_details_address_line1, doctor_details_Address_line_2,doctor_details_Postal_Code,doctor_details_Servies, doctor_details_Specialization, doctor_payout_data_category, doc_details_bio} = req.body;
  
  //   try {
  //     const response = await pool.query(
  //       'INSERT INTO doctor_details ( doctor_details_city, doctor_details_country, doctor_details_department, doctor_details_experience, doctor_details_registration_num, doctor_details_qualification,  doctor_details_Discounted_Consultation_Fee,doctor_details_Booking_leading_time, doctor_details_payout_data, doctor_details_address_line1, doctor_details_Address_line_2,doctor_details_Postal_Code,doctor_details_Servies, doctor_details_Specialization, doctor_payout_data_category, doc_details_bio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)  RETURNING * ',
  //       [ doctor_details_city, doctor_details_country, doctor_details_department, doctor_details_experience, doctor_details_registration_num, doctor_details_qualification,  doctor_details_Discounted_Consultation_Fee,doctor_details_Booking_leading_time, doctor_details_payout_data, doctor_details_address_line1, doctor_details_Address_line_2,doctor_details_Postal_Code,doctor_details_Servies, doctor_details_Specialization, doctor_payout_data_category, doc_details_bio]
  //     );
  
  //     res.status(201).json(response.rows[0]); //a Return the created doctor
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send('Haram Zad');
  //   }
  // };





  const post_doctor_details= async (req, res) => {
    const {doc_d_complete_name, doc_d_gender, doc_d_phone, doc_d_city, doc_d_country, doc_d_department, doc_d_experience, doc_d_registration, doc_d_qualification,doc_consultation_mode,doc_d_regular_fee,doc_d_disc_fee,doc_d_booking_gender,doc_d_payout_mode,doc_d_payment_password,doc_d_add1,doc_d_add2,doc_d_postal_code,doc_d_services,doc_d_specialization,doc_d_bio,doc_d_email } = req.body;
  
    try {
      const response = await pool.query(
        'INSERT INTO doctor_details (doc_d_complete_name, doc_d_gender, doc_d_phone, doc_d_city, doc_d_country, doc_d_department, doc_d_experience, doc_d_registration, doc_d_qualification,doc_consultation_mode,doc_d_regular_fee,doc_d_disc_fee,doc_d_booking_gender,doc_d_payout_mode,doc_d_payment_password,doc_d_add1,doc_d_add2,doc_d_postal_code,doc_d_services,doc_d_specialization,doc_d_bio,doc_d_email ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 ,$11 , $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22 ) RETURNING *',
        [doc_d_complete_name, doc_d_gender, doc_d_phone, doc_d_city, doc_d_country, doc_d_department, doc_d_experience, doc_d_registration, doc_d_qualification,doc_consultation_mode,doc_d_regular_fee,doc_d_disc_fee,doc_d_booking_gender,doc_d_payout_mode,doc_d_payment_password,doc_d_add1,doc_d_add2,doc_d_postal_code,doc_d_services,doc_d_specialization,doc_d_bio,doc_d_email ]
      );
  
      res.status(201).json(response.rows[0]); // Return the created doctor
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating a doctor');
    }
  };  




  const get_doctor_details = async (req, res) => {
    const response = await pool.query('SELECT * FROM doctor_details');
    console.log(response.rows);
    res.status(200).json(response.rows);
}





module.exports = {
  post_doctor_registration,post_doctor_details, post_doctors,get_users,post_users,post_user_registration,get_doctors_info,get_doctor_details
}