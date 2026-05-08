"use client"

import { HoverSlider, HoverSliderImage, HoverSliderImageWrap, TextStaggerHover } from "@/components/ui/animated-slideshow"

const SLIDES = [
  {
    id: "slide-1",
    title: "Full Stack Developer",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "slide-2",
    title: "Data Analyst",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "slide-3",
    title: "React Developer",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "slide-4",
    title: "Backend Developer",
    imageUrl: "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "slide-5",
    title: ".NET Developer",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
  },
]

export function HeroSlideshow() {
  return (
    <HoverSlider className="w-full py-12 md:py-20 px-3 sm:px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Slideshow Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-blue-600">
            / Mi Expertise
          </h3>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            {/* Textos interactivos */}
            <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-6 w-full lg:w-1/2">
              {SLIDES.map((slide, index) => (
                <TextStaggerHover
                  key={slide.title}
                  index={index}
                  className="cursor-pointer text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight"
                  text={slide.title}
                />
              ))}
            </div>

            {/* Imágenes con hover */}
            <div className="w-full lg:w-1/2">
              <HoverSliderImageWrap className="w-full h-64 sm:h-80 md:h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl">
                {SLIDES.map((slide, index) => (
                  <div key={slide.id}>
                    <HoverSliderImage
                      index={index}
                      imageUrl={slide.imageUrl}
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                ))}
              </HoverSliderImageWrap>
            </div>
          </div>
        </div>
      </div>
    </HoverSlider>
  )
}
