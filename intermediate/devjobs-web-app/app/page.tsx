'use client';

import JobCard from '@/components/JobCard';
import { db } from '@/firebase/firebaseConfig';
import Job from '@/models/Job';
import {
  collection,
  doc,
  getDocs,
  limit,
  onSnapshot,
  query,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function Home() {
  const [jobsData, setJobsData] = useState<Job[]>();
  const [jobLimit, setJobLimit] = useState(12);

  // Query collection data for filters
  const q = query(collection(db, 'jobs'), limit(jobLimit));

  // Get collection data from firestore
  const getJobsCollection = async () => {
    const querySnapshot = await getDocs(q);

    const newData: any = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
    setJobsData(newData);
  };

  useEffect(() => {
    getJobsCollection();
  }, [jobLimit]);

  return (
    <main>
      <section className='container mt-14 mb-14'>
        <div className='grid grid-cols-1 gap-x-4 lg:gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3'>
          {jobsData?.map(
            ({
              id,
              company,
              location,
              logo,
              logoBackground,
              postedAt,
              contract,
              position,
            }) => {
              return (
                <JobCard
                  key={id}
                  id={id}
                  company={company}
                  logo={logo}
                  logoBackground={logoBackground}
                  location={location}
                  postedAt={postedAt}
                  contract={contract}
                  position={position}
                />
              );
            }
          )}
        </div>
        <button
          onClick={() => {
            setJobLimit((prev) => {
              return prev + 3;
            });
          }}
          className='bg-[#5964E0] text-white rounded px-8 py-4 font-bold mt-12 mx-auto block'
        >
          Load More
        </button>
      </section>
    </main>
  );
}
