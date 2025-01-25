"use client";
import { useEffect, useRef, useState } from "react";

import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  name: string;
  role: string;
  company?: string;
  testimonial: string;
  rating?: number;
  image?: string;
  className?: string;
}

const Testimonial = ({
  name,
  role,
  company,
  testimonial,
  rating = 5,
  image,
  className,
}: TestimonialProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(false);
  const [contentHeight, setContentHeight] = useState("auto");
  const textRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseInt(
        window.getComputedStyle(textRef.current).lineHeight,
      );
      const maxHeight = lineHeight * 4; // 5 lines
      const isOverflowing = textRef.current.scrollHeight > maxHeight;
      setShouldShowButton(isOverflowing);

      // Set initial collapsed height
      if (!isExpanded) {
        setContentHeight(`${maxHeight}px`);
      }
    }
  }, [testimonial]);

  const toggleExpand = () => {
    if (textRef.current) {
      // Set height to specific pixel value for animation
      if (!isExpanded) {
        setContentHeight(`${textRef.current.scrollHeight}px`);
      } else {
        const lineHeight = parseInt(
          window.getComputedStyle(textRef.current).lineHeight,
        );
        setContentHeight(`${lineHeight * 4}px`);
      }
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-primary/10 bg-background p-6 transition-all duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-primary/5 md:p-8",
        "items-between flex h-full flex-col",
        !shouldShowButton && "max-h-[18.95rem]", // fixed height for smallest card
        className,
      )}
    >
      <div className="absolute right-6 top-6 font-serif text-6xl text-muted-foreground/20">
        &quot;
      </div>

      <div className="flex h-full flex-col gap-4">
        {rating > 0 && (
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={16}
                className={cn(
                  index < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-muted text-muted",
                )}
              />
            ))}
          </div>
        )}

        <div className="flex-1">
          <div
            ref={contentRef}
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ height: contentHeight }}
          >
            <p
              ref={textRef}
              className="text-pretty text-base text-muted-foreground"
            >
              {testimonial}
            </p>
          </div>

          {shouldShowButton && (
            <button
              onClick={toggleExpand}
              className="mt-2 text-sm font-medium text-primary transition-opacity duration-200 hover:underline"
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>

        <div className="mt-auto flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Avatar>
              {image && (
                <AvatarImage src={image} alt={name} height={48} width={48} />
              )}
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <h3 className="font-semibold text-foreground">{name}</h3>
              <p className="text-sm text-muted-foreground">
                {role}
                {company && ` @ ${company}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Testimonial.displayName = "Testimonial";

export { Testimonial };
