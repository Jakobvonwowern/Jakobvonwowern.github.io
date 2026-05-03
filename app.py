from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/services")
def services():
    return render_template("services.html")

@app.route("/booking")
def booking():
    return render_template("booking.html")

@app.route("/privacy")
def privacy():
    return render_template("privacy.html")

@app.route("/submit", methods=["POST"])
def submit():
    name = request.form.get("name")
    email = request.form.get("email")
    service = request.form.get("service")
    message = request.form.get("message")

    print("New booking request:")
    print("Name:", name)
    print("Email:", email)
    print("Service:", service)
    print("Message:", message)

    return redirect(url_for("booking"))

if __name__ == "__main__":
    app.run(debug=True)