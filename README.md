# WCS JS Checkpoint

![](https://static.tvtropes.org/pmwiki/pub/images/potc_monocle2.jpg)

Run the project and read the instructions.

## Installation

1. Clone the current repository.

2. Create a branch correctly named as "LASTNAME_FIRSTNAME".

3. Move into the `backend` directory and copy the `.env.sample` file to create your `.env` file.
   **This one is not committed to the shared repository.**
   Fill your backend `.env` with your database credentials. The `DB_NAME` can stay as **checkpoint3**.
   You may have to change `APP_PORT` if the port 5000 is not available.

4. Move into the `frontend` directory and copy the `.env.sample` file to create your `.env` file.
   **This one is not committed to the shared repository.**
   Fill your frontend `.env` with the url of your backend. In particular, adapt the port if your port 5000 is not available.

5. Execute the following commands from the root folder of the project to start:

```bash
# Install dependencies
npm run setup

# Create 'checkpoint3' DB
cd backend
npm run migrate
cd ..
```

## Usage

Launch the project with the command below and follow the instructions on the homepage `http://localhost:3000/`;

```bash
npm run dev
```

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)
