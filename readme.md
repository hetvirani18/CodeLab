CodeLab
=======

Check out the live demo: https://code-lab.live

CodeLab is a LeetCode-style coding platform with a built-in code runner, AI tutor chat, streak tracking, and solution video uploads.

Features
--------
- Problem list, filters, and difficulty tagging
- Solve, run, and submit code against test cases
- AI tutor chat for hints and debugging help
- User profiles, activity streaks, and submission history
- Admin panel for problem and video management

Tech Stack
---------
Frontend
- React 19 + Vite
- Redux Toolkit
- Tailwind CSS v4 + DaisyUI
- Monaco Editor
- React Router

Backend
- Node.js + Express 5
- MongoDB + Mongoose
- Redis (rate limiting + token blocklist)
- JWT auth via cookies
- Judge0 (code execution)
- Cloudinary (solution video storage)
- Google GenAI (AI tutor)

Getting Started (Local)
-----------------------
Prerequisites
- Node.js 18+
- MongoDB instance
- Redis instance
- Judge0 base URL
- Cloudinary account

1) Backend
	- Go to the backend folder and install dependencies.
	- Create a .env file with the variables below.
	- Start the server.

	```bash
	cd backend
	npm install
	npm run dev
	```

2) Frontend
	- Go to the frontend folder and install dependencies.
	- Start the Vite dev server.

	```bash
	cd frontend
	npm install
	npm run dev
	```

By default the backend allows CORS from http://localhost:5173.

Environment Variables (Backend)
-------------------------------
- PORT=5000
- DB_CONNECT_STRING=mongodb_connection_string
- JWT_KEY=your_jwt_secret
- REDIS_HOST=localhost
- REDIS_PORT=6379
- REDIS_USERNAME=redis_user_if_any
- REDIS_PASSWORD=redis_password_if_any
- JUDGE0_URL=https://your-judge0-instance
- CLOUDINARY_CLOUD_NAME=cloud_name
- CLOUDINARY_API_KEY=cloudinary_api_key
- CLOUDINARY_API_SECRET=cloudinary_api_secret

Rate limiting (optional)
- WINDOW_SIZE=3600
- MAX_REQUESTS=100
- MAX_RUN_REQUESTS=50
- MAX_SUBMIT_REQUESTS=50
- DELAY_RUN_TIME=10
- SUBMIT_RUN_TIME=10

API Routes
----------
Base URL: /user

| Method | Endpoint | Auth | Purpose |
| --- | --- | --- | --- |
| POST | /register | No | Create a new user account. |
| POST | /login | No | Log in and set auth cookie. |
| POST | /logout | User | Log out and invalidate token. |
| POST | /admin/register | Admin | Create a new admin account. |
| GET | /profile | User | Get the logged-in user profile. |
| GET | /public-profile/:id | No | Get a public user profile by id. |
| DELETE | /delete-profile | User | Delete the logged-in user profile. |
| POST | /update-profile | User | Update profile fields or avatar. |
| GET | /activity | User | Fetch activity stats and streaks. |
| GET | /check | User | Validate token and return user info. |

Base URL: /problem

| Method | Endpoint | Auth | Purpose |
| --- | --- | --- | --- |
| POST | /create | Admin | Create a new coding problem. |
| PUT | /update/:id | Admin | Update a problem by id. |
| DELETE | /delete/:id | Admin | Delete a problem by id. |
| GET | /problem-by-id/:id | User | Get a problem for solving. |
| GET | /problem-by-id-admin/:id | Admin | Get a problem with admin fields. |
| GET | /all-problems | User | List all problems for the user. |
| GET | /problems-solved-by-user | User | Get problems solved by user. |
| GET | /submitted-codes/:pid | User | Get user submissions for a problem. |

Base URL: /submission

| Method | Endpoint | Auth | Purpose |
| --- | --- | --- | --- |
| POST | /submit/:id | User | Submit code for final judging. |
| POST | /run/:id | User | Run code against sample tests. |
| GET | /user-submissions | User | List submissions by the user. |
| GET | /submissions/:id | User | List submissions for a problem. |

Base URL: /ai

| Method | Endpoint | Auth | Purpose |
| --- | --- | --- | --- |
| POST | /chat | User | Chat with AI tutor for a problem. |

Base URL: /video

| Method | Endpoint | Auth | Purpose |
| --- | --- | --- | --- |
| GET | /create/:problemId | Admin | Generate Cloudinary upload signature. |
| POST | /save | Admin | Save uploaded video metadata. |
| DELETE | /delete/:problemId | Admin | Delete a solution video by problem. |

Auth Notes
----------
- Auth uses a JWT stored in the cookie named token.
- Admin routes require an admin role in the JWT.
`