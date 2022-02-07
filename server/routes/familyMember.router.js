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
  
  /**
   * POST route template
   */
  router.post('/', (req, res) => {
    // POST route code here
  });
  
  module.exports = router;