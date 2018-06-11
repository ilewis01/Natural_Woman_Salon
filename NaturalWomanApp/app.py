from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
	post_load = -1
	return render_template('index.html', value=post_load)

@app.route("/home")
def home():
	post_load = 0
	return render_template('index.html', value=post_load)

@app.route("/about")
def about():
	post_load = 1
	return render_template('about.html', value=post_load)

@app.route("/services")
def services():
	post_load = 2
	return render_template('services.html', value=post_load)

@app.route("/gallery")
def gallery():
	post_load = 3
	return render_template('gallery.html', value=post_load)

@app.route("/blog")
def blog():
	post_load = 4
	return render_template('blog.html', value=post_load)

@app.route("/contact")
def contact():
	post_load = 5
	return render_template('contact.html', value=post_load)

if __name__ == "__main__":
		app.run()