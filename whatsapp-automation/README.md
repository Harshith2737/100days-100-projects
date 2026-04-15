# WhatsApp Automation

A full-stack application for automating WhatsApp messages.

## Features

- Create and manage contacts
- Compose messages
- Send messages via WhatsApp Web (requires manual QR scan)
- View message history and status

## Tech Stack

- **Backend**: FastAPI, SQLAlchemy, SQLite
- **Frontend**: React, TypeScript, Vite
- **Automation**: Selenium WebDriver

## Setup

### Backend

1. Navigate to `backend/` directory
2. Install dependencies: `pip install -r requirements.txt`
3. Run the server: `python -m uvicorn app.main:app --reload`

### Frontend

1. Navigate to `frontend/` directory
2. Install dependencies: `npm install`
3. Run the dev server: `npm run dev`

## Usage

1. Start the backend server
2. Start the frontend server
3. Open the frontend in your browser
4. Add contacts
5. Create messages
6. Send messages (first time requires QR scan in the backend terminal)

## Note

This uses Selenium to automate WhatsApp Web. For production use, consider WhatsApp Business API.