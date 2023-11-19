export interface Transferencia {
    id: number
    agendada: boolean
    contaOrigem: string
    contaDestino: string
    taxa: number
    valor: number
    dataTransferencia: string
    dataCriacao: string
  }