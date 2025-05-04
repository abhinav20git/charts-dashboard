import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Header from "../_components/Header";
import Link from "next/link";
import { FaExternalLinkAlt, FaUsers } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsLayoutTextSidebar } from "react-icons/bs";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div className="flex h-screen flex-col w-full">
      {/* Header at top */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <Sidebar className="w-46 border-r bg-gray-100 ">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-xl font-bold ml-2 mt-2 flex justify-between">Sidebar<BsLayoutTextSidebar /></SidebarGroupLabel>
              <SidebarGroupContent className="mt-12">
                <SidebarMenu className="text-lg w-34  my-3">
                  <SidebarMenuItem  className=" text-center text-lg gap-2 flex  justify-center ml-2">
                  <MdOutlineSpaceDashboard size={24}/>
                  <Link href="/dashboard">Dashboard</Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem  className=" text-center  text-lg gap-2 flex  justify-center ml-0">
                  <FaExternalLinkAlt size={21}/>
                  <Link href="/overview">Overview</Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem  className=" text-center text-lg gap-2 flex  justify-center ml-2">
                  <FaUsers size={24} />
                    <Link href="/users">User Table</Link>
                  </SidebarMenuItem>
                  <SidebarMenuItem  className=" text-center text-lg gap-2 flex  justify-center ml-2">
                  <CiEdit size={24}/>
                    <Link href="/edit-form">Edit Profile</Link>
                  </SidebarMenuItem>

                
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main content area */}
        <main className="flex-1 p-6 ">
          <h1 className="text-2xl font-semibold">Welcome to the Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 my-4">
            <div className="rounded-xl border p-6 shadow-sm bg-white">
              <h2 className="text-lg font-bold mb-2">Total Users</h2>
              <p className="text-3xl font-semibold text-primary">1,200</p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm bg-white">
              <h2 className="text-lg font-bold mb-2">Projects</h2>
              <p className="text-3xl font-semibold text-green-600">18</p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm bg-white">
              <h2 className="text-lg font-bold mb-2">Tasks Pending</h2>
              <p className="text-3xl font-semibold text-yellow-500">5</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h2 className="text-xl font-semibold mb-4">DashFlow The Saviour</h2>
            <p className="text-gray-600 mb-4">Analyze details about complex data</p>
            <Image
              src="/banner.png"
              width={800}
              height={400}
              alt="Dashboard Illustration"
              className="rounded-lg mx-auto"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
