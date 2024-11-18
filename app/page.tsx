import Image from 'next/image';
import Navbar from '@/components/Navbar';
import About from '@/components/About';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <About />
      </div>
    </div>
  );  
}
