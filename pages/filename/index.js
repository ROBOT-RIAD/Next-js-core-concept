import User from "@/components/navbar/User";
export const getStaticProps = async () =>{
    const res= await fetch("https://jsonplaceholder.typicode.com/users");
    const data= await res.json();
    return {
        props: {users : data}
    }
}
const index = ({users}) => {
  return (
    <div>
        <h1>filename index</h1>
        {
            users.map( user => <User key={user.id} user={user} ></User>)
        }
    </div>
  )
}

export default index