# AI Powered ChatBot

A responsive, React-based AI chatbot interface with a floating toggle button, auto-scroll, and API integration.

---

## Features

- **Floating Chatbot Button:** Opens and closes the chat window.
- **Responsive Design:** Works on both desktop and mobile devices.
- **Chat History:** Displays user and bot messages.
- **Auto-Scroll:** Chat view scrolls to the latest message automatically.
- **Conversation Reset:** Conversation clears when the chat is closed.
- **Material Symbols:** Uses Google Material Symbols for icons.
- **API Integration:** Sends user messages to an AI backend and displays responses.

---

## Project Structure

```
/ChatBot
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ChatForm.jsx
│   │   ├── ChatMessage.jsx
│   │   └── ChatbotIcon.jsx
│   ├── App.jsx
│   ├── companyInfo.js
│   └── index.css
└── package.json
```

---

## Main Components

### `App.jsx`
- Manages chatbot state, visibility, and API communication.
- Handles auto-scroll and conversation reset on close.

### `ChatForm.jsx`
- Handles user input and form submission.

### `ChatMessage.jsx`
- Renders individual chat messages.

### `ChatbotIcon.jsx`
- Renders the chatbot avatar/icon.

### `companyInfo.js`
- Exports initial company info for the first bot message.

### `index.css`
- Contains all styling and responsive rules.

---

## API Integration

- **Endpoint:**  
  Set via `VITE_API_URL` in your environment variables.
- **Request:**  
  Sends chat history as JSON.
- **Response:**  
  Expects:
  ```json
  {
    "candidates": [
      {
        "content": {
          "parts": [
            { "text": "Bot response here" }
          ]
        }
      }
    ]
  }
  ```
- **Error Handling:**  
  Displays error messages in the chat if the API fails.

---

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set up environment variables:**
   - Create a `.env` file with your API URL:
     ```
     VITE_API_URL=https://your-api-endpoint
     ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open in browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## Customization

- **Change initial bot message:**  
  Edit `companyInfo.js`.
- **Change styles:**  
  Edit `src/index.css`.
- **Change icons:**  
  Update icon names in the JSX and ensure Google Fonts link is present in `index.html`.

---

## License

MIT (or your chosen license)
