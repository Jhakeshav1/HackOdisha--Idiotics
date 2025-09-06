# CampusXchange - College Marketplace

A decentralized, college-only marketplace for buying/selling used gadgets, books, notes, and essentials with verified student access, real-time chat, negotiation bot, and smart recommendations.

## 🚀 Quick Deploy to Firebase

### One-Click Deployment

1. **Fork this repository** to your GitHub account
2. **Set up Firebase project** at [Firebase Console](https://console.firebase.google.com/)
3. **Install Firebase CLI**  
   ```bash
   npm install -g firebase-tools
   ```
4. **Login to Firebase**  
   ```bash
   firebase login
   ```
5. **Initialize Firebase in your project**  
   ```bash
   firebase init
   ```
   - Choose **Hosting** and **Functions** (if using backend)
   - Select your Firebase project
   - Set `frontend` as your public directory
6. **Deploy to Firebase**  
   ```bash
   firebase deploy
   ```
7. **Access your app!** 🎉

## ✨ Features

### 🎓 Student-Only Marketplace
- Verified college email authentication
- Campus-specific listings
- Student trust scores and ratings

### 💬 Real-time Communication
- Live chat for product discussions
- Typing indicators
- Negotiation bot for price discussions
- Product-specific chat rooms

### 📱 Modern Interface
- Responsive dark theme design
- Mobile-friendly interface
- Fast and intuitive user experience

### 🔒 Secure & Reliable
- JWT authentication
- File upload security
- Rate limiting
- CORS protection

## 🏗️ Architecture

### Backend Services
- **Express.js API** - RESTful endpoints
- **Socket.io** - Real-time chat
- **MongoDB** - Database
- **JWT** - Authentication
- **Multer** - File uploads

### Frontend
- **Vanilla JavaScript** - No framework dependencies
- **Real-time UI** - Socket.io client
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
├── campusx-backend/          # Backend API server
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── models/          # Database models
│   │   ├── services/        # Socket.io & storage
│   │   └── middleware/      # Auth & validation
│   ├── Dockerfile           # Production container
│   └── package.json
├── frontend/                 # Frontend application
│   ├── campusX.html         # Main application
│   └── src/
│       └── api.js           # API client
└── .github/workflows/       # CI/CD pipeline
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `PORT` | Server port | `4000` |
| `MONGODB_URI` | Database connection | `mongodb://mongo:27017/campusxchange` |
| `JWT_SECRET` | JWT signing secret | `your-super-secret-jwt-key` |
| `CORS_ORIGINS` | Allowed CORS origins | `*` |

### Resource Requirements

- **Backend**: 1 CPU, 1GB RAM, 10GB storage
- **Database**: 0.5 CPU, 512MB RAM, 5GB storage
- **Total**: 1.5 CPU, 1.5GB RAM, 15GB storage

## 🚀 Local Development

### Prerequisites
- Node.js 18+
- MongoDB
- Git

### Setup
```bash
# Clone the repository
git clone https://github.com/your-username/campusxchange.git
cd campusxchange

# Install dependencies
cd campusx-backend
npm install

# Start the server
npm start
```

### Access
- **Main App**: http://localhost:4000
- **API Health**: http://localhost:4000/health
- **API Status**: http://localhost:4000/api/status

## 📊 API Endpoints

### Authentication
- `POST /v1/auth/register` - Register new user
- `POST /v1/auth/login` - Login user
- `GET /v1/auth/me` - Get current user

### Listings
- `GET /v1/listings` - Get all listings
- `POST /v1/listings` - Create listing
- `GET /v1/listings/:id` - Get specific listing
- `PUT /v1/listings/:id` - Update listing
- `DELETE /v1/listings/:id` - Delete listing

### File Uploads
- `POST /v1/uploads` - Upload files

## 🔄 Real-time Features

### Socket.io Events
- `chatMessage` - Send/receive messages
- `negotiationMessage` - Price negotiations
- `joinChat` - Join chat room
- `typing` - Typing indicators

## 🛡️ Security

- JWT token authentication
- CORS protection
- Rate limiting
- Input validation
- File upload security
- Non-root Docker user

## 📈 Monitoring

### Health Checks
- `/health` - Basic health check
- `/api/status` - Detailed service status

### Logs
- Application logs via Firebase Console
- Error tracking and monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/your-username/campusxchange/issues)
- **Community**: [Firebase Community](https://firebase.google.com/community)

## 🎯 Roadmap

- [ ] Mobile app (React Native)
- [ ] Payment integration
- [ ] Advanced search filters
- [ ] Push notifications
- [ ] Admin dashboard
- [ ] Analytics and insights

---

**Built with ❤️ by TEAM IDIOTICS**