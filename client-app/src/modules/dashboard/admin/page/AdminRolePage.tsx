"use client"

import { useState } from "react"
import { RolesHeader } from "../components/RolesHeader"
import { RolesTable } from "../components/RolesTable"
import { RolesSummary } from "../components/RolesSummary"

export default function AdminRolePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRole, setSelectedRole] = useState<string>("all")

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleRoleFilter = (role: string) => {
    setSelectedRole(role)
  }

  return (
    <section className="container mx-auto space-y-6 py-4 animate-fade-in">
      <RolesHeader />
      <RolesSummary />
      <RolesTable
        searchQuery={searchQuery}
        selectedRole={selectedRole}
        onSearch={handleSearch}
        onRoleFilter={handleRoleFilter}
      />
    </section>
  )
}
