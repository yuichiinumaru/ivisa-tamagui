import { render, screen } from '../../test-utils';
import RankingChart from './RankingChart';
import { RankingChartEntry } from './RankingChart';
import { Button } from 'tamagui';

const MOCK_DATA: RankingChartEntry[] = [
  { name: 'Produto A', value: 400, color: '$blue10' },
  { name: 'Produto B', value: 300, color: '$green10' },
  { name: 'Produto C', value: 200, color: '$orange10' },
  { name: 'Produto D', value: 100, color: '$red10' },
];

describe('RankingChart', () => {
  it('should render the title', () => {
    render(<RankingChart title="Ranking de Produtos" data={MOCK_DATA} />);
    expect(screen.getByText('Ranking de Produtos')).toBeInTheDocument();
  });

  it('should render the loading state', () => {
    render(<RankingChart title="Ranking de Produtos" data={[]} isLoading />);
    expect(screen.getByTestId('loading-state')).toBeInTheDocument();
  });

  it('should render the empty state', () => {
    render(<RankingChart title="Ranking de Produtos" data={[]} />);
    expect(screen.getByText('Sem dados para exibir.')).toBeInTheDocument();
  });

  it('should render the error state', () => {
    render(<RankingChart title="Ranking de Produtos" data={[]} isError />);
    expect(screen.getByText('Ocorreu um erro ao carregar os dados.')).toBeInTheDocument();
  });

  it('should render header actions', () => {
    render(<RankingChart title="Ranking de Produtos" data={MOCK_DATA} headerActions={<Button>Test</Button>} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should render empty state CTA', () => {
    render(<RankingChart title="Ranking de Produtos" data={[]} emptyStateCTA={<Button>Test</Button>} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
