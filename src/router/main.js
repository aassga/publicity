import Landing from '@/views/Landing'
import Agreement from '@/views/Agreement'
import Privacy from '@/views/Privacy'
import SignUp from '@/views/SignUp'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: 'signUp'
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing,
  },
  // {
  //   path: '/userAgreement',
  //   name: 'userAgreement',
  //   component: Agreement
  // },
  // {
  //   path: '/privacyPolicy',
  //   name: 'privacyPolicy',
  //   component: Privacy
  // },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUp
  }
]

export default routes