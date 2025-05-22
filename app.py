from flask import Flask, render_template, request, redirect, url_for, flash
import sqlite3

app = Flask(__name__)
app.secret_key = 'your_secret_key'

def get_db_connection():
    conn = sqlite3.connect('user.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        conn = get_db_connection()
        user = conn.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, password)).fetchone()
        conn.close()

        if user:
            flash('Login successful!', 'success')
            return redirect(url_for('index'))
        else:
            flash('Invalid username or password', 'error')

    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        conn = get_db_connection()
        try:
            conn.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, password))
            conn.commit()
            flash('Registration successful! Please log in.', 'success')
        except sqlite3.IntegrityError:
            flash('Username already exists!', 'error')
        finally:
            conn.close()

        return redirect(url_for('login'))

    return render_template('register.html')

@app.route('/index')
def index():
    return render_template('index.html')

# Routes for subpages
@app.route('/homecare.html')
def homecare():
    return render_template('homecare.html')

@app.route('/location.html')
def location():
    return render_template('location.html')

@app.route('/milk.html')
def milk():
    return render_template('milk.html')

@app.route('/vegies.html')
def vegies():
    return render_template('vegies.html')

@app.route('/foodgrains.html')
def foodgrains():
    return render_template('foodgrains.html')

if __name__ == '__main__':
    app.run(debug=True)