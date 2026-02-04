import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
      <section className='section'>
        <div className='container'>
          <article className='card card--muted'>
            <h1>404</h1>
            <p>The page you are looking for does not exist.</p>

            <div className='mt-4'>
              <Link to='/' className='btn btn--primary'> Go home </Link>
            </div>
          </article>
        </div>
      </section>
  )
}

export default NotFound
