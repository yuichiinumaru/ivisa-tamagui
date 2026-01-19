
import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import { Alert } from './Alert';
import { Star } from '@tamagui/lucide-icons';

// Mock the react-native-svg component to prevent errors in the JSDOM environment
jest.mock('react-native-svg', () => {
  const Svg = (props) => <svg {...props} />;
  const Path = (props) => <path {...props} />;
  return {
    Svg: Svg,
    Path: Path,
  };
});

describe('Alert', () => {
  it('renders title and description using the compound component API', () => {
    render(
      <Alert>
        <Alert.Title>Atenção!</Alert.Title>
        <Alert.Description>Isso é uma mensagem de alerta.</Alert.Description>
      </Alert>
    );
    expect(screen.getByText('Atenção!')).toBeInTheDocument();
    expect(screen.getByText('Isso é uma mensagem de alerta.')).toBeInTheDocument();
  });

  it('applies the correct variant styles', () => {
    const { rerender } = render(
      <Alert variant="destructive" data-testid="alert-container">
        <Alert.Title>Erro</Alert.Title>
      </Alert>
    );
    // While we can't easily test the exact color, we can ensure the component renders with the variant.
    // In a real-world scenario, you might use storyshots or visual regression testing for this.
    expect(screen.getByTestId('alert-container')).toBeInTheDocument();

    rerender(
      <Alert variant="success" data-testid="alert-container">
        <Alert.Title>Sucesso</Alert.Title>
      </Alert>
    );
    expect(screen.getByTestId('alert-container')).toBeInTheDocument();

    rerender(
      <Alert variant="warning" data-testid="alert-container">
        <Alert.Title>Aviso</Alert.Title>
      </Alert>
    );
    expect(screen.getByTestId('alert-container')).toBeInTheDocument();
  });

  it('renders a dismissible button when isDismissible is true', () => {
    render(
      <Alert isDismissible>
        <Alert.Title>Dismissible</Alert.Title>
      </Alert>
    );
    expect(screen.getByLabelText('Fechar')).toBeInTheDocument();
  });

  it('does not render a dismissible button when isDismissible is false or omitted', () => {
    render(
      <Alert>
        <Alert.Title>Not Dismissible</Alert.Title>
      </Alert>
    );
    expect(screen.queryByLabelText('Fechar')).not.toBeInTheDocument();
  });

  it('calls onDismiss when the dismiss button is clicked', () => {
    const handleDismiss = jest.fn();
    render(
      <Alert isDismissible onDismiss={handleDismiss}>
        <Alert.Title>Dismissible</Alert.Title>
      </Alert>
    );

    const closeButton = screen.getByLabelText('Fechar');
    fireEvent.click(closeButton);

    expect(handleDismiss).toHaveBeenCalledTimes(1);
  });

  it('renders an icon when provided', () => {
    render(
      <Alert icon={<Star data-testid="test-icon" />}>
        <Alert.Title>With Icon</Alert.Title>
      </Alert>
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });
});

