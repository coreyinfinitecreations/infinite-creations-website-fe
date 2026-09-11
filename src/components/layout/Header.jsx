import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../lib/clientApi';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const sequence = useRef(0);
  useEffect(() => {
    let active = true;
    const refresh = async () => {
      const version = ++sequence.current;
      try {
        const user = await api('session');
        if (active && version === sequence.current) {
          setSession(user);
          if (!user) window.dispatchEvent(new Event('client-signed-out'));
        }
      } catch {
        if (active && version === sequence.current) setSession(null);
      } finally {
        if (active) setLoaded(true);
      }
    };
    const otherTab = (event) => {
      if (event.key === 'client-auth-refresh') refresh();
    };
    refresh();
    window.addEventListener('client-session-changed', refresh);
    window.addEventListener('focus', refresh);
    window.addEventListener('pageshow', refresh);
    window.addEventListener('storage', otherTab);
    return () => {
      active = false;
      window.removeEventListener('client-session-changed', refresh);
      window.removeEventListener('focus', refresh);
      window.removeEventListener('pageshow', refresh);
      window.removeEventListener('storage', otherTab);
    };
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search]);
  async function logout() {
    setBusy(true);
    setError('');
    try {
      await api('logout');
      ++sequence.current;
      setSession(null);
      setOpen(false);
      navigate('/client/login', { replace: true });
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-container">
          <img
            src="/infinite-creations-logo.png"
            alt="Infinite Creations Logo"
            className="logo-image"
          />
        </Link>
        <nav className="navigation" aria-label="Main navigation">
          <ul
            id="website-navigation"
            className={`nav-menu ${open ? 'nav-menu-open' : ''}`}
          >
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                Our Work
              </Link>
            </li>
            <li className="nav-item">
              <a href="/#services" className="nav-link">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <Link to="/get-started" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className="nav-item header-account">
              {!loaded ? (
                <span className="btn-link">Checking account…</span>
              ) : session ? (
                <>
                  <span className="header-account-name">
                    Hi, {session.name}
                  </span>
                  <Link to="/client" className="btn-link">
                    My projects
                  </Link>
                  <Link to="/client?tab=account" className="btn-link">
                    My account
                  </Link>
                  <button
                    className="header-signout"
                    onClick={logout}
                    disabled={busy}
                  >
                    {busy ? 'Signing out…' : 'Sign out'}
                  </button>
                </>
              ) : (
                <Link to="/client/login" className="btn-link">
                  Client Login
                </Link>
              )}
            </li>
          </ul>
          <button
            className="mobile-menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="website-navigation"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>
      {error && (
        <p className="header-auth-error" role="alert">
          {error}
        </p>
      )}
    </header>
  );
}
