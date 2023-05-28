import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className='header-bg h-[136px] pt-8'>
      <div className='container flex items-center'>
        <Link href='/' className='mr-auto'>
          <Image
            src={'/assets/desktop/logo.svg'}
            width={115}
            height={32}
            alt=''
          />
        </Link>
        <nav>
          <label className='flex items-center gap-4'>
            <Image
              src={'/assets/desktop/icon-sun.svg'}
              width={20}
              height={18}
              alt=''
            />
            <input
              className='hidden'
              type='checkbox'
              name='theme-toggle'
              id='theme-toggle'
            />
            <span className='custom-toggle bg-white block rounded-full w-[48px] h-[24px] relative'>
              <span className='custom-tack bg-[#5964E0] rounded-full w-[14px] h-[14px] block top-1/2 -translate-y-1/2 absolute left-[4px] transition-transform '></span>
            </span>
            <Image
              src={'/assets/desktop/icon-moon.svg'}
              width={14}
              height={18}
              alt=''
            />
          </label>
        </nav>
      </div>
    </header>
  );
}

export default Header;
