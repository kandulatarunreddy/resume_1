# Tarun Reddy Kandula — Portfolio

A responsive, dependency-free portfolio with project case studies and locally bundled narrated video demos. No project services or API keys are needed to view it.

## Preview

```sh
cd "$HOME/Desktop/portfolio"
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://localhost:4173. You can also open index.html directly.

## Update content

- `content.js`: name, contact placeholders, and employment dates.
- `index.html`: introduction, project case studies, education, and skills.
- `styles.css`: responsive layout and colors.
- `assets/resume.pdf`: replace with your real resume at the same path. The site already labels the link “Download resume”.
- Replace the dummy contact values before publication.
- Add verified job titles and achievements to the experience section when available. No role-specific responsibilities have been invented.
- Demo videos are in `assets/videos/`. Captions are burned into the recordings. Videos load on demand and never autoplay.
- Resume Matcher includes its recorded demo in assets/videos/resume-matcher.mp4.

## Content accuracy

Featured skills describe technologies demonstrated in the projects, not certifications or employer-specific claims. IncidentScope video uses baseline investigation, not a live model call. Dropflow uses synthetic demand history and simulated payment/fulfillment providers. Live AI Resume Matcher provider behavior has not been verified with a real API key in the source workspace.

## Hosting later

This is a static website. Publish the folder contents with any static host when you are ready. There is no build step, database, secret, or server runtime. Relative asset paths also work under a repository subpath.
