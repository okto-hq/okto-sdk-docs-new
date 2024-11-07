'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function OktoAuthTokenGenerator() {
  const [appSecret, setAppSecret] = useState('')
  const [googleIdToken, setGoogleIdToken] = useState('')
  const [authToken, setAuthToken] = useState('')
  const [error, setError] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  const handleGetOktoToken = async () => {
    if (!appSecret || !googleIdToken) {
      setError('Please enter both Okto App Secret and Google ID Token.')
      return
    }

    try {
      const response = await fetch('https://sandbox-api.okto.tech/api/v2/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': appSecret,
        },
        body: JSON.stringify({
          id_token: googleIdToken,
        }),
      })

      const data = await response.json()

      if (data.status === 'success') {
        setAuthToken(data.data.auth_token)
        setError('')
      } else {
        setError(data.message || 'Failed to get Okto token')
      }
    } catch (err) {
      setError('An error occurred while fetching the Okto token')
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(authToken)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <Label htmlFor="okto-app-secret">Okto App Secret</Label>
        <Input
          id="okto-app-secret"
          type="password"
          placeholder="Enter Okto App Secret"
          value={appSecret}
          onChange={(e) => setAppSecret(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="google-id-token">Google ID Token</Label>
        <Input
          id="google-id-token"
          type="text"
          placeholder="Enter Google ID Token"
          value={googleIdToken}
          onChange={(e) => setGoogleIdToken(e.target.value)}
        />
      </div>
      <Button type="button" onClick={handleGetOktoToken}>
        Get Okto Auth Token
      </Button>
      {authToken && (
        <div className="mt-4">
          <div className="my-3 p-2 bg-gray-100 dark:bg-slate-800 rounded-md break-all max-w-full overflow-x-auto" style={{ maxHeight: '300px', overflowY: 'scroll' }}>
            {authToken}
          </div>
          <Button type="button" onClick={copyToClipboard}>
            {isCopied ? 'Copied!' : 'Copy Okto Auth Token to Clipboard'}
          </Button>
        </div>
      )}
    </div>
  )
}
