"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { openAI } from "@/utils/open-ai";
import { Loader } from "lucide-react";

interface DrawerProps {
  description: string | null;
}

const DrawerAI = ({ description }: DrawerProps) => {
  const [open, setOpen] = useState(false);
  const [genieSuggestion, setGenieSuggestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenieSuggestion = async () => {
    setIsLoading(true);
    try {
      const response = (await openAI(description!)) as string;
      setGenieSuggestion(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Genie Suggestions", genieSuggestion);
  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger
          className="flex float-right border border-1 py-2 px-4 rounded hover:opacity-80"
          onClick={handleGenieSuggestion}
        >
          Ask Your Genie 🧞
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              🧙‍♂️ Oyyy! Genie here! am helping you with your new wish
              storytelling or resume writing 🪄✨Make your wish✨?
            </DrawerTitle>
            {isLoading ? (
              <Loader className="flex mx-auto justify-center animate-spin" />
            ) : (
              <DrawerDescription className="whitespace-pre-wrap">
                {genieSuggestion.length > 0 && <p>{genieSuggestion}</p>}
              </DrawerDescription>
            )}
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerAI;
