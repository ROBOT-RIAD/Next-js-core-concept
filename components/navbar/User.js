import Link from "next/link"

const User = ({user}) => {
  return (
    <div>
        <h1>{user.name}</h1>
        <Link href={'/filename/' + user.id}><button>click</button></Link>

    </div>
  )
}

export default User