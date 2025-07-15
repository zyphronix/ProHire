# ProHire
A job seeking and posting platform that connects job seekers with recruiters.

## ✨ Features

### 👤 For Job Seekers
- Account creation and management
- Job search with advanced filtering
- Save interesting job postings
- Apply to jobs
- Profile customization
- Resume upload and management

### 💼 For Recruiters
- Company registration and profile management
- Job posting creation and management
- Access to applicant details (name, phone, resume)
- Applicant tracking and management

## 🛠️ Tech Stack

- Frontend: React.js
- Backend: Node.js
- Database: MongoDB
- Cloud Storage: Cloudinary

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8000
MONGO_URI=mongodb+srv://your_username:your_password@cluster0.example.mongodb.net/
SECRET_KEY=your_secret_key
API_SECRET=your_cloudinary_api_secret
CLOUD_NAME=your_cloudinary_cloud_name
FRONTEND_URL=https://localhost:5173
```

## 🔧 Frontend Configuration

Update the backend URL in `client/src/utils/constant.js`:

```javascript
const BASE_URL = "http://localhost:8000";
```

## 💻 Local Development

1. Clone the repository
2. Install dependencies:
```bash
# Backend
cd backend
npm install

# Frontend
cd client
npm install
```

3. Start the development servers:
```bash
# Backend
npm run dev

# Frontend
npm run dev
```

