"use client";

import {
  Activity,
  Bookmark,
  ChevronLeft,
  LogOut,
  Menu,
  Moon,
  Settings,
  Sun,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";

function SideDropdown() {
  const [open, setOpen] = useState(false);
  const [showModeToggle, setShowModeToggle] = useState(false);
  const { theme, setTheme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close the dropdown when the user clicks outside
    function handleOutsideClick(event: MouseEvent) {
      if (!event.target) return;
      if (ref.current && !ref.current.contains(event.target as Node)) {
        //setShowModeToggle(false);
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);

  return (
    <DropdownMenu open={open}>
      <DropdownMenuTrigger asChild>
        <Button
          onClick={() => setOpen(!open)}
          variant={"ghost"}
          size={"lg"}
          className="md:w-full !justify-start space-x-4 !px-3"
        >
          <Menu />
          <div className="hidden lg:block">More</div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        ref={ref}
        className={cn(
          "dark:bg-neutral-800 w-64 !rounded-xl !p-0 transition-opacity",
          !open && "opacity-0"
        )}
        align="end"
        alignOffset={-40}
      >
        {!showModeToggle && (
          <>
            <DropdownMenuItem className="sideDropdownMenu">
              <Settings size={20} />
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
            </DropdownMenuItem>
            <DropdownMenuItem className="sideDropdownMenu">
              <Activity size={20} />
              <DropdownMenuLabel>Your activity</DropdownMenuLabel>
            </DropdownMenuItem>
            <DropdownMenuItem className="sideDropdownMenu">
              <Bookmark size={20} />
              <DropdownMenuLabel>Saved</DropdownMenuLabel>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="sideDropdownMenu"
              onClick={() => setShowModeToggle(true)}
            >
              <Moon size={20} />
              <DropdownMenuLabel>Switch appearance</DropdownMenuLabel>
            </DropdownMenuItem>
            <DropdownMenuItem className="sideDropdownMenu">
              <LogOut size={20} />
              {/* Do this later on */}
              <DropdownMenuLabel>Log out</DropdownMenuLabel>
            </DropdownMenuItem>
          </>
        )}

        {showModeToggle && (
          <>
            <div className="flex items-center border-b border-gray-200 dark:border-neutral-700 py-3.5 px-2.5">
              <ChevronLeft size={18} onClick={() => setShowModeToggle(false)} />
              <p className="font-bold ml-1">Switch appearance</p>
              {theme === "dark" ? (
                <Moon size={20} className="ml-auto" />
              ) : (
                <Sun size={20} className="ml-auto" />
              )}
            </div>

            <Label htmlFor="dark-mode" className="sideDropdownMenu">
              Dark Mode
              <DropdownMenuItem className="ml-auto !p-0">
                <Switch
                  id="dark-mode"
                  className="ml-auto"
                  checked={theme === "dark"}
                  onCheckedChange={(checked) => {
                    setTheme(checked ? "dark" : "light");
                  }}
                />
              </DropdownMenuItem>
            </Label>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SideDropdown;
