import { FaEnvelope, FaGithub } from 'react-icons/fa'
import { SiTelegram } from 'react-icons/si'

const githubUsername = 'jonhef'
const email = 'your.email@example.com' // замените на рабочий адрес
const telegramUsername = '' // добавьте username без @, чтобы показать ссылку

function Contact() {
  const contacts = [
    {
      label: 'GitHub',
      href: `https://github.com/${githubUsername}`,
      icon: <FaGithub />,
    },
    {
      label: 'Email',
      href: `mailto:${email}`,
      icon: <FaEnvelope />,
      hidden: !email,
    },
    {
      label: 'Telegram',
      href: telegramUsername ? `https://t.me/${telegramUsername}` : '#',
      icon: <SiTelegram />,
      hidden: !telegramUsername,
    },
  ].filter((item) => !item.hidden)

  return (
    <section className="panel" id="contact">
      <div className="panel-header">
        <h2 className="section-title">CONTACT</h2>
        <span className="panel-status">SYS/03</span>
      </div>

      <p className="muted">
        contact me using any convenient method
      </p>

      <div className="contact-grid">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">{contact.icon}</span>
            <span className="contact-label">{contact.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
