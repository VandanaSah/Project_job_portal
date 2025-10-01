4. JWT_SECRET_KEY =
hold your JSON Web Token (JWT) secret key.  string used to sign and verify the tokens for authentication. 

5. JWT_EXPIRE =
This sets the expiration time for the JWT token, defining how long the token is valid.  1 hour or 7d for 7 days.

6. COOKIE_EXPIRE =
Tdefines the expiration time for cookies in your application. It determines how long the user's session remains active before the cookie is invalidated.

7. CLOUDINARY_API_SECRET =
Cloudinary is a cloud-based image and video management service.Cloudinary API secret key, used to authenticate requests to the Cloudinary API. 

8. CLOUDINARY_API_KEY =
This is your API key for Cloudinary, required to access their services.

9. SMTP_SERVICE =
This refers to the SMTP (Simple Mail Transfer Protocol) service you'll use to send emails (e.g., Gmail, Outlook, etc.). It defines the email provider for sending messages.

10. SMTP_MAIL =
This is the email address that will be used as the sender when sending emails from your application.

11. SMTP_PASSWORD =
The password for the SMTP email account used to authenticate the email-sending process. This should be stored securely.

12. SMTP_HOST =
This is the host address of your SMTP service provider (e.g., smtp.gmail.com for Gmail).

13. SMTP_PORT =
The port used to connect to your SMTP server. Common ports are 587 (for TLS) or 465 (for SSL).

The cors (Cross-Origin Resource Sharing) middleware is used to handle requests from different origins (domains) in your Express.js application.....allowing your server to accept requests from specified domains.

