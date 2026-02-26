**🌐 Simple Express Quiz App**

A lightweight Node.js web server built with the Express framework. This app presents a simple riddle to the user and provides immediate feedback based on their answer. It’s a perfect example of Client-Server communication and Middleware usage.

🚀 How it Works
The Home Page (GET /): When you visit the site, the server sends back a simple HTML form asking a question.

Processing Input: The app uses express.urlencoded middleware. This "translates" the data sent from the HTML form into a JavaScript object (req.body) that the server can understand.

The Logic (POST /answer):

If the user types "Blue" (case-insensitive), they get a success message.

Anything else triggers a "Try again" message.

Route Protection: If someone tries to visit /answer directly in their browser (which is a GET request), they get a friendly "Are you lost?" message, since that page is only meant to handle form submissions.

🛠️ Tech Stack
Node.js: The runtime environment.

Express.js: The web framework used to handle routing and requests.

HTML: For the basic user interface.

📦 Getting Started
1. Install Dependencies
Make sure you have Node.js installed. Then, create your package.json and install Express:

Bash
npm install
2. Run the Server
Start your application by running:

Bash
node index.js
(Assuming your file is named index.js)

3. View the App
Open your browser and navigate to:
http://localhost:3000

📝 Key Code Concepts
Middleware: ourApp.use(express.urlencoded({extended: false})) is crucial. Without this, the server wouldn't be able to "read" what you typed in the input box.

Statelessness: Notice how the server doesn't "remember" who you are. Every time you submit the form, it's a fresh interaction.

Port 3000: The ourApp.listen(3000) line tells the computer to open a specific "door" for web traffic to come through.
