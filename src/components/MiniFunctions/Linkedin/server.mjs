import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

// Retrieve credentials from environment variables
const clientID = process.env.LINKEDIN_CLIENT_ID;
const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
const redirectURI = process.env.REDIRECT_URI;

// Step 1: Redirect user to LinkedIn's OAuth page
app.get("/auth/linkedin", (req, res) => {
  const authURL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectURI)}&scope=r_liteprofile%20r_emailaddress%20w_member_social`;
  res.redirect(authURL);
});

// Step 2: Handle LinkedIn's callback with authorization code
app.get("/auth/linkedin/callback", async (req, res) => {
  const authorizationCode = req.query.code;

  try {
    // Request access token using authorization code
    const tokenResponse = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: authorizationCode,
        redirect_uri: redirectURI,
        client_id: clientID,
        client_secret: clientSecret,
      }),
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Redirect to your front-end application with the access token
    res.redirect(`http://localhost:3000?access_token=${accessToken}`);
  } catch (error) {
    console.error("Error fetching access token:", error);
    res.status(500).json({ error: "Failed to get access token" });
  }
});

// Step 3: Fetch LinkedIn posts using the access token
app.get("/api/posts", async (req, res) => {
  const accessToken = req.query.access_token;

  try {
    const postResponse = await fetch("https://api.linkedin.com/v2/ugcPosts?q=authors&authors=urn:li:person:YOUR_PROFILE_ID", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Restli-Protocol-Version": "2.0.0",
      },
    });
    const posts = await postResponse.json();
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
