db.createUser(
    {
        user: "userdb",
        pwd: "userpwd",
        roles: [
            {
                role: "readWrite",
                db: "test-db"
            }
        ]
    }
)