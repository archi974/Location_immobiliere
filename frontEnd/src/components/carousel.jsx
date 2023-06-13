import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousImg = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? images?.length - 1 : prevIndex - 1))
    };

    const goToNextImg = () => {
        setCurrentIndex(prevIndex => (prevIndex === images?.length - 1 ? 0 : prevIndex + 1));
    }

    return (
        <div className="carousel">
            {images?.length > 1 && (
                <>
                    <button className='carouselButton buttonLeft' onClick={goToPreviousImg}>
                        &lt;
                    </button>
                    <button className='carouselButton buttonRight' onClick={goToNextImg}>
                        &gt;
                    </button>
                </>
            )}
            {
                images?.map((image, i) => (
                    <img key={i} src={image} alt="intérieur d'appartement" className={`carouselImg ${currentIndex === i ? 'active' : ''}`}/>
                ))
            }

        </div>
    );
};

export default Carousel;