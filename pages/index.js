import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>

      <p>
        There is an issue with the current router and catch all routes.  If an asPath is specified in a dev environment.  The router does not correctly redirect.  This does however work in production build.
      </p>

      <p>
        The below link will take you to the managed project list.
      </p>

      <Link href="/managedProjectList">
        <a>Managed Project List</a>
      </Link>
    </div>
  );
};

export default HomePage;