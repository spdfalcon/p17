import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
export default function App() {
const router = useRoutes(routes)

  return (
    <div className='font-iransans'>
      {router}
    </div>
  )
}
