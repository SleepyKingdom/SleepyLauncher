-- Insert user 1: Full details with phone-based 2FA enabled
INSERT INTO users (username, password, display_name, email, phone_number, first_name, last_name, force_logout, phone2fa, email2fa, auth2fa)
VALUES ('alice123', 'hashed_password1', 'Alice Wonderland', 'alice@example.com', '555-1234', 'Alice', 'Wonderland', FALSE, TRUE, FALSE, TRUE);

-- Insert user 2: Email-based 2FA enabled, force logout set
INSERT INTO users (username, password, display_name, email, phone_number, first_name, last_name, force_logout, phone2fa, email2fa, auth2fa)
VALUES ('bobking', 'hashed_password2', 'Bob King', 'bob@example.com', '555-5678', 'Bob', 'King', TRUE, FALSE, TRUE, TRUE);

-- Insert user 3: No 2FA enabled, default force_logout
INSERT INTO users (username, password, display_name, email, phone_number, first_name, last_name, force_logout, phone2fa, email2fa, auth2fa)
VALUES ('charlie92', 'hashed_password3', 'Charlie Brown', 'charlie@example.com', '555-8765', 'Charlie', 'Brown', FALSE, FALSE, FALSE, FALSE);

-- Insert user 4: Both phone-based and email-based 2FA enabled
INSERT INTO users (username, password, display_name, email, phone_number, first_name, last_name, force_logout, phone2fa, email2fa, auth2fa)
VALUES ('dianaqueen', 'hashed_password4', 'Diana Queen', 'diana@example.com', '555-1122', 'Diana', 'Queen', FALSE, TRUE, TRUE, TRUE);

-- Insert user 5: Phone 2FA enabled, no email or name provided
INSERT INTO users (username, password, display_name, email, phone_number, first_name, last_name, force_logout, phone2fa, email2fa, auth2fa)
VALUES ('edward99', 'hashed_password5', 'Edward Ninja', 'edward@example.com', NULL, NULL, NULL, FALSE, TRUE, FALSE, TRUE);

-- Insert user 6: Email 2FA enabled, force_logout active
INSERT INTO users (username, password, display_name, email, phone_number, first_name, last_name, force_logout, phone2fa, email2fa, auth2fa)
VALUES ('frankie', 'hashed_password6', 'Frankie Strong', 'frankie@example.com', '555-3344', 'Frankie', 'Strong', TRUE, FALSE, TRUE, TRUE);
