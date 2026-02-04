import { useForm } from 'react-hook-form'
import { useAuthStore } from './auth.store'
import { useTranslation } from 'react-i18next'

const Login = () => {
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm()
  const login = useAuthStore((state) => state.login)

  const onSubmit = (data) => {
    // MOCK login
    // позже здесь будет API
    login({
      email: data.email,
      firstName: 'John',
      lastName: 'Doe',
      phone: '+000000000',
      address: '',
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>{t('auth.loginTitle')}</h2>

      <input
        type="email"
        {...register('email', { required: true })}
        placeholder={t('auth.email')}
      />

      <input
        type="password"
        {...register('password', { required: true })}
        placeholder={t('auth.password')}
      />

      <button type="submit">{t('auth.login')}</button>
    </form>
  )
}

export default Login
