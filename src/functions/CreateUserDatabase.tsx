
const CreateUserDatabase = () => {

    return (
        <div>
            INSERT INTO users (username, password, display_name, email, phone_number, first_name, last_name, force_logout, phone2fa, email2fa, auth2fa)
            VALUES ('frankie', 'hashed_password6', 'Frankie Strong', 'frankie@example.com', '555-3344', 'Frankie', 'Strong', TRUE, FALSE, TRUE, TRUE);

        </div>
    )
}

export default CreateUserDatabase
