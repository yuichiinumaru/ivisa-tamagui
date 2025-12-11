import { Filter, Plus } from '@tamagui/lucide-icons'
import type { Meta, StoryObj } from '@storybook/react'
import type { ColumnDef } from '@tanstack/react-table'
import { Avatar, Text, XStack, YStack } from 'tamagui'
import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import { DataTable } from './DataTable'
import type { DataTableLocalization } from './DataTable'
import { TableCellText, TableHeadText } from './DataTable.parts'
import { pagamentos } from './DataTable.mocks'
import type { Pagamento } from './DataTable.mocks'

const meta: Meta<typeof DataTable> = {
  title: 'Organisms/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: {
        type: 'object',
      },
    },
    columns: {
      control: {
        disable: true,
      },
    },
    headerActions: {
      control: {
        disable: true,
      },
    },
    emptyState: {
      control: {
        disable: true,
      },
    },
    localization: {
      control: {
        type: 'object',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const localizacao: DataTableLocalization = {
  noResults: 'Nenhum resultado encontrado.',
  previousPage: 'Anterior',
  nextPage: 'Próxima',
  pageOf: (pagina, total) => `Página ${pagina} de ${total}`,
  errorTitle: 'Algo deu errado',
  errorBody: 'Houve um erro ao carregar os dados. Por favor, tente novamente.',
  retry: 'Tentar Novamente',
}

const colunas: ColumnDef<Pagamento>[] = [
  {
    accessorKey: 'nome',
    header: () => <TableHeadText>Cliente</TableHeadText>,
    cell: ({ row }) => {
      const { nome, avatar, email } = row.original
      return (
        <XStack gap="$2" alignItems="center">
          <Avatar circular size="$2">
            <Avatar.Image src={avatar} />
            <Avatar.Fallback>{nome.charAt(0)}</Avatar.Fallback>
          </Avatar>
          <YStack>
            <TableCellText fontWeight="600">{nome}</TableCellText>
            <Text fontSize="$1" color="$color">
              {email}
            </Text>
          </YStack>
        </XStack>
      )
    },
  },
  {
    accessorKey: 'status',
    header: () => <TableHeadText>Status</TableHeadText>,
    cell: ({ row }) => <TableCellText textTransform="capitalize">{row.getValue('status')}</TableCellText>,
  },
  {
    accessorKey: 'quantia',
    header: () => <TableHeadText textAlign="right">Quantia</TableHeadText>,
    cell: ({ row }) => {
      const quantia = parseFloat(row.getValue('quantia'))
      const formatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(quantia)

      return <TableCellText textAlign="right">{formatado}</TableCellText>
    },
  },
]

const HeaderActions = (
  <XStack gap="$2" alignItems="center" width="100%">
    <Input placeholder="Filtrar por nome..." flex={1} />
    <Button icon={<Filter />} variant="outline">
      Filtros
    </Button>
    <Button icon={<Plus />}>Novo Pagamento</Button>
  </XStack>
)

export const Padrao: Story = {
  args: {
    columns: colunas,
    data: pagamentos,
    localization: localizacao,
    headerActions: HeaderActions,
  },
  render: (args) => (
    <YStack width={800} minHeight={400}>
      <DataTable {...args} />
    </YStack>
  ),
}

export const Carregando: Story = {
  args: {
    ...Padrao.args,
    data: [],
    isLoading: true,
  },
  render: Padrao.render,
}

export const SemDados: Story = {
  args: {
    ...Padrao.args,
    data: [],
  },
  render: Padrao.render,
}

export const Erro: Story = {
  args: {
    ...Padrao.args,
    data: [],
    error: new Error('Falha ao buscar dados.'),
    onRetry: () => alert('Retrying...'),
  },
  render: Padrao.render,
}

export const EstresseDeLayout: Story = {
  args: {
    ...Padrao.args,
  },
  render: (args) => (
    <YStack width={450} minHeight={400}>
      <DataTable {...args} />
    </YStack>
  ),
}
