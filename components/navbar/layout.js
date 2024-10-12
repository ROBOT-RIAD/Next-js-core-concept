import Navebar from "./Navebar"

const Layout = ({children}) => {
  return (
    <div className="container mx-auto p-4">
        <Navebar></Navebar>
        {children}

    </div>
  )
}

export default Layout