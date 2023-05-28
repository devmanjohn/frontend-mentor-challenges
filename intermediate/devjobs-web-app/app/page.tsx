'use client';

import JobCard from '@/components/JobCard';
import { db } from '@/firebase/firebaseConfig';
import Job from '@/models/Job';
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function Home() {
  const [jobsData, setJobsData] = useState<Job[]>();

  // Query collection data for filters
  const q = query(collection(db, 'jobs'));

  // Get collection data from firestore
  const getJobsCollection = async () => {
    const querySnapshot = await getDocs(q);

    const newData: any = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
    setJobsData(newData);
  };

  useEffect(() => {
    getJobsCollection();
  }, []);

  return (
    <main>
      <section className='container'>
        <div className='grid grid-cols-1 gap-x-4 lg:gap-x-6 gap-y-14 mt-14 md:grid-cols-2 lg:grid-cols-3'>
          {jobsData?.map(
            ({
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
      </section>
    </main>
  );
}
