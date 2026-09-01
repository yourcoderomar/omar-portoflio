import './Footer.css'

const socials = [
  { label: 'Email', href: 'mailto:omarmostafamohie12@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/omar-mostafa-2a238123a' },
  { label: 'GitHub', href: 'https://github.com/yourcoderomar' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-blurb">
          I'm Omar, a full stack developer who likes building simple, useful
          things. Always open to new work and good problems.
        </p>

        <div className="footer-links">
          {socials.map((social) => (
            <a
              key={social.label}
              className="footer-link"
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {social.label}
            </a>
          ))}
          <a
            className="footer-link"
            href="/Omar Mostafa Mohie Eldin.pdf"
            download="Omar Mostafa Mohie Eldin.pdf"
          >
            Resume
          </a>
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} Omar Mostafa</p>
      </div>
    </footer>
  )
}

export default Footer
