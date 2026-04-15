const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
}

export async function postJson(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(data),
  })

  const payload = await response.json()

  if (!response.ok) {
    throw new Error(payload?.message || 'Request failed. Please try again.')
  }

  return payload
}
