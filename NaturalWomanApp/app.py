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

@app.route("/tools")
def tools():
	content = {}
	content["title"] = "Natural Woman Salon | Tools"
	content["post_load"] = 6
	return render_template('tools.html', **content)

@app.route("/admin")
def admin():
	content = {}
	content["title"] = "Natural Woman Salon | Administration"
	content["post_load"] = 7
	return render_template('admin.html', **content)

@app.route("/account")
def account():
	content = {}
	content["title"] = "Natural Woman Salon | Account"
	content["post_load"] = 8
	return render_template('account.html', **content)

@app.route("/logout")
def logout():
	content = {}
	content["title"] = "Natural Woman Salon | Logout"
	content["post_load"] = 9
	return render_template('logout.html', **content)

@app.route("/blogFrame")
def blogFrame():
	content = {}
	return render_template('blogFrame.html', **content)

@app.route("/galleryFrame")
def galleryFrame():
	content = {}
	return render_template('galleryFrame.html', **content)

@app.route("/serviceFrame")
def serviceFrame():
	content = {}
	return render_template('serviceFrame.html', **content)

@app.route("/productFrame")
def productFrame():
	content = {}
	return render_template('productFrame.html', **content)

@app.route("/infoFrame")
def infoFrame():
	content = {}
	return render_template('infoFrame.html', **content)

if __name__ == "__main__":
		app.run()





