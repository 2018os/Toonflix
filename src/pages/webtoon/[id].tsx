import React from 'react';
import { useRouter } from 'next/router';

const Webtoon = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  // Graphql request id
  return <div>hello</div>;
};

export default Webtoon;
