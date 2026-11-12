document.getElementById('year').textContent = new Date().getFullYear()

const sections = document.querySelectorAll('main section[id]')
const links = document.querySelectorAll('nav a[href^="#"]')
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      links.forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`
        if (active) link.setAttribute('aria-current', 'location')
        else link.removeAttribute('aria-current')
      })
    })
  }, {rootMargin: '-25% 0px -60% 0px'})
  sections.forEach(section => observer.observe(section))
}
