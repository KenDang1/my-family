const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// GET all the members belong to this userId
router.get('/:id', (req, res) => {
  // GET route code here
  console.log('get family UserId', req.user.id);
  
  let queryText = `
      SELECT * FROM "familyMembers"
      WHERE "user_id" = $1;
  `;

  let queryParams = [req.user.id]

  pool.query(queryText, queryParams)
      .then((result) => {
          res.send(result.rows);
      })
      .catch((err) => {
          console.log('error GET familyMember', err);
      });
});  // end of GET all the member belong to userId

// GET all the basic info of that member with the growth chart
router.get('/member/:id', (req, res) => {
  console.log('member id', req.params.id);
  
  let queryText = `
    SELECT
        "familyMembers"."firstName",
        "familyMembers"."lastName",
        "familyMembers"."birthday",
        TO_CHAR("date", 'yyyy-MM-dd') AS "date",
        "growth"."age",
        "growth"."height",
        "growth"."weight",
        "growth"."id"
    FROM "familyMembers"
    LEFT JOIN "growth"
        ON "growth"."familyMember_id" = "familyMembers"."id"
    WHERE "familyMembers"."id" = $1;
    `;

    let queryParams = [req.params.id]

    pool.query(queryText, queryParams)
      .then((result) => {
          res.send(result.rows);
          console.log('results', result.rows);
          
      })
      .catch((err) => {
          console.log('error GET memberInfo', err);
      });

}); // end of GET /member/:id basic informations


// POST (add a family member)
router.post('/', (req, res) => {
  // POST route code here
  console.log('new member', req.body);
  
  let newMember = req.body;

  const queryText = `
  INSERT INTO "familyMembers"
    ("firstName", "lastName", "birthday", "user_id")
  VALUES ($1, $2, $3, $4);
  `;

  const queryParams = [
    newMember.firstName,
    newMember.lastName,
    newMember.birthday,
    req.user.id
  ]

  pool.query(queryText, queryParams)
    .then((results) => {
      res.sendStatus(201)
    })
    .catch( err => {
      console.error(`POST member failed`, err);
      res.sendStatus(500);
    });
  
}); // end of POST

// POST a new appointment to that member
router.post('/appointment/:memberId', (req, res) => {
  // POST route code here
  console.log('post member id', req.params.memberId)
  let memberId = req.params.memberId;

  let newAppointment = req.body.newAppointment;
  console.log('newAppointment', newAppointment)

  const queryText = `
  INSERT INTO "appointment"
    ("name", "location", "date_time", "comments", "familyMember_id")
  VALUES ($1, $2, $3, $4, $5);
  `;

  const queryParams = [
      newAppointment.name,
      newAppointment.location,
      newAppointment.date_time,
      newAppointment.comments,
      memberId
  ]

  pool.query(queryText, queryParams)
    .then((results) => {
      res.sendStatus(201)
    })
    .catch( err => {
      console.error(`POST appointment failed`, err);
      res.sendStatus(500);
    });
  
}); // end of POST /appointment


// GET all the appointment belong to that member
router.get('/appointment/:id', (req, res) => {
  console.log('member id', req.params.id);
  
  let queryText = `
    SELECT
        "familyMembers"."firstName",
        "familyMembers"."lastName",
        "familyMembers"."birthday",
        TO_CHAR("date_time", 'yyyy-MM-dd') AS "date",
        "appointment"."name",
        "appointment"."location",
        "appointment"."comments",
        "appointment"."id"
    FROM "familyMembers"
    LEFT JOIN "appointment"
        ON "appointment"."familyMember_id" = "familyMembers"."id"
    WHERE "appointment"."familyMember_id" = $1;
    `;

  let queryParams = [req.params.id]

  pool.query(queryText, queryParams)
    .then((result) => {
        res.send(result.rows);
        console.log('results', result.rows);
        
    })
    .catch((err) => {
        console.log('error GET memberAppointment', err);
    });

}); // end of GET /appointment 

// Delete the appointment
router.delete('/:appointmentId', (req, res) => {
  console.log('appointmentId', req.params.appointmentId);
  let appointmentId = req.params.appointmentId;

  const queryText = `
    DELETE FROM "appointment"
    WHERE "id" = $1;
  `;

  let queryParams = [
    appointmentId
  ]

  pool.query(queryText, queryParams)
    .then(() => {
      res.send(204)
    })
    .catch((err) => {
      console.error('DELETE Appointment FAILED', err);
      res.sendStatus(500);
    });
}); // end of DELETE

router.get('/select/:memberId/:appointmentId', (req, res) => {
  console.log('select memberId', req.params.memberId);
  console.log('appId', req.params.appointmentId);
  
  const queryText= `
  SELECT DISTINCT
    "familyMembers"."id" AS "memberId",
    "familyMembers"."firstName",
    "familyMembers"."lastName",
    "familyMembers"."birthday",
    TO_CHAR("appointment"."date_time", 'yyyy-MM-dd') AS "appointmentDate",
    "appointment"."name" AS "appointmentName",
    "appointment"."location",
    "appointment"."comments",
    "appointment"."id" AS "appointmentId"
  FROM "familyMembers"
  JOIN "appointment"
    ON "appointment"."familyMember_id" = "familyMembers"."id"
  WHERE "appointment"."id" = $1;
  `;

  let queryParams = [
    req.params.appointmentId
  ];

  pool.query(queryText, queryParams)
    .then((result) => {
      console.log('result', result.rows[0]);
      res.send(result.rows[0])
    })
    .catch((err) => {
      console.error('get by member id failed', err);
      res.sendStatus(500);
    });
}); // end of GET select member

// THIS IS FOR EDITING APPOINTMENT
router.put('/:memberId', (req, res) => {
  console.log('memberId in PUT', req.params.memberId);
  console.log('update body', req.body);
  let updateAppointment = req.body;
  // = TO_DATE($3, 'yyyy-MM-dd')
  const queryText = `
    UPDATE "appointment" 
    SET ("name", "location", "date_time", "comments") =
        ($1, $2, $3, $4)
    WHERE "id" = $5 AND "familyMember_id" = $6;
  `;
  
  const queryParams = [
    updateAppointment.appointmentName,
    updateAppointment.location,
    updateAppointment.appointmentDate,
    updateAppointment.comments,
    updateAppointment.appointmentId,
    req.params.memberId
  ]

  pool.query(queryText, queryParams)
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query`, error);
          res.sendStatus(500);
      });
});

  module.exports = router;