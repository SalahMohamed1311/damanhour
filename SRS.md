# Software Requirements Specification (SRS)
## Project: Damanhour University - Smart Campus Portal

### 1. Introduction
**1.1 Purpose**
This document describes the requirements for the frontend phase of the "Smart Campus Portal" for Damanhour University. The system aims to provide a centralized, responsive, and user-friendly digital platform for students to access academic and medical services.

**1.2 Scope**
The current phase focuses on the Frontend User Interface (UI) and User Experience (UX). It includes simulated authentication, a dynamic dashboard, and static pages for services. The backend integration is planned for the next phase.

### 2. Overall Description
**2.1 Product Perspective**
The portal is a standalone web application designed to be accessed via browsers on both desktop and mobile devices. It replaces scattered information with a unified digital hub.

**2.2 User Classes and Characteristics**
* **Students:** Primary users. Need access to schedules, grades, courses, and hospital bookings.
* **Faculty:** Secondary users. Need to post announcements and manage courses.
* **Admin:** Manages system settings and user accounts.

**2.3 Operating Environment**
* Web Browsers: Chrome, Safari, Edge, Firefox (Latest versions).
* Devices: Desktop, Tablet, Smartphone.

### 3. Functional Requirements
* **FR1: Authentication (Simulated)**
  * The system shall allow users to register using a university email.
  * The system shall validate email format and password strength (min 8 chars) on the client-side.
  * The system shall simulate login and redirect the user to the Dashboard.
* **FR2: Dashboard**
  * The system shall display a personalized greeting with the user's name.
  * The dashboard shall have a responsive sidebar navigation for all services.
* **FR3: Academic Services**
  * The system shall display a list of enrolled courses.
  * The system shall display a weekly schedule and exam dates.
  * The system shall display grades and cumulative GPA.
* **FR4: University Hospital**
  * The system shall provide a UI for booking medical appointments.
* **FR5: General**
  * The system shall display university announcements.
  * The system shall be fully responsive across all screen sizes.

### 4. Non-Functional Requirements
* **NFR1: Usability:** The UI must be intuitive and require no training for students to use.
* **NFR2: Performance:** Pages must load within 2 seconds.
* **NFR3: Portability:** The system must run perfectly on any modern browser without requiring specific plugins.
* **NFR4: Maintainability:** Code must follow modular architecture (separated CSS/JS files) and unified naming conventions.

### 5. UI/UX Design Constraints
* Color Palette: Professional University colors (Deep Blue, Cyan, White, Gold accents).
* Typography: 'Poppins' font for readability.
* Accessibility: High contrast and semantic HTML tags.