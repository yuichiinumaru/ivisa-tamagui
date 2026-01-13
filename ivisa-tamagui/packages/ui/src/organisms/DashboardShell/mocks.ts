// @ts-nocheck
export const mockSidebar = {
  items: [
    { id: '1', label: 'Início' },
    { id: '2', label: 'Relatórios' },
    { id: '3', label: 'Configurações' },
  ],
}

export const mockHeader = {
  title: 'Painel Principal',
  user: {
    name: 'Júlia',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export const mockContent = {
  title: 'Bem-vinda de volta, Júlia!',
  stats: [
    { id: '1', label: 'Vendas Totais', value: formatCurrency(45231.89) },
    { id: '2', label: 'Assinaturas', value: '+2.350' },
    { id: '3', label: 'Taxa de Conversão', value: '98,12%' },
  ],
  recentActivities: [
    { id: '1', description: 'Nova venda registrada para o cliente #1234.' },
    { id: '2', description: 'Relatório de vendas de Maio foi gerado.' },
  ],
}
