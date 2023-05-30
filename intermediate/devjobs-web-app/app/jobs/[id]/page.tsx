'use client';

import LogoBox from '@/components/utils/LogoBox';
import { db } from '@/firebase/firebaseConfig';
import Job from '@/models/Job';
import { doc, getDoc } from 'firebase/firestore';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type JobTypes = {
  params: { id: number };
};

function JobDetails({ params }: JobTypes) {
  const [job, setJob] = useState<Job>();

  const getJob = async () => {
    const docRef = doc(db, 'jobs', `${params.id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setJob(docSnap.data() as Job);
    } else {
      console.log('Document was not found!');
    }
  };

  useEffect(() => {
    getJob();
  }, [params.id]);

  return (
    <main>
      {job && (
        <>
          <section className='container max-w-[730px] bg-white rounded md:rounded-bl-2xl dark:bg-[#19202D] -mt-8 text-center pb-8 py-16 relative md:flex md:p-0 md:items-center md:gap-10 md:text-left md:pr-10'>
            {/* Logo */}
            <div
              style={{ backgroundColor: `${job.logoBackground}` }}
              className='inline-flex absolute justify-center items-center w-[60px] h-[60px] p-3 rounded-2xl -top-6 left-1/2 -translate-x-1/2 md:relative md:top-auto md:translate-x-0 md:left-auto md:h-[140px] md:rounded-none md:rounded-bl-2xl md:w-[140px] md:p-6'
            >
              <figure className='relative w-full h-full'>
                <Image
                  src={`${job.logo}`}
                  alt={`${job.company}-logo`}
                  fill
                  className='object-contain'
                />
              </figure>
            </div>

            <div>
              <h1 className='font-bold text-xl md:text-2xl'>{job.company}</h1>
              <p className='text-[#6E8098] mt-1'>
                {job.website &&
                  job.website
                    .split('/')
                    .pop()
                    ?.split('.')
                    .filter((segment) => segment !== 'www')
                    .join('.') + '.com'}
              </p>
            </div>

            <a
              className='dark:bg-[#303642] dark:text-white inline-block mt-6 py-3 px-6 rounded bg-[#EFF0FC] text-[#5964E0] font-bold md:mt-0 md:ml-auto'
              href={job?.apply}
              target='_blank'
              rel='noopener noreferrer'
            >
              Company Site
            </a>
          </section>

          <section className='container max-w-[730px] bg-white mt-4 rounded p-6 md:p-10 md:mt-8 dark:bg-[#19202D]'>
            {/* Information */}
            <div className='md:flex md:items-center'>
              <div>
                <div className='flex gap-2 items-center text-[#6E8098] dark:text-[#9DAEC2]'>
                  <p>{job.postedAt}</p>
                  <span className='bg-[#6E8098] w-1 h-1 rounded-full block'></span>
                  <p>{job.contract}</p>
                </div>

                <h2 className='font-bold text-xl mt-1 md:text-2xl'>
                  {job.position}
                </h2>
                <p className='mt-2 text-[#5964E0] font-bold text-sm'>
                  {job.location}
                </p>
              </div>

              <a
                className='w-full md:w-fit md:px-8 md:ml-auto md:mt-0 bg-[#5964E0] text-white inline-block py-3 text-center rounded mt-10'
                href={job.apply}
                target='_blank'
                rel='noopener noreferrer'
              >
                Apply Now
              </a>
            </div>

            {/* Details */}
            <div className='mt-6 text-[#6E8098] leading-7 md:mt-10'>
              <p>{job.description}</p>
              <h3 className='font-bold text-[#19202D] text-xl mt-8 mb-4 dark:text-white'>
                Requirements
              </h3>
              <p>{job.requirements.content}</p>
              {job.requirements.items && (
                <ul className='list-disc list-outside ml-4'>
                  {job.requirements.items.map((item) => {
                    return <li className='mt-4 pl-4'>{item}</li>;
                  })}
                </ul>
              )}

              <h3 className='font-bold text-[#19202D] text-xl mt-8 mb-4 dark:text-white'>
                What You Will Do
              </h3>
              <p>{job.role.content}</p>
              {job.role.items && (
                <ol className='mt-4'>
                  {job.requirements.items.map((item, index) => {
                    return (
                      <li className='flex gap-6 mt-4'>
                        <span className='inline-block text-[#5964E0] font-bold'>
                          {++index}
                        </span>
                        {item}
                      </li>
                    );
                  })}
                </ol>
              )}
            </div>
          </section>

          <section className='bg-white dark:bg-[#19202D] mt-14 py-6 md:p-6 sticky bottom-0'>
            <div className='container max-w-[730px] md:flex'>
              <div className='hidden md:block'>
                <h4 className='font-bold text-[#19202D] text-xl dark:text-white'>
                  {job.position}
                </h4>
                <p className='text-[#6E8098]'>So Digital Inc.</p>
              </div>
              <a
                className='w-full md:w-fit mt-0 md:px-8 md:ml-auto bg-[#5964E0] text-white inline-block py-3 text-center rounded'
                href={job.apply}
                target='_blank'
                rel='noopener noreferrer'
              >
                Apply Now
              </a>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default JobDetails;
