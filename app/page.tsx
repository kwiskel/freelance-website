import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';

export default function Page() {
  return (
    <div>
      <Navbar />
      <div>
        <Home />
      </div>
    </div>
  );  
}
