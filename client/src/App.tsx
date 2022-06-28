import { useGetOkrsQuery } from "./graphql/generated"

export function App() {
  const { data } = useGetOkrsQuery()
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
