import Link from 'next/link';

function SecondaryBtn({ children, classes }) {
  return (
    <Link
      href='/portfolio'
      className={`inline-block p-3 px-6 border border-[#33323D] uppercase tracking-[2px] text-grayish-dark-blue text-sm ${classes}`}
    >
      {children}
    </Link>
  );
}

export default SecondaryBtn;
