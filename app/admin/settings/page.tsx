"use client"

import type React from "react"

import { useState } from "react"
import { Save, Bell, Shield, Globe, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "Agilenesia",
    siteDescription: "Project Management Services",
    contactEmail: "info@agilenesia.com",
    contactPhone: "+62 812 3456 7890",
    address: "123 Project Street, Suite 100, Jakarta, Indonesia 12345",
    notifications: true,
    maintenance: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSave = () => {
    // Save settings logic here
    console.log("Settings saved:", settings)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-agile-dark dark:text-white">Settings</h1>
        <Button variant="blue" onClick={handleSave}>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center text-agile-dark dark:text-white">
              <Globe className="mr-2 h-5 w-5" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-agile-dark dark:text-white">Site Name</label>
              <Input
                name="siteName"
                value={settings.siteName}
                onChange={handleChange}
                className="border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-agile-dark dark:text-white">Site Description</label>
              <Textarea
                name="siteDescription"
                value={settings.siteDescription}
                onChange={handleChange}
                rows={3}
                className="border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center text-agile-dark dark:text-white">
              <Bell className="mr-2 h-5 w-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-agile-dark dark:text-white">Contact Email</label>
              <Input
                name="contactEmail"
                type="email"
                value={settings.contactEmail}
                onChange={handleChange}
                className="border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-agile-dark dark:text-white">Contact Phone</label>
              <Input
                name="contactPhone"
                value={settings.contactPhone}
                onChange={handleChange}
                className="border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-agile-dark dark:text-white">Address</label>
              <Textarea
                name="address"
                value={settings.address}
                onChange={handleChange}
                rows={3}
                className="border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center text-agile-dark dark:text-white">
              <Shield className="mr-2 h-5 w-5" />
              System Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-agile-dark dark:text-white">Email Notifications</label>
                <p className="text-xs text-agile-gray dark:text-gray-400">
                  Receive email notifications for new messages
                </p>
              </div>
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
                className="rounded border-agile-gray/30 text-agile-blue focus:ring-agile-blue/20"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-agile-dark dark:text-white">Maintenance Mode</label>
                <p className="text-xs text-agile-gray dark:text-gray-400">Put the site in maintenance mode</p>
              </div>
              <input
                type="checkbox"
                name="maintenance"
                checked={settings.maintenance}
                onChange={handleChange}
                className="rounded border-agile-gray/30 text-agile-red focus:ring-agile-red/20"
              />
            </div>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center text-agile-dark dark:text-white">
              <Palette className="mr-2 h-5 w-5" />
              Appearance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-agile-dark dark:text-white">Theme</label>
              <select className="w-full px-3 py-2 border border-agile-gray/30 rounded-md focus:outline-none focus:ring-agile-blue focus:border-agile-blue dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                <option>Light</option>
                <option>Dark</option>
                <option>Auto</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-agile-dark dark:text-white">Primary Color</label>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full bg-agile-blue border-2 border-white shadow-sm cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-agile-red border-2 border-gray-300 shadow-sm cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-agile-green border-2 border-gray-300 shadow-sm cursor-pointer"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
