/* script.js - interactions: smooth scroll, theme toggle, form handler */
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Theme toggle (light/dark)
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('light');
    if(document.documentElement.classList.contains('light')){
      themeToggle.textContent = '🌞';
      document.documentElement.style.setProperty('--bg','#f6f8fb');
      document.documentElement.style.setProperty('--card','#ffffff');
      document.documentElement.style.setProperty('--text','#081122');
      document.documentElement.style.setProperty('--muted','#6b7280');
      document.documentElement.style.setProperty('--glass','rgba(0,0,0,0.03)');
    } else {
      themeToggle.textContent = '🌙';
      // reset - these are defaults set in CSS
      document.documentElement.style.removeProperty('--bg');
      document.documentElement.style.removeProperty('--card');
      document.documentElement.style.removeProperty('--text');
      document.documentElement.style.removeProperty('--muted');
      document.documentElement.style.removeProperty('--glass');
    }
  });

  // Simple contact form handler
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email) {
      alert('Please enter name and email.');
      return;
    }
    // For demo purposes we just show a friendly message.
    alert('Thanks ' + name + '! Your message looks great — you can send it to sneha99975@gmail.com manually.');
    contactForm.reset();
  });

  // Download resume - tries to open the resume in a new tab (if included).
  const downloadBtn = document.getElementById('downloadResume');
  downloadBtn.addEventListener('click', ()=>{
    // If the PDF is placed in same folder under resume.pdf this will open it.
    const resumePath = 'Sneha_Gupta_Resume.pdf';
    // open in new tab
    window.open(resumePath, '_blank');
  });
});
