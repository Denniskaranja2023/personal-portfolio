# TODO: Add Login Credentials to Projects

## Steps Completed:
- [x] 1. Update projects.js - Add loginCredentials array to Integrigrade project
- [x] 2. Update ProjectDetail.jsx - Add credential display section in sidebar
- [x] 3. Add loginCredentials to QuickBite project

## Notes:
- Login credentials should be displayed in a secure, visually clear format
- Show/hide password toggle functionality
- Handle both username and email fields

## Changes Made:

### 1. Frontend/src/data/projects.js
#### Integrigrade (id: 3):
- CLASSTEACHER: Anne Wanjiku / classteacher
- STUDENT: Charlie Kirk / student
- GUARDIAN: Andrew Kibe / guardian
- TEACHER: Jane Wambui / teacher

#### QuickBite (id: 1):
- AGENT: elizabeth.wanjiru@agent.com / agent
- CUSTOMER: dennis.karanja@customer.com / customer
- RESTAURANT: mamaskitchen@restaurant.com / restaurant
- ADMIN: john.admin@quickbite.com / admin

### 2. Frontend/src/pages/ProjectDetail.jsx
- Added Login Credentials section with:
  - Lock icon and header
  - Cards for each credential with role badge
  - Show/hide password toggle (eye icon)
  - Displays username OR email based on project
  - Passwords masked by default with ••••••••
  - Monospace font for credentials

