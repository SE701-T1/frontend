import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ChatListItem from '../ChatListItem';

describe('ChatListItem', () => {
  const activeUserData = {
    id: 1,
    name: 'name_1',
    lastMessage: 'last_message_1',
    lastMessageTime: new Date(),
    active: true,
  };

  it('is correctly rendered to the screen', () => {
    render(
      <ChatListItem
        name={activeUserData.name}
        active={activeUserData.active}
        lastMessageText={activeUserData.lastMessage}
        lastMessageTime={activeUserData.lastMessageTime}
        onClick={() => null}
      />,
    );

    expect(screen.getByText('name_1')).toBeInTheDocument();
    expect(screen.getByText('last_message_1')).toBeInTheDocument();
  });

  it('Click chat list item changes it to selected', () => {
    render(
      <ChatListItem
        testId="under_test"
        name={activeUserData.name}
        active={activeUserData.active}
        lastMessageText={activeUserData.lastMessage}
        lastMessageTime={activeUserData.lastMessageTime}
        onClick={() => null}
      />,
    );

    fireEvent.click(screen.getByTestId('ButtonBase'));

    expect(screen.getByTestId('ButtonBase')).toHaveStyle({ background: 'rgb(255, 255, 255)' });
  });

  it('produces the correct initial snapshot', () => {
    const tree = renderer
      .create(
        <ChatListItem
          testId="under_test"
          name={activeUserData.name}
          active={activeUserData.active}
          lastMessageText={activeUserData.lastMessage}
          lastMessageTime={activeUserData.lastMessageTime}
          onClick={() => null}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
