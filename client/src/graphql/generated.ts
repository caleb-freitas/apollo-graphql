import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Okr = {
  __typename?: 'Okr';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  okrs: Array<Okr>;
};

export type GetOkrsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOkrsQuery = { __typename?: 'Query', okrs: Array<{ __typename?: 'Okr', id?: string | null, title?: string | null }> };


export const GetOkrsDocument = gql`
    query GetOkrs {
  okrs {
    id
    title
  }
}
    `;

/**
 * __useGetOkrsQuery__
 *
 * To run a query within a React component, call `useGetOkrsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOkrsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOkrsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOkrsQuery(baseOptions?: Apollo.QueryHookOptions<GetOkrsQuery, GetOkrsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOkrsQuery, GetOkrsQueryVariables>(GetOkrsDocument, options);
      }
export function useGetOkrsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOkrsQuery, GetOkrsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOkrsQuery, GetOkrsQueryVariables>(GetOkrsDocument, options);
        }
export type GetOkrsQueryHookResult = ReturnType<typeof useGetOkrsQuery>;
export type GetOkrsLazyQueryHookResult = ReturnType<typeof useGetOkrsLazyQuery>;
export type GetOkrsQueryResult = Apollo.QueryResult<GetOkrsQuery, GetOkrsQueryVariables>;