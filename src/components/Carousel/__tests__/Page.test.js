const { render, screen } = require("@testing-library/react");
import Page from '../Page';

describe('Carousel Page', () => {
    it('is correctly rendered to the screen', () => {
        render(<Page title='title_content' description='description_content'/>)
        expect(screen.getByText('title_content')).toBeInTheDocument();
        expect(screen.getByText('description_content')).toBeInTheDocument();
    });
});