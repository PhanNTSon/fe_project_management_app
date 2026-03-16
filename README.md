# Frontend - Project Management Application

This is the frontend component of the Project Management Application, built with modern web technologies to provide a fast and responsive user interface for managing projects, members, and resources.

## 🚀 Technologies Used
- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS & Vanilla CSS
- **Routing:** React Router v7

## 🛠️ Prerequisites
- Node.js (v18 or higher recommended)
- npm (Node Package Manager)

## 💻 Running Locally (Development Mode)

1. **Install Dependencies:**
   Navigate into this directory and run:
   ```bash
   npm install
   ```
2. **Environment Variables:**
   Ensure you have a `.env` file in the root of `fe_project_management` with the following minimum configuration:
   ```env
   VITE_API_URL=http://localhost:8080
   VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
   VITE_CLOUDINARY_UPLOAD_PRESET=your_preset
   ```
3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000` (or another port provided by Vite).

## 🐳 Running via Docker

The entire system (Frontend, Backend, and Database) is orchestrated using Docker Compose. From the **root workspace directory** (one level above this folder), run:

```bash
docker-compose up -d --build
```

- The frontend will be served at `http://localhost:3000` via Nginx.
- To view logs: `docker-compose logs -f frontend`
- To stop the containers: `docker-compose down`

## 🏗️ Building for Production

To create a production build:
```bash
npm run build
```
The compiled files will be located in the `dist` directory. You can preview the build using:
```bash
npm run preview
```