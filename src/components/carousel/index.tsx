import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image';

const items = [
    'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=fahmi-fakhrudin-nzyzAUsbV0M-unsplash.jpg&w=1920',
    'https://images.unsplash.com/photo-1630782622114-613e6e9c5dc6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=adam-bartoszewicz-IKAv1jMk8EA-unsplash.jpg&w=640'
]

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const next = useCallback(() => {
        setCurrent((current + 1) % items.length)
    }, [current, setCurrent]);

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 5000);
        return () => clearInterval(interval)
    }, [next]);

    return (
        <div>
            <Image style={{ backgroundColor: '#895D2B', width: "100%", height: '300px', objectFit: 'cover' }} width={500} height={300} src={items[current]} alt={"Coffee photos"} />
        </div>
    );
}

export default Carousel;