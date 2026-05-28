import {
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa'

const socials = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ramon-camacho-rojas',
        icon: <FaLinkedinIn />,
    },
    {
        label: 'GitHub',
        href: 'https://github.com/wenreidesign',
        icon: <FaGithub />,
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/wenreidesign',
        icon: <FaInstagram />,
    },
]

export default function SocialLinks() {
    return (
        <div className="social-links" aria-label="Social links">
            {socials.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="social-link"
                >
                    {item.icon}
                </a>
            ))}
        </div>
    )
}