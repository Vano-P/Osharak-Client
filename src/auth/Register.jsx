import { useForm } from 'react-hook-form'
import { useAuthStore } from './auth.store'
import { useTranslation } from 'react-i18next'

const Register = () => {
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm()
  const login = useAuthStore((state) => state.login)

  const onSubmit = (data) => {
    login({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>{t('auth.registerTitle')}</h2>

      <input {...register('firstName')} placeholder={t('auth.firstName')} />
      <input {...register('lastName')} placeholder={t('auth.lastName')} />
      <input {...register('email')} placeholder={t('auth.email')} />
      <input {...register('phone')} placeholder={t('auth.phone')} />
      <input {...register('address')} placeholder={t('auth.address')} />

      <button type="submit">{t('auth.register')}</button>
    </form>
  )
}

export default Register
