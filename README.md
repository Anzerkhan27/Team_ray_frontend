
---

🚀 **Team Ray | React Frontend**

This is the **React frontend** for **Team Ray**, the University of Huddersfield’s **first aerospace student society**. It serves as the official site for sharing updates, showcasing the team, and collecting member signups.

🌐 Live Site: [https://teamray.team](https://teamray.team)

---

🔧 **Tech Stack**

* ⚛️ React (Vite)
* 🎨 Tailwind CSS
* 🔁 React Router DOM
* 🔌 Axios (API integration)
* 🎞️ Framer Motion (animations)
* 📰 React Slick (carousel for news)

---

✨ **Core Features**

* 🏠 **Home** – Hero banner with background image, animated team logo, and mission intro
* 👥 **Members** – Dynamic member profiles with modal popups (from API)
* 📰 **News** – Posts and announcements displayed with image carousel
* 🛠️ **Projects** – Details about engineering projects (from backend)
* 📬 **Join Us** – Contact form for collecting queries, connected to the backend
* 🧭 **Navigation + Footer** – Responsive, accessible layout across all screens

---

🔌 **API Integration**
Connected to Django REST API at:
🌐 [https://web-production-7860.up.railway.app/api/](https://web-production-7860.up.railway.app/api/)

Endpoints used:

* `/members/`
* `/projects/`
* `/posts/`
* `/contacts/` (POST)

---

📸 **Image Hosting with Cloudinary**

All media content (member photos, project images, post galleries) served via the API is now hosted on **Cloudinary** for faster performance and global delivery via CDN.

The frontend dynamically renders these images using the URLs returned from the API — no extra configuration needed on the frontend side.

Example URL:

```
https://res.cloudinary.com/<cloud-name>/image/upload/v.../image.jpg
```

This ensures faster image loading and reduces backend server load.

---



📁 **File Structure (Simplified)**

```

src/
├── assets/ → Images, logos, etc.
├── components/ → Navbar, Footer, Modal, Specs, etc.
├── pages/ → Home, Members, News, JoinUs
├── App.js → App layout & routes
├── index.css → Tailwind base styles

```
---

🛠️ **Run Locally**

1️⃣ Clone the repo
`git clone https://github.com/AnzerKhan27/team-ray-frontend.git`
`cd team-ray-frontend`

2️⃣ Install dependencies
`npm install`

3️⃣ Create `.env` file
`VITE_API_URL=https://web-production-7860.up.railway.app/api/`

4️⃣ Start development server
`npm run dev`

---

🚀 **Deployment**

* Frontend: 🌐 Cloudflare Pages
* Backend API: 🚉 Railway (Django backend)

---

👨‍💻 **Maintainer**
Built by **Anzer Khan**
🧠 Software Lead & Founding Committee Member, Team Ray

🔗 LinkedIn: [https://linkedin.com/in/anzer-khan-31a14a209](https://linkedin.com/in/anzer-khan-31a14a209)


---

