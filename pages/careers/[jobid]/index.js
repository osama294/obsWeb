/** @format */
import React from "react";
import { useRouter } from "next/router";
function JobDescription() {
  const router = useRouter();
  const jobid = router.query.jobid;
  return (
    <>
      <h2>DOD{jobid}</h2>
    </>
  );
}

export default JobDescription;
