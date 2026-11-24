# UML Diagrams & System Architecture

*(Note: Diagrams are created using Draw.io/PlantUML. Images will be embedded here in the final submission).*

## 1. Use Case Diagram
**Actors:** Student, Faculty, System Admin.
**Main Use Cases for Student:**
* Register / Login
* View Dashboard
* View Courses & Schedule
* Check Grades
* Book Hospital Appointment
* Read Announcements

## 2. Sequence Diagram (Login Process)
**Scenario:** Student Login Flow
1. **User** enters Email & Password in `login.html`.
2. **Browser (JS)** validates the inputs (Email regex & Password length).
3. **Browser** saves a simulated session in `localStorage`.
4. **System** redirects User to `dashboard.html`.
5. **Browser** reads `localStorage` and displays the User's name.

## 3. Class Diagram (Frontend Architecture)
**Classes / Objects:**
* **User:** `name`, `email`, `password`, `role` (Methods: `login()`, `logout()`)
* **Dashboard:** `userName`, `notifications` (Methods: `loadUserData()`)
* **Course:** `courseName`, `doctorName`, `credits`
* **Appointment:** `department`, `date`, `time`

## 4. ER Diagram (Future Database Design)
*(Planned for Backend Phase)*
* **Users Table:** `id`, `name`, `email`, `password_hash`, `role_id`
* **Courses Table:** `id`, `name`, `doctor_id`
* **Enrollments Table:** `student_id`, `course_id`, `grade`
* **Appointments Table:** `id`, `student_id`, `doctor_id`, `appointment_date`