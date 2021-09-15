import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'Repo 1',
  description: 'Description repo',
  link: 'http://localhost:8081'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem  repository={repository} />
        <RepositoryItem  repository={repository} />
        <RepositoryItem  repository={repository} />
        <RepositoryItem  repository={repository} />
        <RepositoryItem  repository={repository} />
      </ul>
    </section>
  )
}