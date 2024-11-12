Creating a custom Minecraft launcher in Electron that supports saves, mods, shaders, and resource packs from a custom directory involves a few steps. Here’s a high-level overview of how to get started:

1. Set Up Your Electron Project

First, create a basic Electron project:

# Install the Electron CLI if you haven't already

```bash
npm install -g electron
```

# Initialize a new project

```bash
mkdir minecraft-launcher
cd minecraft-launcher
npm init -y
```

# Install Electron and other dependencies

```bash
npm install electron
```

Create a basic Electron application with an index.js file as your main entry point, and add a basic HTML interface in an index.html. 2. Integrate Minecraft Launch Functionality

The Minecraft launching part involves interacting with the game’s minecraft.jar and managing files in a custom directory. Use a Minecraft launcher library like minecraft-launcher-core-node or mineflayer.

Install minecraft-launcher-core:

```bash
npm install minecraft-launcher-core
```

Set up a basic launch function using this library. 3. Configure the Launcher for Custom Directories

By default, Minecraft saves its files in the .minecraft folder in the user’s home directory. To create a custom directory, you’ll need to modify the gameDirectory and other relevant paths.

Here’s how you might set up a simple launcher function with a custom directory:

```js
const { app, BrowserWindow } = require("electron");
const { Launcher } = require("minecraft-launcher-core");
const path = require("path");

const launcher = new Launcher();

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile("index.html");
}

app.whenReady().then(createWindow);

function launchMinecraft() {
  const options = {
    clientPackage: null, // If you have a pre-downloaded package, add it here
    authorization: {
      access_token: "your-access-token",
      client_token: "your-client-token",
      uuid: "your-user-uuid",
      name: "your-username",
    },
    root: path.join(app.getPath("userData"), "custom_minecraft"), // Custom directory
    version: {
      number: "1.16.5",
      type: "release",
    },
    memory: {
      max: "4G",
      min: "2G",
    },
  };

  launcher.launch(options);

  launcher.on("debug", (e) => console.log(e));
  launcher.on("data", (e) => console.log(e));
}
```

4. Manage Mods, Shaders, Saves, and Resource Packs

Within your custom directory (path.join(app.getPath('userData'), 'custom_minecraft') in the example), create folders for mods, shaders, saves, and resource packs. You’ll need to download or copy these files into these folders.

Example directory structure:

custom_minecraft/
├── mods/
├── shaderpacks/
├── saves/
├── resourcepacks/
└── versions/

5. Handle Custom Settings in the Launcher UI

In your Electron HTML and JavaScript (frontend), create an interface where users can:

    Select mods, shaders, and resource packs.
    Manage the custom directory’s contents.

Add file pickers or drag-and-drop areas in your UI to allow users to add files to these directories. Use Node’s fs module or a library like electron-store to manage settings and remember user preferences. 6. Launch the Game with Custom Settings

Modify the launch options based on the selected files. For instance, if a user selects a specific resource pack, make sure it’s in the resourcepacks directory and specify it in the options. 7. Test and Debug

Launch Minecraft from your custom launcher and test the configuration. Check that:

    The game runs with your custom directory.
    Mods, shaders, and resource packs load correctly.
    Saves are stored in the custom directory.

8. Package the Launcher

Once everything is working, package the application with Electron Forge or Electron Packager to distribute your custom launcher.

# Install Electron Forge

```bash
npx @electron-forge/cli import
```

# Build the application

```bash
npm run make
```

This should give you a working launcher that players can use to manage custom saves, mods, shaders, and resource packs!

To allow your friends to use the launcher without hardcoding authentication details, you’ll need to implement a login system that handles user authentication with Mojang or Microsoft accounts (Minecraft requires a Microsoft account as of the recent versions). Here’s how you can set it up.

1. Use an Authentication Library

To authenticate users without hardcoding credentials, use a library that handles Microsoft authentication for Minecraft, such as minecraft-auth or similar.

Install minecraft-auth:

npm install minecraft-auth

2. Set Up the Login Flow

In your Electron app, create a function to handle the login process. When your friend logs in, it should open a Microsoft login page in a browser window, and once they log in, it will receive a token that allows the launcher to access Minecraft.

Here’s an example of how to set up a Microsoft login flow:
Add Login Function in index.js

```js
const { app, BrowserWindow } = require("electron");
const { authenticate } = require("minecraft-auth");
const { Launcher } = require("minecraft-launcher-core");
const path = require("path");
const fs = require("fs");

let authToken = null;
const launcher = new Launcher();

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile("index.html");
}

app.whenReady().then(createWindow);

// Function to handle login
async function login() {
  try {
    const auth = await authenticate("microsoft"); // Starts the Microsoft login flow
    authToken = auth;

    // Save authentication info for future logins
    fs.writeFileSync(
      path.join(app.getPath("userData"), "auth.json"),
      JSON.stringify(authToken)
    );
    console.log("Authentication successful:", auth);
  } catch (error) {
    console.error("Login failed:", error);
  }
}

// Function to launch Minecraft with the authenticated user
function launchMinecraft() {
  if (!authToken) {
    console.log("User not logged in!");
    return;
  }

  const options = {
    authorization: authToken,
    root: path.join(app.getPath("userData"), "custom_minecraft"), // Custom directory
    version: {
      number: "1.16.5",
      type: "release",
    },
    memory: {
      max: "4G",
      min: "2G",
    },
  };

  launcher.launch(options);

  launcher.on("debug", (e) => console.log(e));
  launcher.on("data", (e) => console.log(e));
}
```

3. Add UI for Login and Launch

In your HTML file (index.html), create buttons for logging in and launching Minecraft:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Minecraft Launcher</title>
  </head>
  <body>
    <h1>Custom Minecraft Launcher</h1>
    <button id="login">Login</button>
    <button id="launch">Launch Minecraft</button>

    <script>
      const { ipcRenderer } = require("electron");

      document.getElementById("login").addEventListener("click", () => {
        ipcRenderer.send("login");
      });

      document.getElementById("launch").addEventListener("click", () => {
        ipcRenderer.send("launch");
      });
    </script>
  </body>
</html>
```

In your main Electron process (back in index.js), add event listeners for these buttons:

```js
const { ipcMain } = require("electron");

// Listen for login and launch events from the UI
ipcMain.on("login", () => {
  login(); // Call the login function
});

ipcMain.on("launch", () => {
  launchMinecraft(); // Call the launch function
});
```

4. Save and Load Authentication Tokens

To avoid asking the user to log in every time, save their token in a file (e.g., auth.json) and load it when the app starts.
Add Token Persistence in index.js

```js
// Load authentication token if it exists
function loadAuthToken() {
  const authPath = path.join(app.getPath("userData"), "auth.json");
  if (fs.existsSync(authPath)) {
    authToken = JSON.parse(fs.readFileSync(authPath));
    console.log("Loaded auth token from file.");
  }
}

// Call this function at startup
loadAuthToken();
```

Now, whenever your friends start the launcher, it will:

    Check if an auth.json file exists to load previous authentication details.
    Prompt them to log in only if no token is found.
    Use the loaded token to authenticate the user and launch Minecraft.

Summary

This approach enables your custom launcher to:

    Authenticate users with their own Microsoft accounts.
    Save authentication tokens for future sessions.
    Allow friends to log in and play Minecraft without sharing your credentials.

Du:
okay i see. but well now with the login. do they stay logged in? or do they need to relogin every pc reboot?
ChatGPT:
ChatGPT

With this setup, they should stay logged in across PC reboots, as long as the auth.json file is saved and contains a valid authentication token. Here’s how it works in more detail:

1. Access and Refresh Tokens

   When users log in using their Microsoft accounts, the authentication library retrieves both an access token (used to access the game) and a refresh token (used to get a new access token when it expires).
   Access tokens are generally short-lived (often valid for about an hour), while refresh tokens are longer-lived and can remain valid for weeks to months.

2. Refreshing the Access Token

   The minecraft-auth library (or a similar library) is designed to handle token refreshes by using the refresh token to get a new access token without requiring the user to log in again.
   If your Electron launcher is set up to load the saved auth.json file, it will include the refresh token, allowing the launcher to request a fresh access token whenever the previous one has expired.

3. Automate Token Refresh on Launch

   When your friends start the launcher, the authentication library can check if the access token is valid or expired. If expired, it will use the refresh token automatically (assuming it’s still valid) to get a new access token and update auth.json.
   This way, as long as the refresh token is valid, they won’t have to log in again.

Example of Automatic Refresh Handling

Here's how you might adjust the launchMinecraft function to handle automatic refreshing:

```js
async function launchMinecraft() {
  // Check if the user is logged in
  if (!authToken) {
    console.log("User not logged in!");
    return;
  }

  // Attempt to refresh the access token if it's expired
  try {
    // The `refresh` method will automatically use the refresh token to get a new access token if needed
    authToken = await authenticate("microsoft", {
      refreshToken: authToken.refresh_token,
    });

    // Update the `auth.json` file with the new tokens after refresh
    fs.writeFileSync(
      path.join(app.getPath("userData"), "auth.json"),
      JSON.stringify(authToken)
    );
    console.log("Access token refreshed successfully.");
  } catch (error) {
    console.error(
      "Token refresh failed. User may need to log in again:",
      error
    );
    return;
  }

  const options = {
    authorization: authToken,
    root: path.join(app.getPath("userData"), "custom_minecraft"), // Custom directory
    version: {
      number: "1.16.5",
      type: "release",
    },
    memory: {
      max: "4G",
      min: "2G",
    },
  };

  launcher.launch(options);

  launcher.on("debug", (e) => console.log(e));
  launcher.on("data", (e) => console.log(e));
}
```

4. When They Would Need to Re-Login

Your friends would only need to re-login in cases where:

    The refresh token has expired or been revoked (often due to prolonged inactivity or logging out manually).
    They delete the auth.json file.
    The authentication library fails to refresh the token for some other reason (e.g., network issues or service downtime).

Summary

As long as auth.json is present and contains a valid refresh token, your friends should stay logged in indefinitely, across reboots, without needing to re-authenticate each time they start the launcher.
