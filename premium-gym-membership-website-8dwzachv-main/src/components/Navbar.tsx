import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { Menu, X, Heart } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="glass border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600">
              <Heart className="h-6 w-6 text-black" />
            </div>
            <span className="text-xl font-bold text-gradient">HeartFit Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-yellow-400 bg-yellow-400/10' 
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
                }`}
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/dashboard') 
                    ? 'text-yellow-400 bg-yellow-400/10' 
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/training"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/training') 
                    ? 'text-yellow-400 bg-yellow-400/10' 
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
                }`}
              >
                Training
              </Link>
              <Link
                to="/community"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/community') 
                    ? 'text-yellow-400 bg-yellow-400/10' 
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
                }`}
              >
                Community
              </Link>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-yellow-400">
              Sign In
            </Button>
            <Button className="gold-button">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/') 
                  ? 'text-yellow-400 bg-yellow-400/10' 
                  : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/dashboard') 
                  ? 'text-yellow-400 bg-yellow-400/10' 
                  : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/training"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/training') 
                  ? 'text-yellow-400 bg-yellow-400/10' 
                  : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Training
            </Link>
            <Link
              to="/community"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/community') 
                  ? 'text-yellow-400 bg-yellow-400/10' 
                  : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Community
            </Link>
            <div className="pt-4 pb-3 border-t border-white/10">
              <div className="space-y-2">
                <Button variant="ghost" className="w-full text-left justify-start text-gray-300">
                  Sign In
                </Button>
                <Button className="w-full gold-button">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}