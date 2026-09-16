import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../lib/clientApi';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
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
    setAccountOpen(false);
  }, [location.pathname, location.search]);
  const initials = (session?.name || session?.email || 'IC')
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
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
                <div
                  className={`header-account-menu${
                    accountOpen ? ' is-open' : ''
                  }`}
                  onMouseEnter={() => setAccountOpen(true)}
                  onMouseLeave={() => setAccountOpen(false)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget))
                      setAccountOpen(false);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') {
                      setAccountOpen(false);
                      event.currentTarget.querySelector('button')?.focus();
                    }
                  }}
                >
                  <button
                    type="button"
                    className="header-account-trigger"
                    aria-haspopup="menu"
                    aria-expanded={accountOpen}
                    onClick={() => setAccountOpen((value) => !value)}
                    onFocus={() => setAccountOpen(true)}
                  >
                    <span className="header-account-avatar" aria-hidden="true">
                      {initials}
                    </span>
                    <span className="header-account-copy">
                      <strong>{session.name || 'Client account'}</strong>
                      <small>{session.email}</small>
                    </span>
                    <span className="header-account-chevron" aria-hidden="true" />
                  </button>
                  <div className="header-account-dropdown" role="menu">
                    <Link to="/client?tab=account#security" role="menuitem">
                      Account Settings
                    </Link>
                    <Link to="/client?tab=account#profile" role="menuitem">
                      Profile
                    </Link>
                    <Link to="/client?tab=invoices" role="menuitem">
                      Invoices
                    </Link>
                    <Link to="/client?tab=payments" role="menuitem">
                      Payments
                    </Link>
                    <Link to="/client?tab=support" role="menuitem">
                      Support Tickets
                    </Link>
                    <button
                      type="button"
                      className="header-account-signout"
                      role="menuitem"
                      onClick={logout}
                      disabled={busy}
                    >
                      {busy ? 'Signing out…' : 'Sign out'}
                    </button>
                  </div>
                </div>
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
