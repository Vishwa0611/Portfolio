# API Contracts - Ayush Vishwakarma Portfolio

## Overview
Backend implementation for portfolio website with contact form functionality.

## Mocked Data in Frontend
- `mock.js`: Contains all static portfolio data (personalInfo, skills, experience, projects, education, certifications)
- Contact form currently shows a toast notification without backend integration

## API Endpoints

### 1. GET /api/
- **Purpose**: Health check
- **Response**: `{ "message": "Portfolio API is running" }`

### 2. POST /api/contact
- **Purpose**: Store contact form submissions
- **Request Body**:
```json
{
  "name": "string",
  "email": "string", 
  "subject": "string",
  "message": "string"
}
```
- **Response**: 
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "subject": "string", 
  "message": "string",
  "created_at": "datetime",
  "status": "received"
}
```

### 3. GET /api/contact
- **Purpose**: Retrieve all contact submissions (for admin)
- **Response**: Array of contact objects

## Frontend Integration
- Update `Contact.jsx` to POST to `/api/contact` instead of mock toast
- Keep static data in `mock.js` (no backend needed for portfolio content)

## MongoDB Collections
- `contacts`: Store contact form submissions
