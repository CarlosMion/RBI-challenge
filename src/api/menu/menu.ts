import { useQuery } from 'react-query';
import { MenuResponseType } from '../../../types';

import {
  RequestException,
  get,
  isResponseError,
  queryConfigDefaults,
} from '../http-client';

async function getMenu(queryKey: string) {
  const endpoint = '/menu';

  const result = await get({
    endpoint,
  });
  if (isResponseError(result.status)) {
    throw new RequestException(result as Response);
  }
  return result;
}

export function useMenu() {
  const { data, error, isFetching, refetch } = useQuery<
  MenuResponseType,
    RequestException
  >({
    queryKey: 'menu',
    queryFn: getMenu,
    config: { ...queryConfigDefaults },
  });
  
  return { menuOptions: data?.responseData?.options, error, isFetching, refetch };
}
