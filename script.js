/*
 * Site interactions for Rahul Kumar’s portfolio
 *
 * This script handles light/dark theme toggling, smooth scrolling,
 * reveal‑on‑scroll animations and the mobile navigation menu. It
 * persists the user’s theme preference in localStorage so the
 * selected mode is remembered across visits. Fade‑in animations
 * leverage the IntersectionObserver API to only trigger once per
 * section when it enters the viewport.
 */

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggleBtn = document.querySelector('.toggle-theme');
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');
  const links = document.querySelectorAll('nav .links a');

  // Apply the saved theme preference if available
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    // update icon to sun
    if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
  }

  // Toggle light/dark mode and persist preference
  themeToggleBtn?.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const darkMode = body.classList.contains('dark-mode');
    // Save preference
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    // Switch icon (moon for light mode, sun for dark mode)
    themeToggleBtn.textContent = darkMode ? '☀️' : '🌙';
  });

  // Mobile menu toggle: open/close nav links on small screens
  menuBtn?.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  // Close mobile nav after clicking a link
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
      }
    });
  });

  // Set up IntersectionObserver for fade‑in effect
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  // Observe each element with the .fade-in class
  document.querySelectorAll('.fade-in').forEach(elem => observer.observe(elem));
});