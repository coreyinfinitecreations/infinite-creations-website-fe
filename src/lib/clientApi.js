export async function api(action, data) {
  const response = await fetch('/api/client', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action, data }),
  });
  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error(
      'Your account service is unavailable. Please try again shortly.'
    );
  }
  if (!response.ok || result.error)
    throw new Error(result.error || 'Unable to complete this request.');
  if (['login', 'logout', 'profile', 'password'].includes(action))
    window.dispatchEvent(new Event('client-session-changed'));
  if (action === 'logout') {
    window.dispatchEvent(new Event('client-signed-out'));
    try {
      localStorage.setItem('client-auth-refresh', String(Date.now()));
    } catch {
      /* Optional cross-tab notification. */
    }
  }
  return result.data;
}
