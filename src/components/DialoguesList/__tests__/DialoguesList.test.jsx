import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DialoguesList from '../DialoguesList';

const mockMessage = [
  {
    sender: 'id3333',
    text: 'random message',
    contentType: 'text',
  },
  {
    sender: 'id5678',
    text: 'https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512',
    contentType: 'image',
  },
];

// used for testing automatic scrolling
const scrollIntoViewMock = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

describe('DialoguesList', () => {
  test('display message sent to me', () => {
    render(
      <DialoguesList
        messages={mockMessage}
        currentUser="id5678"
        senderAvatar="https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512"
      />,
    );
    const avatar = screen.getAllByAltText('avatar');
    expect(avatar[0]).toHaveAttribute(
      'src',
      'https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512',
    );
    expect(screen.getByText('random message')).toBeInTheDocument();
  });

  test('display image message sent by me', () => {
    render(
      <DialoguesList
        messages={mockMessage}
        currentUser="id5678"
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
        currentUser="id5678"
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
          currentUser="id5678"
          senderAvatar="https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
