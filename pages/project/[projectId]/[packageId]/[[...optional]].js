import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useProject from '../../../../src/utils/useProject';
/**
 * This is needed because we use the same route definition for many different types of projects
 * managed vs curated.  This redirector component figures out based on the returned project and redirects to the appropriate page
 */

const ProjectRedirect = ({ projectId, packageId, optional, sourceType }) => {
  

  const router = useRouter();
  const { project, error } = useProject(projectId, packageId, sourceType);

  useEffect(() => {

    if (project) {
      router.replace({
        pathname: '/project/managedProject',
        query: { projectId: project.projectId, packageId: project.packageId, sourceType: 2 }
      }, `/project/${project.projectId}/${project.packageId}/information?sourceType=2&test=notworking`);

      /**
       * The above code should redirect to the managedProject page but as you can see the url updates but the page stays the same as ...loading project is still displayed
       * 
       * Removal of the asPath queryString params allows the router to magically start working again as displayed below
       * 
        router.replace({
          pathname: '/project/managedProject',
          query: { projectId: project.projectId, packageId: project.packageId, sourceType: 2 }
        }, `/project/${project.projectId}/${project.packageId}/information`);
       */

    }
  }, [project]);


  if (error) {
  return <div>... error: {error}</div>
  }

  return <div>... loading project</div>;
};

export default ProjectRedirect;