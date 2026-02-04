import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { Suspense } from 'react'

const App = () => {
  return (
      <Suspense fallback={ <PageLoader /> }>
        <RouterProvider router={ router } />
      </Suspense>
  )
}

const PageLoader = () => {
  return (
      <div className='section'>
        <div className='container'>
          <p>Loading…</p>
        </div>
      </div>
  )
}

export default App