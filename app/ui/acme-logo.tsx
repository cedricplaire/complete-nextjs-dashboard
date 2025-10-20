import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from './fonts';

export default function AcmeLogo({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon strokeWidth={0.8} className="h-12 w-12 rotate-[16deg]" />
      <p className={`${isOpen ? 'block' : "hidden"} text-[44px]`}>Acme</p>
    </div>
  );
}
