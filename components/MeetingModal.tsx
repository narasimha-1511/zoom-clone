import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Butterfly_Kids } from "next/font/google";
import { Button } from "./ui/button";

interface MeetingModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title: string;
  buttonText: string;
  handleClick: () => void;
  image?: string;
  buttonIcon?: string;
  children?: React.ReactNode;
  className?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  buttonText,
  handleClick,
  image,
  buttonIcon,
  children,
  className,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="meeting" width={72} height={72} />
            </div>
          )}
          <h1 className={cn(`text-3xl font-bold leading-[42px]`, className)}>
            {title}
          </h1>
          {children}
          <Button
            className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={handleClick}
          >
            {buttonText || "Schedule Meeting"}
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                width={24}
                height={24}
                className="ml-2"
              />
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
