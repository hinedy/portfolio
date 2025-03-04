"use client";

import React from "react";

import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string | React.ReactNode;
  bullets: readonly string[];
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  bullets,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const blurFadeVariants = {
    initial: {
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description || bullets) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <motion.div {...blurFadeVariants} className="w-full">
      <Link
        href={href || "#"}
        className="block cursor-pointer"
        onClick={handleClick}
      >
        <Card className="flex">
          <div className="flex-none">
            <Avatar className="bg-muted-background m-auto size-12 border dark:bg-foreground">
              <AvatarImage
                src={logoUrl}
                alt={altText}
                className="object-contain"
              />
              <AvatarFallback>{altText[0]}</AvatarFallback>
            </Avatar>
          </div>
          <div className="group ml-4 flex-grow flex-col items-center">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center text-xs font-semibold leading-none sm:text-sm">
                  {title}
                  {badges && (
                    <span className="ml-2 inline-flex gap-x-1">
                      {badges.map((badge, index) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs"
                          key={index}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  )}
                  <ChevronRightIcon
                    className={cn(
                      "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                      isExpanded ? "rotate-90" : "rotate-0",
                    )}
                  />
                </h3>
                <div className="text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
                  {period}
                </div>
              </div>
              {subtitle && (
                <div className="mt-1 font-sans text-xs">{subtitle}</div>
              )}
            </CardHeader>
            {(description || bullets) && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  filter: "blur(10px)",
                  scale: 0.95,
                }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0,
                  filter: isExpanded ? "blur(0px)" : "blur(10px)",
                  scale: isExpanded ? 1 : 0.95,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-2 text-pretty px-4 text-xs text-foreground sm:text-sm"
              >
                {description && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: isExpanded ? 1 : 0,
                      y: isExpanded ? 0 : 10,
                    }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {description}
                  </motion.div>
                )}
                {bullets && (
                  <motion.ul
                    initial="hidden"
                    animate={isExpanded ? "visible" : "hidden"}
                    variants={{
                      hidden: { opacity: 0, height: 0 },
                      visible: {
                        opacity: 1,
                        height: "auto",
                        transition: {
                          delayChildren: 0.2,
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    className="list-outside list-disc space-y-2"
                  >
                    {bullets.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{
                          opacity: 0,
                          height: 0,
                          filter: "blur(10px)",
                        }}
                        animate={{
                          opacity: isExpanded ? 1 : 0,
                          height: isExpanded ? "auto" : 0,
                          filter: isExpanded ? "blur(0px)" : "blur(10px)",
                        }}
                        transition={{
                          height: { duration: 0.4 },
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                        className="text-foreground/80"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>
            )}
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};
