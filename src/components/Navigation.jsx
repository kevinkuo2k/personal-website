import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navigation = () => {
    const location = useLocation()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isActive = (path) => location.pathname === path

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-primary-bg/95 backdrop-blur-sm border-b border-border' : 'bg-primary-bg/80 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="flex items-center justify-end h-16 gap-8">
                    <Link
                        to="/"
                        className={`nav-link ${isActive('/') ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                    >
                        About
                    </Link>
                    <Link
                        to="/highlights"
                        className={`nav-link ${isActive('/highlights') ? 'active' : ''}`}
                    >
                        Highlights
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
