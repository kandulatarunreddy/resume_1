const data = window.PORTFOLIO;
document.querySelectorAll('[data-name]').forEach(node => node.textContent = data.name);
const email = document.querySelector('#email');
email.href = `mailto:${data.email}`; email.textContent = `${data.email} ↗`;
for (const network of ['linkedin', 'github']) document.querySelector(`#${network}`).href = data[network];
document.querySelector('#year').textContent = new Date().getFullYear();
const timeline = document.querySelector('#timeline');
data.experience.forEach((job, index) => {
 const row = document.createElement('div'); row.className = 'timeline-row';
 const company = document.createElement('h3'); company.textContent = job.company;
 const dates = document.createElement('p'); dates.textContent = job.dates;
 const label = document.createElement('span'); label.textContent = index === 0 ? 'CURRENT' : 'EXPERIENCE';
 row.append(company, dates, label); timeline.append(row);
});
// Keep the walkthrough audio focused when switching projects.
document.querySelectorAll('video').forEach(video => video.addEventListener('play', () => {
 document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
}));
