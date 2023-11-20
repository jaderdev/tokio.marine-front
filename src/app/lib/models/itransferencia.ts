export interface Transferencia {
    id?: number
    agendada: boolean
    contaOrigem?: string
    contaDestino: string
    taxa?: string
    valor: string
    dataTransferencia: string
    dataCriacao?: string
  }