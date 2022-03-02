My Family

My Family was inspired by my fiancé Lien Tran.
She is the organizer in our family and whenever I ask
anything that relate to important documents, she would go through 
her folders to get it.  I want to make something that make it easier for her and this app came to mind.


## Built With

<a href="http://expressjs.com/en/resources/middleware/multer.html"><img src="https://user-images.githubusercontent.com/6388707/66124653-463a2d00-e5e5-11e9-8fed-b5bca26b66ea.png" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

### Prerequisites

Softwares used in creating this application includes:

- [Visual Studio Code](https://code.visualstudio.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Postico](https://eggerapps.at/postico/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Multer](http://expressjs.com/en/resources/middleware/multer.html)

The application's repository may require alterations to lines of codes if used with other softwares that are not listed above.

### Installation

1. To run this application, the user should fork the repository onto their own GitHub account. In the user's repository, the user should copy the link and clone the repository onto their local system. Navigate to the repository folder using the terminal and run command line `npm install`
   - `$ cd ../my-family`
   - `$ npm install`

<br />

2. Create a .env file in the repository folder and insert in the following lines with the placeholder variables.

   SERVER_SESSION_SECRET="`strongPassword`" 
   <br />

   Replace `strongPassword` with a strong password of the user's choice or use [https://passwordsgenerator.net/](https://passwordsgenerator.net/) to generate a password to replace it with.

<br />


3.  Create a local postgreSQL database called `prime_app` with Postico using the command lines from the database.sql file. Using different database systems may require the user to alter or add additional command lines to reflect the example database provided.

<br />

4. To start up the application, enter in the terminal the npm command lines of:

   - `npm run server`
   - `npm run client`

   The server should be running on `http://localhost:5000` whereas the client should be on `http://localhost:3000`. Both the server and the client is required to be up and running for the application to run successfully.

## Usage

Once the application is up and running, the user should be redirected to the browser with the application loaded. If not, open up a browser and enter in the url:

- `http://localhost:3000`

Users of this application will be able to add in their family members and then for each member they can add in their personal document, appointment, or keep track of their body growth.

- First View of Family Member:<br />

  - This have a table or a chart when user put in the information about family member height, weight, date.
  - This here can mainly be use by caregiver that want to keep track of a child growth.
  - Or as an adult you want to keep track of your body measurements.
  - User can add, edit, and delete the information user put in.

- Appointment View: <br />

  - User can see a table with appointments that related to that family member.
  - User can add, edit, and delete the appointment.

- Document View: <br />
  - User can upload, download, and delete document relate to the family member.


Authors
Ken Dang