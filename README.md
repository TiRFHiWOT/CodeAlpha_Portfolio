# CodeAlpha — Task 3: Portfolio Site

Personal portfolio built with plain HTML, CSS and JavaScript — no frameworks.

## Files
- `index.html` — hero, About, Skills, Projects, Experience, Contact
- `styles.css` — ChatGPT-style grey theme (dark #212121 / #171717, light white / #f9f9f9), amber accent (#f59e0b dark, darker amber in light mode), Poppins headings, Inter body text, flat, no gradients or shadows
- `script.js` — theme toggle, smooth scroll, mobile menu, fade-in animations on scroll

## Features
- Sticky top bar with navigation, a Download CV button (desktop) and a light/dark toggle (remembered in the browser)
- Hero with name, role, stats row (8 selected projects, 100% Lighthouse mobile responsiveness, Jan 2025–Present at Awura Tech), View Projects and Download CV buttons; Download CV forces a real file download (blob) instead of opening the PDF
- Hero with name, role and links to Projects and Contact
- About, Skills, Projects, Experience timeline, Contact
- About reflects Tirfhiwot's own summary (2026-11-25): Front-End Developer experienced with React, Next.js, TypeScript, JavaScript and Tailwind CSS; projects include web applications, booking platforms and event platforms; comfortable with APIs, backend integration and collaborating with other developers.
- Experience, Projects, Skills and Education come from her CV (TIRFHIWOT_HAILU_3_lzrt.pdf, added 2026-11-25; a copy is in this folder as TIRFHIWOT_HAILU_CV.pdf, with a Download CV button in the hero). Experience: Web Developer (Front-End), Awura Tech, Addis Ababa, Jan 2025 – Present. Projects: OwlEvents 2.0, Cheq-u, SudoNest Guest Web App, Nestangle Admin Portal, Sudd Technologies Corporate Platform, ESAAMLG Annual Conference Website, Pulse of Africa (POA), Minor Hockey Talks. Skills follow the CV's full table (Core, Frameworks & Libraries, UI & Styling, Performance & Quality, Integrations, Tools, Soft Skills). Education: BSc in Engineering, Addis Ababa Science & Technology University, 2015–2020. Note: the CV dates Awura from Jan 2025, while her earlier message said Oct 2024; the CV email is tirfhiwothailu@email.com, while the portfolio Contact (given by her separately) uses azromjr@gmail.com — both kept as given, confirm with her if either should change.
- Skills follow her technical-skills table: Front-end (React, Next.js, JavaScript, TypeScript), Styling (Tailwind CSS, HTML, CSS, Shadcn/UI), APIs (REST, GraphQL), State & Data (RTK Query, Apollo, React Query), Backend Exposure (Node.js, Go), Databases & Services (Supabase, Firebase, PostgreSQL), Tools (Git, GitHub, Vercel).
- Smooth scrolling that stops below the sticky top bar
- Fade-in animations as sections scroll into view, hover lift on cards
- Responsive: mobile menu under 720px, 1-column layout on phones

## Contact
The Contact section uses Tirfhiwot's real details: azromjr@gmail.com, +251 935 932 496, github.com/TiRFHiWOT, linkedin.com/in/tirfhiwot-hailu.

## Run it
Open `index.html` in a browser, or serve the folder, e.g. `python3 -m http.server` and open http://localhost:8000

## Submission
GitHub repo name for CodeAlpha: `CodeAlpha_Portfolio`
