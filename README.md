# 🛒 E-commerce Recommendation System (Flask-based)

This is a simple e-commerce web application built using Flask. It includes basic user authentication (registration and login) and serves static pages for different product categories. The application is connected to a SQLite database (`user.db`) to manage user accounts.

## 📌 Features

- 🔐 User Registration and Login
- 🛍️ Category pages for:
  - Milk
  - Veggies
  - Food Grains
  - Home Care
- 🌐 Web interface with Flask and Jinja2 templates
- 💾 SQLite-based backend

> **Note:** While this project lays the foundation for an e-commerce platform, the recommendation system component can be integrated into the category or index views using behavioral or content-based logic in future updates.

## 🧰 Tech Stack

- **Backend:** Python (Flask)
- **Frontend:** HTML (Jinja2 Templates)
- **Database:** SQLite (`user.db`)

## 📂 Project Structure

ecommerce-recommendation-system/
│
├── app.py # Main Flask application
├── create_db.py # Script to initialize SQLite database
├── user.db # SQLite database (created by create_db.py)
├── templates/ # HTML templates (login, register, index, etc.)
│ ├── login.html
│ ├── register.html
│ ├── index.html
│ ├── milk.html
│ ├── vegies.html
│ ├── foodgrains.html
│ └── homecare.html
├── static/ # (Optional) CSS, JS, images
└── README.md # Project documentation

markdown
Copy
Edit

## 🚀 Getting Started

### Prerequisites

- Python 3.x
- `pip` package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ecommerce-recommendation-system.git
cd ecommerce-recommendation-system
(Optional) Create and activate a virtual environment:

bash
Copy
Edit
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Install Flask:

bash
Copy
Edit
pip install Flask
Create the database:

bash
Copy
Edit
python create_db.py
Run the application:

bash
Copy
Edit
python app.py
Visit http://127.0.0.1:5000/ in your browser to start using the app.

🔄 Future Enhancements
🔍 Add recommendation algorithms (collaborative or content-based)

💬 Product reviews and ratings

🛒 Shopping cart functionality

📊 Admin dashboard

🧠 Machine learning for personalized recommendations

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.
