import React, { useState } from 'react';

const SlideShow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousImg = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    };

    const goToNextImg = () => {
        setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }

    return (
        <div className="carousel">
            {images?.length > 1 && (
                <>
                    <button className='carouselButton buttonLeft' aria-label="Afficher les images précédentes" onClick={goToPreviousImg}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                        </svg>
                    </button>
                    <button className='carouselButton buttonRight' aria-label="Afficher les images suivantes" onClick={goToNextImg}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg>
                    </button>
                </>
            )}
            {
                images?.map((image, i) => (
                    <div key={i} className={`carousel-content ${currentIndex === i ? 'active' : ''}`}>
                        <img src={image} alt="intérieur d'appartement" className={`carouselImg`} width={1200} height={223} />
                        {images?.length > 1 && (
                            <p className="carouselText">
                                {`${i + 1}/${images.length}`}
                            </p>
                        )}
                    </div>
                ))
            }

        </div>
    );
};

export default SlideShow;