'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

declare global {
  interface Window {
    google: any
  }
}

export default function GoogleIdTokenGenerator() {
  const [idToken, setIdToken] = useState('')
  const [error, setError] = useState('')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const ClientId = 'MTA0NjI3MTUyMTE1NS0wbTQ1M3BvaTVndWEwM2tlaGRjbjV1b24xdnZ1NXU5ai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbQ=='
  
  const clientId = atob(ClientId)  

  useEffect(() => {
    // Load the Google Identity Services library
    const loadGoogleScript = () => {
      const script = document.createElement('script')
      script.src = 'https://accounts.google.com/gsi/client'
      script.async = true
      script.defer = true
      script.onload = initializeGis
      document.body.appendChild(script)
    }

    const initializeGis = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleCredentialResponse,
        })
        window.google.accounts.id.renderButton(
          document.getElementById('g_id_signin')!,
          { theme: 'outline', size: 'large', width: '100' }
        )
      }
    }

    if (clientId) {
      loadGoogleScript()
    } else {
      setError('Google Client ID is missing in environment variables.')
    }

    // Clean up
    return () => {
      const script = document.querySelector('script[src="https://accounts.google.com/gsi/client"]')
      if (script) script.remove()
    }
  }, [clientId])

  const handleCredentialResponse = (response: any) => {
    if (response.credential) {
      setIdToken(response.credential)
      setIsSignedIn(true)
      setError('')
    } else {
      setError('Failed to obtain ID Token.')
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(idToken)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="space-y-4">
      {!isSignedIn ? (
        <div>
          {clientId && (
            <div 
                id="g_id_signin"
                style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}
            ></div>
          )}
        </div>
      ) : (
        <>
          <div>
            <h2 className="text-xl font-semibold mb-2">Your Google ID Token</h2>
            <div 
                className="my-3 p-2 bg-gray-100 dark:bg-slate-800 rounded-md break-all max-w-full overflow-x-auto" 
                style={{ maxHeight: '300px', overflowY: 'scroll' }}
            >
              {idToken}
            </div>
            <Button onClick={handleCopy}>
              {isCopied ? 'Copied!' : 'Copy ID Token to Clipboard'}
            </Button>
          </div>
        </>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}