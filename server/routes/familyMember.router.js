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
    console.log('id is', req.params.id);
    
    let queryText = `
        SELECT * FROM "familyMembers"
        WHERE "user_id" = $1;
    `;

    let queryParams = [req.params.id]

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
            "growth"."age",
            "growth"."date",
            "growth"."height",
            "growth"."weight"
        FROM "familyMembers"
        JOIN "growth"
            ON "growth"."familyMember_id" = "familyMembers"."id"
        WHERE "familyMembers"."id" = $1;
      `;

      let queryParams = [req.params.id]

      pool.query(queryText, queryParams)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('error GET memberInfo', err);
        });

  })
  /**
   * POST route template
   */
  router.post('/', (req, res) => {
    // POST route code here
  });
  
  module.exports = router;