import Landing from '@/views/Landing'
import SignUp from '@/views/SignUp'
// import Agreement from '@/views/Agreement'
// import Privacy from '@/views/Privacy'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: 'landing'
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
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
]

export default routes