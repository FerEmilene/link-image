import Link from 'next/link';
import Image from 'next/image';

function HomePage() {
   return (
      <>
         <div>Welcome to Next.js!</div>
         <Link href="/posts/first"> First Post </Link>
         <br/>
         <Image src="/images/Goku.png" 
         height={144} // Desired size with correct aspect ratio
         width={144} // Desired size with correct aspect ratio
         alt="Goku" />
      </>	    
   )
}

export default HomePage