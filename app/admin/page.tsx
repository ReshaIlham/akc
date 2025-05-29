"use client"

import { useState, useEffect } from "react"
import { Users, FileText, TrendingUp, Activity, Eye, MessageSquare, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getCurrentUser } from "@/lib/auth"

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    setUser(getCurrentUser())
  }, [])

  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+12%",
      icon: <Users className="h-6 w-6" />,
      color: "blue",
    },
    {
      title: "Active Projects",
      value: "56",
      change: "+8%",
      icon: <FileText className="h-6 w-6" />,
      color: "green",
    },
    {
      title: "Revenue",
      value: "$45,678",
      change: "+23%",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "red",
    },
    {
      title: "Page Views",
      value: "89,432",
      change: "+15%",
      icon: <Eye className="h-6 w-6" />,
      color: "blue",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      action: "New user registration",
      user: "john.doe@example.com",
      time: "2 minutes ago",
      icon: <Users className="h-4 w-4" />,
    },
    {
      id: 2,
      action: "Project completed",
      user: "Enterprise PMO Transformation",
      time: "1 hour ago",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      id: 3,
      action: "New contact form submission",
      user: "sarah.johnson@techcorp.com",
      time: "3 hours ago",
      icon: <MessageSquare className="h-4 w-4" />,
    },
    {
      id: 4,
      action: "Training session scheduled",
      user: "Agile Fundamentals Workshop",
      time: "5 hours ago",
      icon: <Calendar className="h-4 w-4" />,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h1 className="text-3xl font-bold text-agile-dark dark:text-white mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-agile-gray dark:text-gray-300">Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-agile-gray dark:text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold text-agile-dark dark:text-white">{stat.value}</p>
                  <p className={`text-sm text-agile-${stat.color} dark:text-agile-${stat.color}-dark`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div
                  className={`p-3 rounded-full bg-agile-${stat.color}/10 text-agile-${stat.color} dark:bg-agile-${stat.color}-dark/10 dark:text-agile-${stat.color}-dark`}
                >
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center text-agile-dark dark:text-white">
              <Activity className="mr-2 h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700"
                >
                  <div className="p-2 rounded-full bg-agile-blue/10 text-agile-blue dark:bg-agile-blue-dark/10 dark:text-agile-blue-dark">
                    {activity.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-agile-dark dark:text-white">{activity.action}</p>
                    <p className="text-sm text-agile-gray dark:text-gray-400">{activity.user}</p>
                    <p className="text-xs text-agile-gray dark:text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-agile-dark dark:text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="blue" className="h-20 flex flex-col items-center justify-center">
                <Users className="h-6 w-6 mb-2" />
                <span className="text-sm">Manage Users</span>
              </Button>
              <Button variant="green" className="h-20 flex flex-col items-center justify-center">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-sm">View Projects</span>
              </Button>
              <Button variant="red" className="h-20 flex flex-col items-center justify-center">
                <TrendingUp className="h-6 w-6 mb-2" />
                <span className="text-sm">Analytics</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                <MessageSquare className="h-6 w-6 mb-2" />
                <span className="text-sm">Messages</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-agile-dark dark:text-white">System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-agile-green/10 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-agile-green"></div>
              </div>
              <h3 className="font-medium text-agile-dark dark:text-white">Server Status</h3>
              <p className="text-sm text-agile-green dark:text-agile-green-dark">Operational</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-agile-blue/10 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-agile-blue"></div>
              </div>
              <h3 className="font-medium text-agile-dark dark:text-white">Database</h3>
              <p className="text-sm text-agile-blue dark:text-agile-blue-dark">Connected</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-agile-green/10 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-agile-green"></div>
              </div>
              <h3 className="font-medium text-agile-dark dark:text-white">API Status</h3>
              <p className="text-sm text-agile-green dark:text-agile-green-dark">Active</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
