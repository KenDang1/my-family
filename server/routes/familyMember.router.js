const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();


/**
 * GET route template
 * getting all the members belong to this user id
 */
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
  });
  
  router.get('/member/:id', (req, res) => {
    console.log('member id', req.params.id);
    
    let queryText = `
      SELECT
          "familyMembers"."firstName",
          "familyMembers"."lastName",
          "familyMembers"."birthday",
          TO_CHAR("date", 'MON DD, YYYY') AS "date",
          "growth"."age",
          "growth"."height",
          "growth"."weight"
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

  });
  /**
   * POST route template
   */
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
    
  });

  router.post('/appointment', (req, res) => {
    // POST route code here
    // let memberId = req.body.id.id;
    // console.log('member id', memberId)
    let newAppointment = req.body;
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
        newAppointment.familyMember_id
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

  router.get('/appointment/:id', (req, res) => {
    console.log('member id', req.params.id);
    
    let queryText = `
      SELECT
          "familyMembers"."firstName",
          "familyMembers"."lastName",
          "familyMembers"."birthday",
          TO_CHAR("date_time", 'MON DD, YYYY') AS "date",
          "appointment"."name",
          "appointment"."location",
          "appointment"."comments"
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
            console.log('error GET memberInfo', err);
        });

  }); // end of GET /appointment 
  
  module.exports = router;