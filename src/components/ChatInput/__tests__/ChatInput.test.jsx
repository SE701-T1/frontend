import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ChatInput from '../ChatInput';

describe('ChatInput', () => {
  it('is correctly rendered to the screen', () => {
    render(<ChatInput onSend={() => null} />);

    expect(screen.getByPlaceholderText('Aa')).toBeInTheDocument();
    expect(screen.getByTestId('EmojiEmotionsIcon')).toBeInTheDocument();
  });

  it('Emoji selector correctly opens', () => {
    render(<ChatInput onSend={() => null} />);

    fireEvent.click(screen.getByTestId('EmojiButton'));

    expect(screen.getByTestId('EmojiSelector')).toBeInTheDocument();
  });

  it('Emoji selector correctly opens', () => {
    render(<ChatInput onSend={() => null} />);

    fireEvent.click(screen.getByTestId('EmojiButton'));

    expect(screen.getByTestId('EmojiSelector')).toBeInTheDocument();
  });

  it('Send button clears text', () => {
    render(<ChatInput onSend={() => null} />);

    fireEvent.change(screen.getByPlaceholderText('Aa'), {
      target: {
        value: 'test',
      },
    });
    fireEvent.click(screen.getByTestId('SendButton'));

    expect(screen.getByPlaceholderText('Aa')).toHaveValue('');
  });

  it('produces the correct initial snapshot', () => {
    const tree = renderer.create(<ChatInput onSend={() => null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
