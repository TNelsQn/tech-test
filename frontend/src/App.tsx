import { Route, Routes } from 'react-router-dom'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { WelcomePage } from '@/pages/WelcomePage'

export default function App() {
  return (
    <Routes>
      <Route path="/welcome/:userId" element={<WelcomePage />} />
      <Route
        path="*"
        element={
          <main className="flex min-h-screen items-center bg-page px-5">
            <Alert className="mx-auto max-w-lg">
              <AlertTitle>Delivery page not found</AlertTitle>
              <AlertDescription>
                Open a customer delivery link in the format
                /welcome/&lt;USER-ID&gt;.
              </AlertDescription>
            </Alert>
          </main>
        }
      />
    </Routes>
  )
}
