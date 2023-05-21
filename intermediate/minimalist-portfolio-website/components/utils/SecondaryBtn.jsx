import Link from 'next/link';

function SecondaryBtn({ children, classes, href }) {
  return (
    <Link
      href={`${href}`}
      className={`inline-block p-3 px-6 border border-[#33323D] uppercase tracking-[2px] text-grayish-dark-blue text-sm ${classes} hover:bg-grayish-dark-blue hover:text-white transition-colors duration-300`}
    >
      {children}
    </Link>
  );
}

export default SecondaryBtn;
