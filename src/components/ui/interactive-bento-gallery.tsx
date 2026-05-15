"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight } from 'lucide-react';

interface MediaItemType {
    id: number;
    type: string;
    title: string;
    desc: string;
    url: string;
    span: string;
    tags?: string[];
}

const MediaItem = ({ item, className, onClick }: { item: MediaItemType, className?: string, onClick?: () => void }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isBuffering, setIsBuffering] = useState(true);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting);
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        let mounted = true;

        const handleVideoPlay = async () => {
            if (!videoRef.current || !isInView || !mounted) return;

            try {
                if (videoRef.current.readyState >= 3) {
                    setIsBuffering(false);
                    await videoRef.current.play();
                } else {
                    setIsBuffering(true);
                    await new Promise((resolve) => {
                        if (videoRef.current) {
                            videoRef.current.oncanplay = resolve;
                        }
                    });
                    if (mounted) {
                        setIsBuffering(false);
                        await videoRef.current.play();
                    }
                }
            } catch (error) {
                console.warn("Video playback failed:", error);
            }
        };

        if (isInView) {
            handleVideoPlay();
        } else if (videoRef.current) {
            videoRef.current.pause();
        }

        return () => {
            mounted = false;
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.removeAttribute('src');
                videoRef.current.load();
            }
        };
    }, [isInView]);

    if (item.type === 'video') {
        return (
            <div className={`${className} relative overflow-hidden`}>
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    onClick={onClick}
                    playsInline
                    muted
                    loop
                    preload="auto"
                    style={{
                        opacity: isBuffering ? 0.8 : 1,
                        transition: 'opacity 0.2s',
                        transform: 'translateZ(0)',
                        willChange: 'transform',
                    }}
                >
                    <source src={item.url} type="video/mp4" />
                </video>
                {isBuffering && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                )}
            </div>
        );
    }

    return (
        <img
            src={item.url}
            alt={item.title}
            className={`${className} object-cover cursor-pointer`}
            onClick={onClick}
            loading="lazy"
            decoding="async"
        />
    );
};

interface GalleryModalProps {
    selectedItem: MediaItemType;
    isOpen: boolean;
    onClose: () => void;
    setSelectedItem: (item: MediaItemType | null) => void;
    mediaItems: MediaItemType[];
}

const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }: GalleryModalProps) => {
    // Bloquear el scroll de la página de fondo cuando el modal se abre
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 w-full h-[100dvh] bg-slate-50 dark:bg-[#0B0F19] z-[99999] flex flex-col overflow-hidden overscroll-none"
            >
                {/* Navbar/Header del Modal de visualización */}
                <div className="w-full flex items-center justify-between p-4 md:px-8 md:py-5 border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/20 backdrop-blur-xl z-20 shadow-sm flex-shrink-0">
                    <div className="flex flex-col overflow-hidden">
                        <h2 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight truncate">
                            {selectedItem.title}
                        </h2>
                        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-1 max-w-2xl truncate">
                            {selectedItem.desc}
                        </p>
                    </div>
                    
                    <button
                        onClick={onClose}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-red-500 dark:hover:bg-red-500 flex items-center justify-center transition-all duration-300 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white group flex-shrink-0 ml-4 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:border-red-500"
                        title="Cerrar vista previa"
                    >
                        <X className='w-5 h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-90 group-hover:text-white' />
                    </button>
                </div>

                {/* Visor de Imágenes Principal */}
                <div className="flex-1 relative w-full h-full flex items-center justify-center p-4 md:p-12 overflow-hidden bg-slate-100 dark:bg-[#06080D]">
                    <motion.div
                        key={selectedItem.id}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-full max-w-[1600px] h-full flex items-center justify-center"
                        onClick={onClose} // Cerrar si se hace click fuera de la imagen
                    >
                        {/* Contenedor de la imagen en sí */}
                        <div 
                            className="relative w-full h-full bg-slate-200/50 dark:bg-white/5 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-slate-300/50 dark:border-white/10 shadow-2xl" 
                            onClick={(e) => e.stopPropagation()} // Prevenir cierre si se hace click en la imagen
                        >
                            <MediaItem item={selectedItem} className="w-full h-full object-contain p-2 md:p-6" />
                        </div>
                    </motion.div>
                    
                    {/* Botón Anterior */}
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = mediaItems.findIndex(i => i.id === selectedItem.id);
                            const prevIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
                            setSelectedItem(mediaItems[prevIndex]);
                        }}
                        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white dark:bg-[#131B2F] text-slate-900 dark:text-white flex items-center justify-center transition-all hover:scale-110 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white border border-slate-200 dark:border-white/10 shadow-2xl z-30 group"
                        title="Proyecto anterior"
                    >
                        <span className="text-xl md:text-2xl font-black transition-transform group-hover:-translate-x-1">←</span>
                    </button>
                    
                    {/* Botón Siguiente */}
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = mediaItems.findIndex(i => i.id === selectedItem.id);
                            const nextIndex = (currentIndex + 1) % mediaItems.length;
                            setSelectedItem(mediaItems[nextIndex]);
                        }}
                        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white dark:bg-[#131B2F] text-slate-900 dark:text-white flex items-center justify-center transition-all hover:scale-110 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white border border-slate-200 dark:border-white/10 shadow-2xl z-30 group"
                        title="Siguiente proyecto"
                    >
                        <span className="text-xl md:text-2xl font-black transition-transform group-hover:translate-x-1">→</span>
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

interface InteractiveBentoGalleryProps {
    mediaItems: MediaItemType[]
    title: string
    description: string
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({ mediaItems, title, description }) => {
    const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);
    const [items, setItems] = useState(mediaItems);
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 max-w-[1400px]">
            <div className="mb-16 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-xs tracking-[0.2em] uppercase mb-6 border border-blue-100 dark:border-blue-800/50"
                >
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    Mi Portafolio
                </motion.div>
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {description}
                </motion.p>
            </div>
            <AnimatePresence mode="wait">
                {selectedItem ? (
                    <GalleryModal
                        selectedItem={selectedItem}
                        isOpen={true}
                        onClose={() => setSelectedItem(null)}
                        setSelectedItem={setSelectedItem}
                        mediaItems={items}
                    />
                ) : (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[280px] sm:auto-rows-[120px] md:auto-rows-[150px]"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layoutId={`media-${item.id}`}
                                className={`relative overflow-hidden rounded-[2rem] cursor-pointer shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-slate-200/80 dark:border-white/10 flex flex-col group ${item.span} bg-slate-900 transition-all duration-500 hover:shadow-blue-500/20 dark:hover:border-blue-500/50`}
                                onClick={() => !isDragging && setSelectedItem(item)}
                                variants={{
                                    hidden: { y: 50, scale: 0.9, opacity: 0 },
                                    visible: {
                                        y: 0,
                                        scale: 1,
                                        opacity: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 25,
                                            delay: index * 0.05
                                        }
                                    }
                                }}
                                drag
                                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                dragElastic={1}
                                onDragStart={() => setIsDragging(true)}
                                onDragEnd={(e, info) => {
                                    setIsDragging(false);
                                    const moveDistance = info.offset.x + info.offset.y;
                                    if (Math.abs(moveDistance) > 50) {
                                        const newItems = [...items];
                                        const draggedItem = newItems[index];
                                        const targetIndex = moveDistance > 0 ?
                                            Math.min(index + 1, items.length - 1) :
                                            Math.max(index - 1, 0);
                                        newItems.splice(index, 1);
                                        newItems.splice(targetIndex, 0, draggedItem);
                                        setItems(newItems);
                                    }
                                }}
                            >
                                {/* Background Image Full Cover */}
                                <div className="absolute inset-0 w-full h-full">
                                    <MediaItem
                                        item={item}
                                        className="w-full h-full object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                        onClick={() => !isDragging && setSelectedItem(item)}
                                    />
                                </div>
                                
                                {/* Premium Cinematic Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 opacity-100 md:opacity-80 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                                {/* Glassmorphism Hover Icon */}
                                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 md:bg-white/10 backdrop-blur-md flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 md:-translate-y-4 group-hover:translate-y-0 border border-white/30 md:border-white/20 z-20 shadow-xl">
                                    <ArrowUpRight className="text-white w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
                                </div>

                                {/* Content Layer */}
                                <div className="relative z-10 flex flex-col justify-end h-full p-5 sm:p-6 md:p-8">
                                    <div className="transform transition-transform duration-500 translate-y-0 md:translate-y-8 group-hover:translate-y-0">
                                        <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-2 md:mb-3 tracking-tighter group-hover:text-blue-400 transition-colors duration-300 drop-shadow-md">
                                            {item.title}
                                        </h3>
                                        
                                        <div className="overflow-hidden hidden sm:block">
                                            <p className="text-slate-200 md:text-slate-300 text-sm md:text-base leading-relaxed opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 md:delay-100 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 line-clamp-2 mb-4 md:mb-6">
                                                {item.desc}
                                            </p>
                                        </div>
                                        
                                        {item.tags && (
                                            <div className="flex flex-wrap gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 md:delay-200 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 mt-2 sm:mt-0">
                                                {item.tags.map((tag, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-white/20 md:bg-white/10 backdrop-blur-md text-white border border-white/30 md:border-white/20 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.1em] md:tracking-[0.15em] uppercase shadow-lg">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default InteractiveBentoGallery
