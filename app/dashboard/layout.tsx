import SideNav from '@/app/ui/dashboard/sidenav';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export const experimental_ppr = true;
 
export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <div className={`flex h-screen flex-col md:flex-row md:overflow-hidden`}>
      <div className="flex-col">
        <SideNav>
        <form
          
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <button type='submit' className="flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-sky-200 hover:bg-sky-400 p-3 text-sm font-medium hover:text-blue-800 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className={`${'width' > '62px' ? 'block' : 'hidden'} flex flex-col px-3 py-4 md:px-2`}>Sign Out</div>
          </button>
        </form>
        </SideNav>
        
      </div>
      <div className="w-full flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}