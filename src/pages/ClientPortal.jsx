import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ClientPortal.css';
import { api } from '../lib/clientApi';

const date = (value) =>
  value
    ? new Date(
        value.length === 10 ? `${value}T12:00:00` : value
      ).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'To be confirmed';
const money = (amount, currency) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(
    amount /
      10 **
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency,
        }).resolvedOptions().maximumFractionDigits
  );
const status = (value) => value.replaceAll('_', ' ');

export default function ClientPortal() {
  const location = useLocation();
  const navigate = useNavigate();
  const recovery = location.pathname.endsWith('/reset-password');
  const [workspace, setWorkspace] = useState(null);
  const authGeneration = useRef(0);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [forgot, setForgot] = useState(false);
  const [ready, setReady] = useState(false);
  const [tab, setTab] = useState(
    new URLSearchParams(location.search).get('tab') === 'account'
      ? 'account'
      : 'projects'
  );
  useEffect(() => {
    if (new URLSearchParams(location.search).get('tab') === 'account')
      setTab('account');
  }, [location.search]);
  useEffect(() => {
    const clear = () => {
      authGeneration.current++;
      setWorkspace(null);
      setBilling(null);
      setReplies([]);
      setTicket(null);
    };
    window.addEventListener('client-signed-out', clear);
    return () => window.removeEventListener('client-signed-out', clear);
  }, []);
  const [billing, setBilling] = useState(null);
  const [method, setMethod] = useState('');
  const [consent, setConsent] = useState(false);
  const [ticket, setTicket] = useState(null);
  const [replies, setReplies] = useState([]);
  const recovering = useRef(null);

  async function refresh() {
    const generation = authGeneration.current;
    const data = await api('workspace');
    if (generation === authGeneration.current) setWorkspace(data);
  }
  async function loadBilling() {
    setBilling(null);
    const value = await api('billing');
    setBilling(value);
    setMethod(value.defaultMethod);
    setConsent(false);
    await refresh();
  }
  async function run(fn) {
    setBusy(true);
    setError('');
    setMessage('');
    try {
      await fn();
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }
  useEffect(() => {
    let alive = true;
    const load = async () => {
      const generation = authGeneration.current;
      if (recovery) {
        // Retain this promise through React StrictMode's effect replay.
        if (!recovering.current) {
          const query = new URLSearchParams(window.location.search);
          const hash = new URLSearchParams(window.location.hash.slice(1));
          const token_hash = hash.get('token_hash') || query.get('token_hash');
          const type = hash.get('type') || query.get('type');
          const code = query.get('code');
          const access_token = hash.get('access_token');
          const refresh_token = hash.get('refresh_token');
          window.history.replaceState({}, '', window.location.pathname);
          recovering.current = code
            ? api('recover', { code })
            : token_hash
            ? api('recover', { token_hash, type })
            : access_token && refresh_token
            ? api('recover', { access_token, refresh_token })
            : Promise.resolve();
        }
        await recovering.current;
        const session = await api('session');
        if (!session)
          throw new Error(
            'Open your invitation or password-reset link to continue.'
          );
        if (alive) setReady(true);
      } else {
        const session = await api('session');
        const data = session ? await api('workspace') : null;
        if (alive && generation === authGeneration.current) setWorkspace(data);
      }
    };
    load()
      .catch((e) => {
        if (alive) setError(e.message);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, [recovery]);

  async function passwordSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const f = new FormData(form);
    if (f.get('password') !== f.get('confirm')) {
      setError('Your passwords must match.');
      return;
    }
    await run(async () => {
      await api('password', { password: f.get('password') });
      form.reset();
      setMessage('Your password has been updated.');
      if (recovery) {
        await refresh();
        navigate('/client');
      }
    });
  }
  const passwordForm = (
    <form onSubmit={passwordSubmit}>
      <label>
        New password
        <input
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={12}
          maxLength={128}
          required
        />
      </label>
      <label>
        Confirm password
        <input
          name="confirm"
          type="password"
          autoComplete="new-password"
          minLength={12}
          maxLength={128}
          required
        />
      </label>
      <button
        className="portal-primary"
        disabled={busy || (recovery && !ready)}
      >
        Update password
      </button>
    </form>
  );
  const notices = (
    <>
      {error && (
        <p className="portal-alert" role="alert">
          {error}
        </p>
      )}
      {message && (
        <p className="portal-notice" role="status">
          {message}
        </p>
      )}
    </>
  );

  if (loading)
    return (
      <section className="client-portal">
        <p role="status">Opening your client space…</p>
      </section>
    );
  if (!workspace || recovery)
    return (
      <section className="client-portal portal-login">
        <div className="portal-intro">
          <span className="portal-eyebrow">
            INFINITE CREATIONS / CLIENT PORTAL
          </span>
          <h1>
            Everything we’re
            <br />
            creating, together.
          </h1>
          <p>
            Your projects, invoices, and support.
            <br />
            One place to keep things moving.
          </p>
          <div className="portal-promises">
            <span>01 &nbsp; Follow your project’s progress</span>
            <span>02 &nbsp; View and pay invoices securely</span>
            <span>03 &nbsp; Get help and track support tickets</span>
          </div>
        </div>
        <div className="portal-card portal-login-form">
          <span className="portal-eyebrow">YOUR CLIENT SPACE</span>
          <h2>
            {recovery
              ? 'Set your password.'
              : forgot
              ? 'Let’s get you back in.'
              : 'Welcome back.'}
          </h2>
          {notices}
          {recovery ? (
            passwordForm
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                run(async () => {
                  if (forgot) {
                    await api('reset', { email: f.get('email') });
                    setMessage(
                      'If this account exists, a password-reset link will arrive shortly.'
                    );
                  } else {
                    await api('login', {
                      email: f.get('email'),
                      password: f.get('password'),
                    });
                    await refresh();
                    navigate('/client');
                  }
                });
              }}
            >
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  autoComplete="username"
                  required
                />
              </label>
              {!forgot && (
                <label>
                  Password
                  <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                  />
                </label>
              )}
              <button className="portal-primary" disabled={busy}>
                {busy
                  ? 'Please wait…'
                  : forgot
                  ? 'Send reset link'
                  : 'Sign in to your account'}
              </button>
            </form>
          )}
          {!recovery && (
            <button
              className="portal-secondary"
              disabled={busy}
              onClick={() => {
                setForgot(!forgot);
                setError('');
                setMessage('');
              }}
            >
              {forgot ? 'Back to sign in' : 'Forgot your password?'}
            </button>
          )}
          <p className="portal-help">
            New here? Use the invitation sent by Infinite Creations to activate
            your account.
          </p>
          {recovery && <a href="/client/login">Return to sign in</a>}
        </div>
      </section>
    );

  return (
    <section className="client-portal">
      <header className="portal-heading">
        <div>
          <span className="portal-eyebrow">YOUR CLIENT SPACE</span>
          <h1>Hello, {workspace.clients[0]?.name || workspace.user.name}.</h1>
          <p>Here’s what we’re creating together.</p>
        </div>
        <button
          disabled={busy}
          onClick={() =>
            run(async () => {
              await api('logout');
              setWorkspace(null);
              setBilling(null);
              setTicket(null);
              setReplies([]);
              setTab('projects');
              navigate('/client/login');
            })
          }
        >
          Sign out
        </button>
      </header>
      <nav className="portal-tabs" aria-label="Your account">
        {['projects', 'invoices', 'payments', 'support', 'account'].map(
          (item) => (
            <button
              key={item}
              disabled={busy}
              aria-current={tab === item ? 'page' : undefined}
              onClick={() => {
                setTab(item);
                setError('');
                setMessage('');
                if (item === 'payments') run(loadBilling);
              }}
            >
              {item === 'support'
                ? 'Support tickets'
                : item[0].toUpperCase() + item.slice(1)}
            </button>
          )
        )}
      </nav>
      {notices}
      {tab === 'projects' && (
        <>
          <div className="portal-section-heading">
            <h2>Your projects</h2>
            <button disabled={busy} onClick={() => run(refresh)}>
              Refresh updates
            </button>
          </div>
          <div className="portal-projects">
            {workspace.projects.map((project) => (
              <article className="portal-card" key={project.id}>
                <span className="portal-badge">{status(project.status)}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <label>
                  Project progress{' '}
                  {project.progress == null
                    ? '— update coming soon'
                    : `${project.progress}%`}
                  {project.progress != null && (
                    <progress max="100" value={project.progress} />
                  )}
                </label>
                <dl>
                  <div>
                    <dt>Started</dt>
                    <dd>{date(project.start_date)}</dd>
                  </div>
                  <div>
                    <dt>Target completion</dt>
                    <dd>{date(project.end_date)}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          {!workspace.projects.length && (
            <p className="portal-card portal-empty">
              Your projects will appear here when our team adds them.
            </p>
          )}
        </>
      )}
      {tab === 'invoices' && (
        <>
          <div className="portal-section-heading">
            <h2>Your invoices</h2>
            <button disabled={busy} onClick={() => run(refresh)}>
              Refresh invoices
            </button>
          </div>
          <div className="portal-card portal-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Invoice</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Due</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {workspace.invoices.map((invoice) => (
                  <tr key={invoice.stripe_id}>
                    <td>
                      {invoice.number || 'Invoice'}
                      <small>{invoice.description}</small>
                    </td>
                    <td>{money(invoice.total, invoice.currency)}</td>
                    <td>{status(invoice.status)}</td>
                    <td>
                      {invoice.due_at
                        ? date(invoice.due_at)
                        : 'No due date set'}
                      {invoice.status === 'open' &&
                        invoice.due_at &&
                        new Date(invoice.due_at) < new Date() && (
                          <small>Overdue</small>
                        )}
                    </td>
                    <td>
                      {invoice.hosted_url && (
                        <a
                          href={invoice.hosted_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {invoice.status === 'open'
                            ? 'Pay invoice'
                            : 'View invoice'}
                        </a>
                      )}
                      {invoice.pdf_url && (
                        <a
                          href={invoice.pdf_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          PDF
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!workspace.invoices.length && (
              <p className="portal-empty">
                No invoices yet. We’ll let you know when one is ready.
              </p>
            )}
          </div>
        </>
      )}
      {tab === 'payments' && (
        <>
          <div className="portal-section-heading">
            <h2>Payments, your way.</h2>
            <button disabled={busy} onClick={() => run(loadBilling)}>
              Refresh payments
            </button>
          </div>
          <p>Cards and bank accounts are securely stored by Stripe.</p>
          {!billing && (
            <p role="status">
              {busy
                ? 'Loading payment details…'
                : 'Payment details could not be loaded. Please refresh to try again.'}
            </p>
          )}
          {billing && !billing.available && (
            <p className="portal-alert">{billing.reason}</p>
          )}
          <section className="portal-card portal-due-invoices">
            <h3>Unpaid invoices and due dates</h3>
            {workspace.invoices
              .filter(
                (invoice) => invoice.status === 'open' && invoice.amount_due > 0
              )
              .map((invoice) => (
                <div className="portal-method" key={invoice.stripe_id}>
                  <div>
                    <strong>
                      {invoice.number || 'Invoice'} ·{' '}
                      {money(invoice.amount_due, invoice.currency)} due
                    </strong>
                    <small>
                      {invoice.due_at
                        ? `Due ${date(invoice.due_at)}${
                            new Date(invoice.due_at) < new Date()
                              ? ' · Overdue'
                              : ''
                          }`
                        : 'No due date set — see invoice for payment details'}
                    </small>
                  </div>
                  {invoice.hosted_url && (
                    <a
                      href={invoice.hosted_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pay invoice
                    </a>
                  )}
                </div>
              ))}
            {!workspace.invoices.some(
              (invoice) => invoice.status === 'open' && invoice.amount_due > 0
            ) && <p>You have no unpaid invoices.</p>}
          </section>
          {
            <div className="portal-billing-grid">
              <section className="portal-card">
                <h3>Saved payment methods</h3>
                {(billing?.methods || []).map((pm) => (
                  <div className="portal-method" key={pm.id}>
                    <span>
                      {pm.label}
                      {pm.id === billing?.defaultMethod && (
                        <small>Default payment method</small>
                      )}
                    </span>
                    {pm.id !== billing?.defaultMethod && (
                      <button
                        disabled={busy || billing.autopay !== 'disabled'}
                        onClick={() =>
                          run(async () => {
                            await api('defaultMethod', { method_id: pm.id });
                            await loadBilling();
                            setMessage('Default payment method updated.');
                          })
                        }
                      >
                        Make default
                      </button>
                    )}
                    <button
                      disabled={busy}
                      onClick={() =>
                        run(async () => {
                          await api('removeMethod', { method_id: pm.id });
                          await loadBilling();
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                ))}
                {!billing?.methods.length && (
                  <p>
                    {billing?.available
                      ? 'No payment methods saved yet.'
                      : 'Saved cards and ACH accounts will appear here once billing is available.'}
                  </p>
                )}
                <button
                  className="portal-primary"
                  disabled={busy || !billing?.available}
                  onClick={() =>
                    run(async () => {
                      window.location.assign(await api('addMethod'));
                    })
                  }
                >
                  Add credit card or ACH account
                </button>
              </section>
              <section className="portal-card">
                <h3>Automatic payments</h3>
                {billing?.available && !billing.autopayAvailable && (
                  <p>
                    Automatic payments are not yet activated. Contact our team
                    to enable them.
                  </p>
                )}
                {billing?.available && billing.autopay !== 'disabled' && (
                  <p>
                    To change your default method, turn off autopay, choose a
                    new default, then authorize autopay again.
                  </p>
                )}
                <p>
                  Autopay is{' '}
                  <strong>
                    {billing?.available
                      ? status(billing.autopay)
                      : 'not available yet'}
                  </strong>
                  .
                </p>
                {billing?.available && billing.autopay !== 'disabled' ? (
                  <button
                    disabled={busy}
                    onClick={() =>
                      run(async () => {
                        await api('autopay', { enabled: false });
                        await loadBilling();
                      })
                    }
                  >
                    Turn off automatic payments
                  </button>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      run(async () => {
                        await api('autopay', {
                          enabled: true,
                          method_id: method,
                          consent,
                        });
                        await loadBilling();
                        setMessage('Automatic payments are enabled.');
                      });
                    }}
                  >
                    <label>
                      Payment method
                      <select
                        value={method}
                        disabled={busy || !billing?.available}
                        onChange={(e) => {
                          setMethod(e.target.value);
                          setConsent(false);
                        }}
                        required
                      >
                        <option value="">Choose a saved method</option>
                        {(billing?.methods || []).map((pm) => (
                          <option value={pm.id} key={pm.id}>
                            {pm.label}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="portal-consent">
                      <input
                        type="checkbox"
                        disabled={busy || !billing?.autopayAvailable}
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        required
                      />
                      I authorize Infinite Creations to automatically charge
                      this payment method for future invoices when due. I can
                      turn off autopay here at any time.
                    </label>
                    <button
                      className="portal-primary"
                      disabled={
                        busy ||
                        !consent ||
                        !method ||
                        !billing?.autopayAvailable
                      }
                    >
                      Enable automatic payments
                    </button>
                  </form>
                )}
              </section>
            </div>
          }
        </>
      )}
      {tab === 'support' && (
        <>
          <h2>Let’s keep things moving.</h2>
          <div className="portal-billing-grid">
            <section className="portal-card">
              <h3>Submit a ticket</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const f = new FormData(form);
                  run(async () => {
                    await api('ticket', Object.fromEntries(f));
                    form.reset();
                    await refresh();
                    setMessage('Your ticket has been sent to our team.');
                  });
                }}
              >
                <label>
                  Subject
                  <input name="subject" maxLength={200} required />
                </label>
                <label>
                  Project
                  <select name="project_id">
                    <option value="">General question</option>
                    {workspace.projects.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Priority
                  <select name="priority" defaultValue="normal">
                    <option value="low">Low</option>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                  </select>
                </label>
                <label>
                  How can we help?
                  <textarea
                    name="description"
                    maxLength={10000}
                    rows={5}
                    required
                  />
                </label>
                <button className="portal-primary" disabled={busy}>
                  Send ticket
                </button>
              </form>
            </section>
            <section className="portal-card">
              <h3>Your conversations</h3>
              {workspace.tickets.map((t) => (
                <button
                  className="portal-ticket"
                  key={t.id}
                  disabled={busy}
                  onClick={() =>
                    run(async () => {
                      const messages = await api('replies', {
                        ticket_id: t.id,
                      });
                      setTicket(t);
                      setReplies(messages);
                    })
                  }
                >
                  <strong>{t.subject}</strong>
                  <small>
                    {status(t.status)} · {date(t.updated_at)}
                  </small>
                </button>
              ))}
              {!workspace.tickets.length && <p>No tickets yet.</p>}
            </section>
          </div>
          {ticket && (
            <section className="portal-card portal-conversation">
              <div className="portal-section-heading">
                <h3>{ticket.subject}</h3>
                <button onClick={() => setTicket(null)}>
                  Close conversation
                </button>
              </div>
              <p className="portal-message">{ticket.description}</p>
              {replies.map((reply) => (
                <article key={reply.id} className="portal-reply">
                  <strong>{reply.author_name}</strong>
                  <small>{date(reply.created_at)}</small>
                  <p className="portal-message">{reply.body}</p>
                </article>
              ))}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const body = new FormData(form).get('body');
                  run(async () => {
                    await api('reply', { ticket_id: ticket.id, body });
                    form.reset();
                    setReplies(await api('replies', { ticket_id: ticket.id }));
                  });
                }}
              >
                <label>
                  Your reply
                  <textarea name="body" rows={4} maxLength={10000} required />
                </label>
                <button className="portal-primary" disabled={busy}>
                  Send reply
                </button>
              </form>
            </section>
          )}
        </>
      )}
      {tab === 'account' && (
        <section className="portal-card portal-account">
          <h2>Your account</h2>
          <p>{workspace.user.email}</p>
          <h3>Profile and business information</h3>
          <form
            key={workspace.clients[0]?.updated_at || workspace.clients[0]?.name}
            onSubmit={(e) => {
              e.preventDefault();
              const fields = Object.fromEntries(new FormData(e.currentTarget));
              run(async () => {
                await api('profile', fields);
                await refresh();
                setMessage(
                  'Your profile and business information have been saved.'
                );
              });
            }}
          >
            <label>
              Contact name
              <input
                name="name"
                defaultValue={workspace.clients[0]?.name}
                maxLength={200}
                required
              />
            </label>
            <label>
              Business name
              <input
                name="company"
                defaultValue={workspace.clients[0]?.company}
                maxLength={200}
              />
            </label>
            <label>
              Phone number
              <input
                name="phone"
                type="tel"
                defaultValue={workspace.clients[0]?.phone}
                maxLength={50}
              />
            </label>
            <label>
              Business address
              <textarea
                name="business_address"
                defaultValue={workspace.clients[0]?.business_address}
                maxLength={1000}
                rows={3}
              />
            </label>
            <label>
              Business website
              <input
                name="business_website"
                type="url"
                placeholder="https://example.com"
                defaultValue={workspace.clients[0]?.business_website}
                maxLength={500}
              />
            </label>
            <p className="portal-help">
              Your sign-in email is {workspace.user.email}. Contact our team if
              it needs to change.
            </p>
            <button className="portal-primary" disabled={busy}>
              Save profile
            </button>
          </form>
          <h3>Change password</h3>
          <p>Use at least 12 characters.</p>
          {passwordForm}
        </section>
      )}
    </section>
  );
}
