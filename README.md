# WellNest Digital Health Identity

WellNest is a web application for managing digital health identities. It allows users to register, log in, manage their health card, book appointments, and view information about doctors and hospitals.

## Features

- **User Registration & Login:** Secure sign-up and login with local storage and backend support.
- **Digital Health Card:** View and manage your digital health card with QR code.
- **Book Appointments:** Schedule appointments with doctors or hospitals.
- **Doctors & Hospitals Directory:** Browse top doctors and hospitals in Belagavi.
- **Medical History & Access Control:** Components for viewing medical history and managing data access.
- **Responsive UI:** Built with Tailwind CSS for modern, responsive design.

## Project Structure

```
digital-health-identity/
├── public/
│   ├── index.html
│   ├── login.html
│   ├── dr.html
│   ├── hospitals.html
│   ├── appointment.html
│   ├── hospitalappointmen.html
│   ├── CardACC.html
│   └── favicon.ico
├── src/
│   ├── css/
│   │   └── tailwind.css
│   ├── js/
│   │   └── app.js
│   └── components/
│       ├── HealthCardForm.html
│       ├── MedicalHistory.html
│       ├── SummaryView.html
│       └── AccessControl.html
├── server.js
├── tailwind.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd digital-health-identity
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Build Tailwind CSS:**
   ```sh
   npm run build
   ```
   This will generate the compiled CSS in the `public/` directory.

4. **Start the development server:**
   ```sh
   npm start
   ```
   This uses `live-server` to serve the `public/` directory.

5. **(Optional) Start the backend server:**
   ```sh
   node server.js
   ```
   The backend runs on port 5000 by default and connects to a local MongoDB instance.

### Usage

- Open [public/index.html](public/index.html) in your browser to access the main dashboard.
- Use [public/login.html](public/login.html) to register or log in.
- Browse doctors ([public/dr.html](public/dr.html)) and hospitals ([public/hospitals.html](public/hospitals.html)).
- Book appointments via [public/appointment.html](public/appointment.html) or [public/hospitalappointmen.html](public/hospitalappointmen.html).
- View your digital health card at [public/CardACC.html](public/CardACC.html).

### Development

- Frontend code is in the `public/` and `src/` directories.
- Backend API is in [server.js](server.js).
- Tailwind CSS is configured via [tailwind.config.js](tailwind.config.js) and [src/css/tailwind.css](src/css/tailwind.css).

## License

This project is licensed under the MIT License.

---

**Contributions are welcome!** Please open issues or submit pull requests
