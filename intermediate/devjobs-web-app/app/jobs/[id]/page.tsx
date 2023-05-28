'use client';

import LogoBox from '@/components/utils/LogoBox';
import { db } from '@/firebase/firebaseConfig';
import Job from '@/models/Job';
import { doc, getDoc } from 'firebase/firestore';
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
      <section className='container'>
        <p>{job?.company}</p>
        <p>Company</p>
      </section>
    </main>
  );
}

export default JobDetails;
