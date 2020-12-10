import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const useProject = (projectId, packageId, sourceType) => {

  const { data, error } = useSWR('/api/getProjectData', fetcher);

  return { project: data, error };
};

export default useProject;