import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Page from './Page';
import styles from './Carousel.module.css';

export default function Carousel({ data }) {
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
        <div className={styles.container}>
            <Page title={activePage.title} description={activePage.description}/>
            <div className={styles.buttonContainer}>
                {
                    data.map((item) =>
                        <div 
                            key={item.id} 
                            className={`${styles.circle} ${item.id === activePage.id && styles.active}`} 
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
    })).isRequired
};