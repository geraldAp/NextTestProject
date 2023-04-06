// changeable slug parameter

// get static path this tells next how many html pages need to be made based on our data 
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
// getting all the paths as in each data to be made into individual page 
    const paths = data.map(user =>{
        return {
            params: {id: user.id.toString()}
        }
    })
// when it runs the function it will see this paths returned and know how many html pages to create 
    return {
       paths,
       fallback: false  
    }
}

// this context object we get it automaticaly and the id of each object is attached to it 
export const getStaticProps = async (context) =>{
  // now for each path we have got it will run this function to get the data from each
const id = context.params.id;
const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
const data = await res.json();

return {
    props:{user:data }
}
}

const Details = ({user}) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </div>
  )
}

export default Details
