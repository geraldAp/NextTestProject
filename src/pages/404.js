import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
        // use router hook from next
         //router.go()
         router.push('/')// redirects them to the homePage
    },3000);
  }, [router]);

  return (
    <div className="not-found">
      <h1>Ooooops..... </h1>
      <h2>That page cannot be found </h2>
      <p>
        Go back to the <Link href="/">HomePage</Link>
      </p>
    </div>
  );
};

export default NotFound;
