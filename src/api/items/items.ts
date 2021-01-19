import { useQuery } from 'react-query';
import { ItemsResponseType } from '../../../types';

import {
  RequestException,
  get,
  isResponseError,
  queryConfigDefaults,
} from '../http-client';

async function getItems(queryKey: string) {
  const endpoint = '/items';

  const result = await get({
    endpoint,
  });
  if (isResponseError(result.status)) {
    throw new RequestException(result as Response);
  }
  return result;
}

export function useItems() {
  const { data, error, isFetching, refetch } = useQuery<
  ItemsResponseType,
    RequestException
  >({
    queryKey: 'items',
    queryFn: getItems,
    config: { ...queryConfigDefaults },
  });
  
  return { items: data?.responseData, error, isFetching, refetch };
}
