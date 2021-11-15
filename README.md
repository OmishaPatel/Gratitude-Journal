# Description

- In this gratitude journal, a user can write, read, delete and update the daily journal post. User can also download journal data in CSV format. User can alco change the account settings through settings tab.

# Technlogies Used

- React Hooks, React Router DOM, Context-API
- LocalStorage for dark mode functionality
- Sequelize as ORM
- Postgresql as database
- JWT Authentication
- Server Side Pagination

# Installation

- To run this project first clone it to your repository then install modules for both api and client respectively using `yarn install`.
- Then in api folder, change the `.env.example` file to `.env` and write your variables for database and access token
- By default client side runs on port 3000 and api side runs on 5000.
- In the client folder replace the heroku url for e.g. `https://omi-gratitude-journal.herokuapp.com`with `http://localhost:5000` to make the api calls from your browser.
- To start the client and api type `yarn start`.

# Website URL

https://omi-gratitude-journal.netlify.app/
