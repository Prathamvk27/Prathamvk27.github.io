import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./sidebar";
import { LayoutDashboard, Clock, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Dashboard } from "./dashboard";
import { TimelineDemo } from "./timelinedemo";
import { ProjectsSection } from "./projectsection";

export function SidebarDemo() {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  const links = [
    { label: "Dashboard", href: "#", icon: <LayoutDashboard className="h-4 w-4 flex-shrink-0" />, page: "dashboard" },
    { label: "Projects", href: "#", icon: <Briefcase className="h-4 w-4 flex-shrink-0" />, page: "projects" },
    { label: "Timeline", href: "#", icon: <Clock className="h-4 w-4 flex-shrink-0" />, page: "timeline" },
  ];

  const renderPage = () => {
    switch (activePage) {
      case "timeline": return <TimelineDemo />;
      case "projects": return <ProjectsSection />;
      case "dashboard": return <Dashboard />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-ink-black w-full h-screen overflow-hidden">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-4">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-6 flex flex-col gap-0.5">
              {links.map((link) => (
                <SidebarLink
                  key={link.page}
                  link={link}
                  active={activePage === link.page}
                  onClick={() => setActivePage(link.page)}
                />
              ))}
            </div>
          </div>
          <div className="border-t border-white/5 pt-3">
            <SidebarLink link={{
              label: "Pratham V K",
              href: "#",
              icon: <img src="https://github.com/prathamvk27.png" className="h-6 w-6 flex-shrink-0 rounded-full" alt="Avatar" />,
            }} />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1 overflow-y-auto h-screen bg-ink-black">
        {renderPage()}
      </div>
    </div>
  );
}

export const Logo = () => (
  <a href="#" className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20 px-2">
    <div className="h-6 w-6 bg-school-bus-yellow rounded-md flex items-center justify-center flex-shrink-0">
      <span className="text-ink-black text-xs font-bold">P</span>
    </div>
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium text-white whitespace-pre text-sm">
      Pratham VK
    </motion.span>
  </a>
);

export const LogoIcon = () => (
  <a href="#" className="font-normal flex items-center text-sm py-1 relative z-20 px-1">
    <div className="h-6 w-6 bg-school-bus-yellow rounded-md flex items-center justify-center flex-shrink-0">
      <span className="text-ink-black text-xs font-bold">P</span>
    </div>
  </a>
);
