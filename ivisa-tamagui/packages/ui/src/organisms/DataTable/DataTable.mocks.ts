// @ts-nocheck
export type Pagamento = {
  id: string
  quantia: number
  status: 'pendente' | 'processando' | 'sucesso' | 'falhou'
  email: string
  nome: string
  avatar: string
}

const NOMES = [
  'Ana Silva', 'Bruno Costa', 'Carla Dias', 'Daniel Oliveira', 'Eliana Santos',
  'Fábio Martins', 'Gabriela Pereira', 'Heitor Almeida', 'Isabela Lima', 'João Rodrigues',
]

const STATUS: Pagamento['status'][] = ['pendente', 'processando', 'sucesso', 'falhou']

const randomString = () => Math.random().toString(36).substring(2, 10)
const randomNumber = (min: number, max: number) => Math.random() * (max - min) + min
const randomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]

const criarPagamento = (): Pagamento => {
    const nome = randomElement(NOMES)
    return {
        id: randomString(),
        quantia: randomNumber(50, 1500),
        status: randomElement(STATUS),
        email: `${nome.toLowerCase().replace(' ', '.')}@exemplo.com`,
        nome,
        // Using a placeholder service for avatars
        avatar: `https://i.pravatar.cc/40?u=${randomString()}`,
    }
}

export const pagamentos = Array.from({ length: 50 }, criarPagamento)

