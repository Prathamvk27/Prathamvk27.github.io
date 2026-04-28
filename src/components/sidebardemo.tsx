import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./sidebar";
import { LayoutDashboard, UserCog, Clock, LogOut, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Dashboard } from "./dashboard";
import { cn } from "../lib/utils"; 
import { TimelineDemo } from "./timelinedemo";
import { ProjectsSection } from "./projectsection";

export function SidebarDemo() {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: <LayoutDashboard className="text-neutral-200 h-5 w-5 flex-shrink-0" />,
      page: "dashboard",
    },
    {
      label: "Projects",
      href: "#",
      icon: <UserCog className="text-neutral-200 h-5 w-5 flex-shrink-0" />,
      page: "projects",
    },
    {
      label: "Timeline",
      href: "#",
      icon: <Clock className="text-neutral-200 h-5 w-5 flex-shrink-0" />,
      page: "timeline",
    },
    {
      label: "Logout",
      href: "#",
      icon: <LogOut className="text-neutral-200 h-5 w-5 flex-shrink-0" />,
      page: "logout",
    },
  ];

  const renderPage = () => {
    switch (activePage) {
      case "timeline":
        return <TimelineDemo />;
      case "projects":
        return <ProjectsSection/>;
      case "dashboard":
        return <Dashboard/>
      default:
        return <Dashboard />;
    }
  };

  return (
    // Fixed: removed rounded-md, border, max-w-7xl, dark: classes — all bg-neutral-900
    <div className="flex flex-col md:flex-row bg-neutral-900 w-full h-screen overflow-hidden">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  onClick={() => setActivePage(link.page)}
                />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Pratham V K",
                href: "#",
                icon: (
                  <img
                    src="https://github.com/prathamvk27.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Fixed: h-screen + overflow-y-auto keeps scroll inside this panel only */}
      <div className="flex flex-1 overflow-y-auto h-screen bg-neutral-900">
        {renderPage()}
      </div>
    </div>
  );
}

export const Logo = () => (
  <a href="#" className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20">
    <div className="h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-medium text-white whitespace-pre"
    >
      Pratham VK
    </motion.span>
  </a>
);

export const LogoIcon = () => (
  <a href="#" className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20">
    <div className="h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
  </a>
);

