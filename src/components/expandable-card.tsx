"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  src: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
  [key: string]: any;
}

const DEBUG_LAYOUT = false;

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
  ...props
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const id = React.useId();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      <AnimatePresence propagate mode="wait">
        {active && mounted && (
          <>
            {createPortal(
              <motion.div
                key={id}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`card-title-${id}`}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-10 h-full w-full bg-white/50 backdrop-blur-md dark:bg-black/50"
                />
                <div
                  className={cn(
                    "fixed inset-0 z-[100] grid place-items-center before:pointer-events-none sm:mt-16",
                  )}
                >
                  <motion.div
                    layoutId={`card-${title}-${id}`}
                    ref={cardRef}
                    className={cn(
                      "relative flex h-auto max-h-[calc(100vh-5rem)] w-full max-w-[850px] flex-col overflow-auto bg-zinc-50 shadow-sm [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] dark:bg-zinc-950 dark:shadow-none sm:rounded-t-3xl",
                      classNameExpanded,
                    )}
                    {...props}
                  >
                    <motion.div
                      layoutId={`image-container-${title}-${id}`}
                      className={cn(
                        "relative flex items-center justify-center",
                        DEBUG_LAYOUT && "border-2 border-blue-500",
                      )}
                    >
                      <motion.img
                        layoutId={`image-${title}-${id}`}
                        src={src}
                        alt={title}
                        className={cn(
                          "aspect-square h-56 w-64 object-cover object-center dark:invert",
                          DEBUG_LAYOUT && "border-2 border-red-500",
                        )}
                      />
                      <div className="absolute inset-x-0 bottom-[-1px] z-50 h-[70px] bg-gradient-to-t from-zinc-50 dark:from-zinc-950" />
                    </motion.div>
                    <div className="relative h-full before:fixed before:inset-x-0 before:bottom-0 before:z-50 before:h-[70px] before:bg-gradient-to-t before:from-zinc-50 dark:before:from-zinc-950">
                      <div className="flex h-auto items-start justify-between p-8">
                        <div>
                          <motion.h3
                            layoutId={`title-${title}-${id}`}
                            className="font-semibold text-black dark:text-white md:text-left"
                          >
                            {title}
                          </motion.h3>
                          <motion.p
                            layoutId={`description-${description}-${id}`}
                            className="text-sm font-medium text-zinc-500 dark:text-zinc-400 md:text-left"
                          >
                            {description}
                          </motion.p>
                        </div>
                        <motion.button
                          aria-label="Close card"
                          layoutId={`button-${title}-${id}`}
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200/90 bg-zinc-50 text-black/70 text-neutral-700 transition-colors duration-300 hover:border-gray-300/90 hover:bg-neutral-50 hover:text-black focus:outline-none dark:border-zinc-900 dark:bg-zinc-950 dark:text-white/70 dark:hover:border-zinc-800 dark:hover:bg-neutral-950 dark:hover:text-white"
                          onClick={() => setActive(false)}
                        >
                          <motion.div
                            animate={{ rotate: active ? 45 : 0 }}
                            transition={{ duration: 0.4 }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                          </motion.div>
                        </motion.button>
                      </div>
                      <div className="relative px-6 sm:px-8">
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col items-start gap-4 overflow-auto pb-10 text-base text-zinc-500 dark:text-zinc-400"
                        >
                          {children}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>,
              document.body,
            )}
          </>
        )}
      </AnimatePresence>

      <motion.div
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className={cn(
          "flex h-full max-h-96 cursor-pointer flex-col items-center justify-between rounded-2xl border border-gray-200/70 bg-zinc-50 p-3 shadow-sm hover:shadow-lg dark:border-zinc-900 dark:bg-zinc-950 dark:shadow-none dark:hover:shadow-primary/5",
          className,
        )}
      >
        <div className="flex flex-col gap-4">
          <motion.div
            layoutId={`image-container-${title}-${id}`}
            className={cn(
              "overflow-hidden rounded-lg",
              DEBUG_LAYOUT && "border-2 border-blue-500",
            )}
          >
            <motion.img
              layoutId={`image-${title}-${id}`}
              src={src}
              alt={title}
              className={cn(
                "aspect-square h-56 w-64 object-cover object-center dark:invert",
                DEBUG_LAYOUT && "border-2 border-red-500",
              )}
            />
          </motion.div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <motion.h3
                layoutId={`title-${title}-${id}`}
                className="font-semibold text-black dark:text-white md:text-left"
              >
                {title}
              </motion.h3>

              <motion.button
                aria-label="Open card"
                layoutId={`button-${title}-${id}`}
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200/90 bg-zinc-50 text-black/70 text-neutral-700 transition-colors duration-300 hover:border-gray-300/90 hover:bg-neutral-50 hover:text-black focus:outline-none dark:border-zinc-900 dark:bg-zinc-950 dark:text-white/70 dark:hover:border-zinc-800 dark:hover:bg-neutral-950 dark:hover:text-white",
                  className,
                )}
              >
                <motion.div
                  animate={{ rotate: active ? 45 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </motion.div>
              </motion.button>
            </div>
            <motion.p
              layoutId={`description-${description}-${id}`}
              className="text-sm font-medium text-zinc-500 dark:text-zinc-400 md:text-left"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
