# Employee Workflow Management Dashboard

This is a role-based task management project built using React.
The project is created for learning purposes and portfolio showcase.

<img width="960" height="441" alt="1" src="https://github.com/user-attachments/assets/b7936cfd-5cd7-4ed2-a3a2-c1cd8c75bce2" />

---

## Features

- Admin and Employee login system
- Role-based dashboard rendering
- Admin can create and assign tasks
- Employees can accept, complete, or fail tasks
- Task status management:
  - New
  - Active
  - Completed
  - Failed
- Global state management using Context API
- Data persistence using localStorage
- Responsive UI with Tailwind CSS

---

## Tech Stack

- React.js
- JavaScript (ES6+)
- Context API
- Tailwind CSS
- LocalStorage

---

## Login Credentials (Demo)

### Admin Login
Email: admin@example.com  
Password: 123
<img width="947" height="432" alt="2" src="https://github.com/user-attachments/assets/879d4f7d-a70f-4d4f-b3da-54ea05cf7948" />

### Employee Login (Example)
Email: e@e.com  
Password: 123

<img width="960" height="440" alt="3" src="https://github.com/user-attachments/assets/169efaf2-271b-4546-a2b5-2dc468933251" />

You can use any employee email from the demo data to log in.

---

## How Authentication Works

- Demo user data is stored in localStorage
- On successful login, user role is saved in localStorage
- Dashboard is rendered based on user role
- Session remains active after page refresh

---

## Project Highlights

- Clean and modular folder structure
- Role-based access control on frontend
- Task creation and assignment by admin
- Real-time task status updates
- Reusable and scalable React components
