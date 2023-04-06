import Link from "next/link";
import styles from '../../styles/Ninja.module.css'



// special function for fetching data in next get static props
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  // nb this is for next
  return {
    props: { users: data },
  };
};

const Test = ({users}) => {
  return (
    <div>
      <h1>All Users</h1>
      {users.map(user =>(
       <div >
        <Link key={user.id} href={`/ninjas/${user.id}`} className={styles.single }>{user.name}</Link>
       </div>

      ))}
    </div>
  );
};

export default Test;
