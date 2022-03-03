import { RepositoryItem } from "./RepositoryItem";

import '../styles/Repositories.scss'

const repository = {
  name: 'unform',
  description: "Formas in React",
  link: "https://github.com/unform/unform"
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />

      </ul>

    </section>
  )
}