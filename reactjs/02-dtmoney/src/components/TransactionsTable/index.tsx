import { useEffect } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get('transactions')
      .then(Response => console.log(Response.data))
  }, [])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Títuto</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>22/01/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$3.000</td>
            <td>©asa</td>
            <td>11/04/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}