import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Page from './Page';
import styles from './Carousel.module.css';

/**
 * This Carousel component can be used to show several pages, each containing a title and
 * description. The data for those pages can be passed in as props which can have the following
 * structure.
 * 
 * Example of the 'data' prop:
 * [
 *      {
 *          id: 1,
*           title: 'Page One Title',
            description: 'Page One Description',
 *      }
 * ]
 * 
 * Note: The component will not work correct if its empty, or has an invalid structure. The id
 * property of each page object should start from 1, and increment by 1 on each page.
 * 
 * An optional prop you can pass is 'className' for any styling to apply on the component.
 */
export default function Carousel({ className, data }) {

    // Setting the first page as the initial active page.
    const [activePage, setActivePage] = useState(data[0]);

    function onSetActivePage(index) {
        const page = data.find((value) => {
            if (value.id === index) {
                return true;
            }

            return false;
        });

        setActivePage(page);
    }

    return (
        <div className={`${styles.container} ${className}`}>
            <Page title={activePage.title} description={activePage.description}/>
            <div className={styles.buttonContainer}>
                {
                    data.map((item) =>
                        <div 
                            key={item.id} 
                            className={`${styles.circle} ${(item.id === activePage.id) ? styles.active : ''}`} 
                            onClick={() => onSetActivePage(item.id)}
                            onKeyDown={() => onSetActivePage(item.id)}
                            role='button'
                            aria-label='Change page'
                            tabIndex={0}
                        />
                    )
                }
            </div>
        </div>
    )
}

Carousel.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired,
    className: PropTypes.string
};

Carousel.defaultProps = {
    className: ''
};