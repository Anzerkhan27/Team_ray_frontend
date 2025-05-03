
---

🚀 **Team Ray | React Frontend**

This is the **React frontend** for **Team Ray**, the University of Huddersfield’s **first aerospace student society**. It serves as the official site for sharing updates, showcasing the team, and collecting member signups.

🌐 Live Site: [https://team-ray-frontend.pages.dev](https://team-ray-frontend.pages.dev)

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

📁 **File Structure (Simplified)**

src/
├── assets/ → Images, logos, etc.
├── components/ → Navbar, Footer, Modal, Specs, etc.
├── pages/ → Home, Members, News, JoinUs
├── App.js → App layout & routes
├── index.css → Tailwind base styles

---

🛠️ **Run Locally**

1️⃣ Clone the repo
`git clone https://github.com/your-username/team-ray-frontend.git`
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
Built with love by **Anzer Khan**
🧠 Software Lead & Founding Committee Member, Team Ray

🔗 LinkedIn: [https://linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)
🌍 Portfolio: [https://your-portfolio.com](https://your-portfolio.com)

---

