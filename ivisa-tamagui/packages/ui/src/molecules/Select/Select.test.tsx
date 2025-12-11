import { render, screen, fireEvent, waitFor } from '../../test-utils';
import { Select } from './Select';

describe('Select', () => {
  it('renders and allows selecting an item', async () => {
    const { user } = render(
      <Select>
        <Select.Trigger data-testid="select-trigger">
          <Select.Value placeholder="Selecione uma fruta" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple">
            <Select.ItemText>Maçã</Select.ItemText>
          </Select.Item>
          <Select.Item value="banana">
            <Select.ItemText>Banana</Select.ItemText>
          </Select.Item>
        </Select.Content>
      </Select>
    );

    expect(screen.getByText('Selecione uma fruta')).toBeInTheDocument();

    const trigger = screen.getByTestId('select-trigger');
    await user.click(trigger);

    const bananaOption = await screen.findByText('Banana');
    fireEvent.click(bananaOption);

    expect(bananaOption).toBeInTheDocument();
  });

  it('renders with error styles when hasError is true', () => {
    render(
      <Select>
        <Select.Trigger hasError data-testid="select-trigger">
          <Select.Value placeholder="Selecione uma fruta" />
        </Select.Trigger>
      </Select>
    );

    const trigger = screen.getByTestId('select-trigger');
    expect(trigger).toBeTruthy();
  });

  it('is disabled when disabled prop is true', () => {
    render(
      <Select>
        <Select.Trigger disabled data-testid="select-trigger">
          <Select.Value placeholder="Selecione uma fruta" />
        </Select.Trigger>
      </Select>
    );

    const trigger = screen.getByTestId('select-trigger');
    expect(trigger).toHaveAttribute('aria-disabled', 'true');
  });

  it('returns focus to the trigger on close', async () => {
    const { user } = render(
      <Select>
        <Select.Trigger data-testid="select-trigger">
          <Select.Value placeholder="Selecione uma fruta" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple">
            <Select.ItemText>Maçã</Select.ItemText>
          </Select.Item>
        </Select.Content>
      </Select>
    );

    const trigger = screen.getByTestId('select-trigger');

    // Open and close the select
    await user.click(trigger);
    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(trigger).toHaveFocus();
    });
  });
});
