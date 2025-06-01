# IT-Master-FrontEnd-React

This is the **React frontend** for the IT Master online course platform. It allows users to browse, enroll in, and manage online courses, while admins can add or update courses. This frontend consumes RESTful APIs from the backend repository: [IT-Master-BackEnd-REST](https://github.com/Yugla-kosamshile/IT-Master-BackEnd-REST).

---

## 🌐 Tech Stack

- React
- React Router
- Context API
- Axios
- CSS (custom styling)
- H2 Console (via backend)
- Spring Boot (backend)

---

## 📁 Folder Structure

```

src/
├── appContext/               # React context for global state
│   └── AppContext.jsx
├── components/               # Reusable UI components
│   ├── AddCourse.jsx
│   ├── CourseCard.jsx
│   ├── CourseDetails.jsx
│   ├── Enrollment.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── NotFound.jsx
│   ├── SearchCourse.jsx
│   └── UpdateCourse.jsx
├── pages/                    # Route-level pages
│   ├── About.jsx
│   ├── ContactUs.jsx
│   ├── Courses.jsx
│   ├── Dashboard.jsx
│   ├── Enrolled.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Users.jsx
├── styles/
|    ├── AddCourse.css
│   ├── ContactUs.css
│   ├── Dashboard.css
│   ├── Login.css
│   ├── Navbar.css
│   ├── Register.css
│   └── UpdateCourse.css
├── App.jsx                   # Main component
├── axios.jsx                 # Axios base instance
├── index.css
├── App.css                
├── main.jsx                  # Entry point
└── store.js                  # Central state store (optional Redux-like)

````

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Git

### Clone and Install

```bash
git clone https://github.com/yourusername/IT-Master-FrontEnd-React.git
cd IT-Master-FrontEnd-React
npm install
````

### Run the Application

```bash
npm start
```

The app will run on: `http://localhost:3000`

Ensure the backend is running on: `http://localhost:8082`

---

## 🔗 Backend Integration

Make sure the following base URL is set in `axios.jsx`:

```js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8082',
});
```

---

## 🧩 Features

### User Features

* Register/Login
* Browse Courses
* Enroll in Courses
* View Enrolled Courses

### Admin Features

* Add New Course
* Update Course
* View Registered Users
* Dashboard Overview

---

## 🛠️ Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm start`     | Start development server |
| `npm run build` | Build for production     |
| `npm test`      | Run tests (if added)     |

---

## 🧪 Components Overview

| Component       | Purpose                     |
| --------------- | --------------------------- |
| `Navbar/Footer` | Layout and navigation       |
| `CourseCard`    | Display course info         |
| `AddCourse`     | Admin form to add course    |
| `UpdateCourse`  | Admin form to update course |
| `CourseDetails` | Detailed view of a course   |
| `Enrollment`    | Display enrolled course(s)  |
| `SearchCourse`  | Filter/search bar           |
| `NotFound`      | 404 fallback                |

---

## 🧬 State Management

* Uses React Context (`AppContext.jsx`)
* Optional central store in `store.js` for future enhancements

---

## 📄 Important Files

### `main.jsx`

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### `index.html` (in `public/`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IT Master Course System</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

### `package.json` (basic example)

```json
{
  "name": "it-master-frontend-react",
  "version": "1.0.0",
  "scripts": {
    "start": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.6.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.12.1"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
```

---

## 📬 Contact

For questions or support, please contact [G-Mail](yugalkosamshile2002@gmail.com)

```

---

Let me know if you'd like the actual starter code scaffolding for any of the components (like `AppContext.jsx`, `axios.jsx`, or `store.js`) included.
```
