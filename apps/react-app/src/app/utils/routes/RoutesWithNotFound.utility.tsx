import { Route, Routes } from 'react-router-dom'
import { PropsChildren } from '../../models'

export default function RoutesWithNotFound({ children }: PropsChildren) {
  return (
    <Routes>
      {children}
      <Route path='*' element={<>Not Found</>} />
    </Routes>
  )
}