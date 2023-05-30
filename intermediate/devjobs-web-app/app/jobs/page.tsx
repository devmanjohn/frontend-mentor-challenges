'use client';

import JobCard from '@/components/JobCard';
import { db } from '@/firebase/firebaseConfig';
import Job from '@/models/Job';
import { useEffect, useState } from 'react';
import {
  collection,
  getCountFromServer,
  getDocs,
  limit,
  query,
} from 'firebase/firestore';
import Filters from '@/components/Filters';

export default function Home() {
  const [jobsData, setJobsData] = useState<Job[]>();
  const [jobLimit, setJobLimit] = useState(12);
  const [totalDocs, setTotalDocs] = useState(0);
  const [filters, setFilters] = useState({
    position: '',
    isFulltime: false,
    location: '',
  });

  // Query collection data for filters
  const q = query(collection(db, 'jobs'), limit(jobLimit));

  // Get collection data from firestore
  const getJobsCollection = async () => {
    const querySnapshot = await getDocs(q);
    const snapshotCount = await getCountFromServer(
      query(collection(db, 'jobs'))
    );
    const newData: any = querySnapshot.docs.map((doc) => ({ ...doc.data() }));

    setTotalDocs(snapshotCount.data().count);
    setJobsData(newData);
  };

  useEffect(() => {
    getJobsCollection();
  }, [jobLimit]);

  return (
    <main>
      <Filters
        setJobLimit={setJobLimit}
        setFilters={setFilters}
        filters={filters}
      />

      <section className='container mt-14 mb-14'>
        <div className='grid grid-cols-1 gap-x-4 lg:gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3'>
          {jobsData
            ?.filter(({ position }) =>
              position.toLowerCase().includes(filters.position.toLowerCase())
            )
            .filter(
              ({ contract }) =>
                contract === (filters.isFulltime ? 'Full Time' : contract)
            )
            .filter(({ location }) =>
              location.toLowerCase().includes(filters.location.toLowerCase())
            )
            .map(
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
          className='bg-[#5964E0] text-white rounded px-8 py-4 font-bold mt-12 mx-auto block disabled:opacity-10 hover:opacity-80 transition-opacity'
          onClick={() => {
            setJobLimit((prev) => {
              return prev + 3;
            });
          }}
          disabled={jobLimit >= totalDocs}
        >
          Load More
        </button>
      </section>
    </main>
  );
}
