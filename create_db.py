import sqlite3

# Connect to SQLite database (or create it if it doesn't exist)
conn = sqlite3.connect('user.db')
cursor = conn.cursor()

# Create a table for users
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)
''')

conn.commit()
conn.close()

print("Table 'users' created successfully!")