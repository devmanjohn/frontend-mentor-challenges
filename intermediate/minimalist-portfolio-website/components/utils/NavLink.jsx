import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ children, href }) {
  const pathname = usePathname();

  return (
    <Link
      className={`uppercase tracking-[2px]
      ${pathname === href ? 'text-slightly-desaturated-cyan' : ''}  `}
      href={`${href}`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
