import { useState } from 'react';

export const useImagePreloader = () => {
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

    const handleImageLoad = (id: number) => {
        setLoadedImages(prev => ({ ...prev, [id]: true }));
    };

    return {
        loadedImages,
        handleImageLoad
    };
};