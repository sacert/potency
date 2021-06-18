from flask import Flask, request, redirect

app = Flask(__name__)

@app.route('/signup', methods = ['POST'])
def signup():
    email = request.form['email']
    print("The email address is '" + email + "'")
    with open("test.txt", "a") as myfile:
        myfile.write(email + "\n")
    return redirect("http://localhost:3000/?success=true")
