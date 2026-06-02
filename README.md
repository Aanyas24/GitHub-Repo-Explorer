# GitHub Repo Explorer

## Overview

GitHub Repo Explorer is a full-stack web application that allows users to search GitHub profiles and explore repositories. The application uses a custom Node.js backend to fetch GitHub data, implements server-side caching, and provides repository analytics in a modern terminal-inspired UI.

## Live Demo

Frontend:
(https://github-repo-explorer-eta-ten.vercel.app/)

Backend:
https://github-repo-explorer-api-2m1s.onrender.com

## Features

- Search GitHub users
- View profile information
- View repositories
- Sort repositories by stars, name, and last updated
- Server-side caching
- Responsive design
- Language analytics
- Recent searches
- Modern GitHub dashboard UI

## Tech Stack

### Frontend

- React
- Vite
- Axios
- Tailwind CSS
- Lucide React

### Backend

- Node.js
- Express.js
- Axios
- Node Cache
- CORS

## How To Run Locally

### Clone Repository

```bash
git clone YOUR_REPO_URL
```

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## API Documentation

### GET

```http
/api/github/:username
```

### Example

```http
/api/github/torvalds
```

### Response

```json
{
  "profile": {},
  "repos": []
}
```

## Project Structure

```text
GitHub-Repo-Explorer
│
├── client
│   ├── src
│   ├── components
│   └── assets
│
├── server
│   ├── routes
│   ├── services
│   └── index.js
│
└── README.md
```

## Future Improvements

- Pagination
- Advanced filtering
- Repository charts
- Contribution analytics
- Dark/Light theme toggle
- Search suggestions
