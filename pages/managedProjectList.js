
import React from 'react';
import Link from 'next/link';

const ManagedProjectList = () => {
  return (
    <div>
      <div>
        <Link
          href={{ pathname: '/project/[projectId]/[packageId]/[[...optional]]',
          query: { projectId: 111, packageId: 222, tab: 'information', sourceType: 2 }}} as="/project/111/222/information?sourceType=2"
        >
          <a>Project 111 - Package 222</a>
        </Link>
      </div>
    </div>
  );
};

export default ManagedProjectList;