from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
	content = {}
	content["title"] = "Natural Woman Salon"
	content["post_load"] = -1
	return render_template('index.html', **content)

@app.route("/home")
def home():
	content = {}
	content["title"] = "Natural Woman Salon | Home"
	content["post_load"] = 0
	return render_template('index.html', **content)

@app.route("/about")
def about():
	content = {}
	content["title"] = "Natural Woman Salon | About"
	content["post_load"] = 1
	return render_template('about.html', **content)

@app.route("/services")
def services():
	content = {}
	content["title"] = "Natural Woman Salon | Pricing"
	content['post_load'] = 2
	return render_template('services.html', **content)

@app.route("/gallery")
def gallery():
	content = {}
	content["title"] = "Natural Woman Salon | Galley"
	content["post_load"] = 3
	return render_template('gallery.html', **content)

@app.route("/blog")
def blog():
	content = {}
	content["title"] = "Natural Woman Salon | Blog"
	content["post_load"] = 4
	return render_template('blog.html', **content)

@app.route("/contact")
def contact():
	content = {}
	content["title"] = "Natural Woman Salon | Contact"
	content["post_load"] = 5
	return render_template('contact.html', **content)

if __name__ == "__main__":
		app.run()





