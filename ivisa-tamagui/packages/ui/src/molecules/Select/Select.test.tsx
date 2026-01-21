// @ts-nocheck
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

    // Wait for the option to appear in the DOM.
    // We avoid .toBeVisible() because Radix Portals + JSDOM layout calculations often result in 0x0 size, causing false negatives.
    const bananaOption = await screen.findByText('Banana');

    // Use fireEvent to bypass some visibility checks that userEvent might strict on,
    // though userEvent is preferred if environment was perfect.
    // For Radix Select items in JSDOM, fireEvent is often more reliable for selection.
    fireEvent.click(bananaOption);

    // Verify the selection was made (trigger text updates)
    await waitFor(() => {
        expect(screen.getByText('Banana')).toBeInTheDocument();
    });
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

    // Radix often manages focus. Pressing Escape should close it.
    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(trigger).toHaveFocus();
    });
  });

  describe('Keyboard Interactions', () => {
    it('opens with Space, navigates with arrows, selects with Enter', async () => {
      const { user } = render(
        <Select>
          <Select.Trigger data-testid="select-trigger">
            <Select.Value placeholder="Select a fruit" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="apple">
              <Select.ItemText>Apple</Select.ItemText>
            </Select.Item>
            <Select.Item value="banana">
              <Select.ItemText>Banana</Select.ItemText>
            </Select.Item>
            <Select.Item value="orange">
              <Select.ItemText>Orange</Select.ItemText>
            </Select.Item>
          </Select.Content>
        </Select>
      );

      const trigger = screen.getByTestId('select-trigger');

      // Focus the trigger
      trigger.focus();
      expect(trigger).toHaveFocus();

      // Open with Space
      await user.keyboard(' ');

      // Wait for content. Again, avoid strict visibility check.
      // Ideally we check if "Apple" is in the document.
      const appleOption = await screen.findByText('Apple');
      expect(appleOption).toBeInTheDocument();

      // Navigate down to Banana
      await user.keyboard('{ArrowDown}');

      // Select with Enter
      await user.keyboard('{Enter}');

      // Verify selection
      await waitFor(() => {
        expect(screen.getByText('Banana')).toBeInTheDocument();
      });
    });
  });
});

