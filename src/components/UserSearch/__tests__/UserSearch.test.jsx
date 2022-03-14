import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import UserSearch from '../UserSearch';

describe('User search test', () => {
    test('should display the placeholder text', () => {
        render(
            <UserSearch/>
        );

        expect(screen.getByPlaceholderText('Type a name')).toBeInTheDocument();

    });
    test('should display the search icon', () => {
        render(
            <UserSearch/>
        );

        expect(screen.getByTestId('searchIcon'));

    });

    
});