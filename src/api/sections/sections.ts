import { useQuery } from 'react-query';
import { SectionsResponseType } from '../../../types';

import {
  RequestException,
  get,
  isResponseError,
  queryConfigDefaults,
} from '../http-client';

async function getSections(queryKey: string) {
  const endpoint = '/sections';

  const result = await get({
    endpoint,
  });
  if (isResponseError(result.status)) {
    throw new RequestException(result as Response);
  }
  return result;
}

export function useSections() {
  const { data, error, isFetching, refetch } = useQuery<
  SectionsResponseType,
    RequestException
  >({
    queryKey: 'sections',
    queryFn: getSections,
    config: { ...queryConfigDefaults },
  });
  
  return { sections: data?.responseData, error, isFetching, refetch };
}
