# 🏫 School Info Portal

A mini web application built with **Next.js** and **MySQL** that allows users to:
1. Add school details (with image upload) via a form.
2. View all schools in a responsive, product-card style listing page.

---

## 🚀 Features

- **Add School**: Form with validation (react-hook-form).
- **Show Schools**: Displays schools in a responsive grid (like ecommerce).
- **Image Upload**: Stores school images in `/public/schoolImages`.
- **Database**: Uses MySQL to store school information.
- **Responsive Design**: Works on desktop and mobile.

---

## 🗄️ Database Setup

Run the following SQL to create the database and table:

```MySQL
CREATE DATABASE school_db;
USE school_db;

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  contact VARCHAR(20) NOT NULL,
  image TEXT,
  email_id TEXT NOT NULL
);

Project Structure
school-info-portal/
├── lib/
│   └── db.js                # MySQL connection helper
├── pages/
│   ├── _app.js
│   ├── addSchool.jsx        # Add school form
│   ├── showSchools.jsx      # Show schools listing
│   └── api/
│       └── schools/
│           └── index.js     # API route (GET + POST)
├── public/
│   └── schoolImages/        # Uploaded school images
├── styles/
│   └── globals.css
├── sql/
│   └── schema.sql           # DB schema
├── .env.local               # Env vars (ignored in git)
├── tailwind.config.js
├── package.json
└── README.md
```
## Running Locally

## Clone the repo

git clone https://github.com/im-avinash/school-info-portal.git
cd school-info-portal


##Install dependencies

npm install


## Setup DB

Start MySQL.

## Run sql/schema.sql or the queries above.

Run the dev server

npm run dev


## Visit: http://localhost:3000

