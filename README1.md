I already have a portfolio website and a separate multimodel folder containing my completed chatbot system.

I want you to integrate this existing chatbot into my portfolio website.

Chatbot UI behavior
When the portfolio website first opens, show only a small floating chatbot icon/button.
Place the chatbot icon at the bottom-right corner of the website.
The icon should remain visible while the user scrolls.
Do not open the chatbot automatically.
When the user clicks the chatbot icon, open a chatbot window/panel similar to the reference image I provided.
The chatbot panel should appear above the floating button, preferably from the bottom-right.
Clicking the chatbot icon again, or clicking a close × button, should close the chatbot.
Chat window design

Create a clean, modern, professional chatbot UI containing:

Header with chatbot name such as "AI Assistant"
Small bot/avatar icon
Close × button
Scrollable conversation/messages area
Different styles for user and bot messages
Message input field at the bottom
Send button/icon
Optional typing/loading indicator while waiting for the chatbot response

The UI should be inspired by the provided reference image, but make it more modern and suitable for a professional developer/AI-engineer portfolio.

Important integration requirement

My chatbot functionality is already implemented inside the multimodel folder.

Do NOT rebuild the chatbot logic.
Do NOT create another chatbot backend.
Do NOT replace my existing multimodel implementation.
Remove the voice,picture and video feature.

First inspect the existing project structure and the multimodel folder. Determine:

where the chatbot entry point is,
how messages are currently sent,
how responses are returned,
whether it uses an API, Python backend, FastAPI, Flask, WebSocket, or another method.

Then connect the portfolio chatbot UI to that existing implementation.

Folder/project rules
Preserve my current portfolio structure.
Preserve the existing multimodel folder.
Reuse existing chatbot functions/API wherever possible.
Do not delete or rename unrelated files.
Do not change existing website sections unnecessarily.
Keep chatbot-specific frontend code in separate reusable components/files.



Do not force this structure if my current project uses a different framework. Adapt to the existing architecture.

Responsive design

On desktop:

floating button at bottom-right
chatbot window around 350–420px wide
height around 500–600px

On mobile:

make the chatbot responsive
use most of the screen width
keep proper spacing from screen edges
make sure the input and close controls remain accessible
Animation

Add a smooth opening/closing animation:

closed → click icon → chat panel slides/fades in

open → click close/icon → panel slides/fades out

Keep animations lightweight and professional.

Very important

Before modifying code:

Analyze the current folder structure.
Locate my existing portfolio frontend.
Locate the multimodel chatbot implementation.
Explain briefly which files need to be modified or created.
Then perform the integration.
Run/check the project afterward and fix integration errors.

The final behavior should be:

Portfolio opens
       ↓
Only chatbot icon visible
       ↓
User clicks icon
       ↓
Chat window opens
       ↓
User enters message
       ↓
Existing multimodel chatbot processes it
       ↓
Response appears inside chat window
       ↓
User clicks X
       ↓
Chat window closes
       ↓
Floating chatbot icon remains visible

Use my existing website styling/theme so the chatbot feels like part of the portfolio, rather than a completely separate application.
