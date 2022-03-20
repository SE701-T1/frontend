import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DialoguesList from '../DialoguesList';

const mockMessage = [
  {
    sender: 3333,
    text: 'random message',
    contentType: 'text',
  },
  {
    sender: 5678,
    text: 'https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512',
    contentType: 'image',
  },
];

// used for testing automatic scrolling
const scrollIntoViewMock = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

describe('DialoguesList', () => {
  it('display message sent to me', () => {
    render(
      <DialoguesList
        messages={mockMessage}
        currentUser={5678}
        senderAvatar="https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512"
      />,
    );
    expect(screen.getByText('random message')).toBeInTheDocument();
  });

  it('display image message sent by me', () => {
    render(
      <DialoguesList
        messages={mockMessage}
        currentUser={5678}
        senderAvatar="https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512"
      />,
    );
    const imageMessage = screen.getByAltText('imageMessage');
    expect(imageMessage).toHaveAttribute(
      'src',
      'https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512',
    );
  });

  it('check that automatic scrolling is done upon new message', () => {
    render(
      <DialoguesList
        messages={mockMessage}
        currentUser={5678}
        senderAvatar="https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512"
      />,
    );

    expect(scrollIntoViewMock).toBeCalled();
  });

  // snapshot test
  it('produces correct snapshot of multiple messages', () => {
    const tree = renderer
      .create(
        <DialoguesList
          messages={mockMessage}
          currentUser={5678}
          senderAvatar="https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
