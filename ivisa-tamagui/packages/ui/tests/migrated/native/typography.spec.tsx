import renderer from 'react-test-renderer';
import { AppProviders } from '../../../src/providers/AppProviders';
import {
  Heading,
  TypographyText,
  MutedText,
  LeadText,
  Blockquote,
} from '../../../src/atoms/Typography';

describe('Typography (Native)', () => {
  it('renders a Heading with default level', () => {
    const tree = renderer
      .create(
        <AppProviders>
          <Heading>Heading</Heading>
        </AppProviders>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a Heading with level 1', () => {
    const tree = renderer
      .create(
        <AppProviders>
          <Heading level={1}>Heading</Heading>
        </AppProviders>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders TypographyText', () => {
    const tree = renderer
      .create(
        <AppProviders>
          <TypographyText>Some text</TypographyText>
        </AppProviders>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders MutedText', () => {
    const tree = renderer
      .create(
        <AppProviders>
          <MutedText>Muted text</MutedText>
        </AppProviders>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders LeadText', () => {
    const tree = renderer
      .create(
        <AppProviders>
          <LeadText>Lead text</LeadText>
        </AppProviders>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Blockquote', () => {
    const tree = renderer
      .create(
        <AppProviders>
          <Blockquote>Blockquote</Blockquote>
        </AppProviders>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
