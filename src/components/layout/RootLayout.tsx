import { Outlet } from 'react-router-dom'

import { Header } from '../shared/Header'
// O RootLayout é um componente de layout que envolve toda a aplicação, incluindo o Header e o Outlet para renderizar as rotas filhas. Ele é usado para definir a estrutura básica da aplicação e garantir que o Header esteja presente em todas as páginas.
export const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
