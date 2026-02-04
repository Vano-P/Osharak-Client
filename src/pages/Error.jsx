import { useRouteError } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Error = () => {
  const error = useRouteError()
  const { t } = useTranslation()

  console.error(error)

  return (
    <section className="section">
      <div className="container">
        <h1>{t('error.title')}</h1>
        <p>{t('error.description')}</p>

        {error?.status && (
          <p>
            {t('error.code')}: {error.status}
          </p>
        )}
      </div>
    </section>
  )
}

export default Error
