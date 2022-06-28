import { gql, useQuery } from "@apollo/client"

const GetOkrsQuery = gql`
  query GetOkrsQuery {
    okrs {
      id
      title
    }
  }
`

type GetOkrs = {
  okrs: {
    id: string
    title: string
  }[]
}

export function App() {
  const { data } = useQuery<GetOkrs>(GetOkrsQuery)
  return (
    <div>
      {data?.okrs.map(okr => {
        return (
          <p key={okr.id}>{okr.title}</p>
        )
      })}
    </div>
  )
}
