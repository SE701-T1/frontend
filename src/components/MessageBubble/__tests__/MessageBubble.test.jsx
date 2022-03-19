import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import MessageBubble from '../MessageBubble';

describe('MessageSentToMe', () => {
  test('should display message Content', () => {
    render(
      <MessageBubble
        text="Hi"
        senderAvatar="https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512"
        sender="id5678"
        currentUser="id1234"
        contentType="text"
      />,
    );
    expect(screen.getByText('Hi')).toBeInTheDocument();
  });
});

describe('MessageSentFromMe', () => {
  test('should display message Content', () => {
    render(
      <MessageBubble
        text="I love your profile pic!"
        sender="id1234"
        senderAvatar=""
        currentUser="id1234"
        contentType="text"
      />,
    );
  });
});

describe('SendImageAsMessage', () => {
  test('should display messageContent', () => {
    render(
      <MessageBubble
        text="https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512"
        senderAvatar="https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512"
        sender="id5678"
        currentUser="id1234"
        contentType="image"
      />,
    );
    const imageMessage = screen.getByAltText('imageMessage');
    expect(imageMessage).toHaveAttribute(
      'src',
      'https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512',
    );
  });
});

// Snapshot Testing
it('renders correctly', () => {
  const tree = renderer
    .create(
      <MessageBubble
        text="https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512"
        senderAvatar="https://play-lh.googleusercontent.com/zepWGavYYErAIBXFZb6OT14I6b-m4TyaG3yjqZy6Hnsmi64vL3upQ3KUsV6Wnsm-e9M=w512"
        sender="id5678"
        currentUser="id1234"
        contentType="image"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
