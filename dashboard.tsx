'use client'

import React, { useState } from 'react'
import { Bell, LogOut, Mail, PieChart, User, X } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

// Mock data - replace with actual data fetching logic
const mockData = {
  userName: "John Doe",
  amountStaked: 1000,
  amountRewarded: 50,
  rewardPercentage: 4.71,
  currentEpochProgress: 65,
  apy: 5.5,
  validatorUptime: 99.9,
  commissionRate: 2,
  solanaPriceIncrease: 3.42,
}

const sampleAlerts = [
  { id: 1, type: 'info', message: 'New staking opportunity available' },
  { id: 2, type: 'success', message: 'Reward of 2.5 SOL credited to your account' },
  { id: 3, type: 'warning', message: 'Validator performance dropped below 95%' },
]

export default function Component() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [autoUpdate, setAutoUpdate] = useState(true)
  const [showAlerts, setShowAlerts] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)

  const handleTabChange = (value: string) => {
    if (value === 'alerts') {
      setShowAlerts(true)
    } else if (value === 'contact') {
      setShowContactForm(true)
    } else {
      setActiveTab(value)
    }
  }

  const handleCloseAlerts = () => {
    setShowAlerts(false)
  }

  const handleCloseContactForm = () => {
    setShowContactForm(false)
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseAlerts()
      handleCloseContactForm()
    }
  }

  const handleDisconnect = () => {
    // Implement wallet disconnection logic
    console.log("Disconnecting wallet...")
  }

  const handleStakeUnstake = () => {
    // Implement staking/unstaking logic
    console.log("Initiating stake/unstake process...")
  }

  const handleSubmitContactForm = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement contact form submission logic
    console.log("Submitting contact form...")
    setShowContactForm(false)
  }

  const cardStyle = "bg-[#0E121D] bg-opacity-50 border-none backdrop-blur-sm rounded-2xl shadow-[0_0_10px_1px_rgba(185,234,108,0.1)]"
  const menuItemStyle = "w-full flex items-center px-4 py-2 text-sm text-[#FDFEFD] rounded-lg transition-colors duration-200 bg-[#8A51F5] hover:bg-[#6A3ED5] mb-2"

  return (
    <div 
      className="min-h-screen p-4 text-[#9298A2] font-inter bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('https://github.com/DavidB-77/qubeshare-dash/blob/main/asset/web-cube-bg.png?raw=true')"
      }}
    >
      <header className="mb-6 pl-4">
        <h1 className={`text-2xl font-bold text-[#FDFEFD] ${nunito.className}`}>QubeShare Staking and Reward Dashboard</h1>
      </header>

      <div className="grid grid-cols-5 gap-4">
        {/* Sidebar */}
        <Card className={`col-span-1 ${cardStyle}`}>
          <CardContent className="flex flex-col justify-between h-full py-6">
            <nav className="space-y-2">
              <button 
                onClick={handleStakeUnstake}
                className={menuItemStyle}
              >
                <PieChart className="mr-3 h-5 w-5" />
                <span className="flex-grow text-left">Stake/Unstake Now</span>
              </button>
              <button 
                onClick={() => setShowAlerts(true)}
                className={menuItemStyle}
              >
                <Bell className="mr-3 h-5 w-5" />
                <span className="flex-grow text-left">Alerts</span>
              </button>
              <button 
                onClick={() => setShowContactForm(true)}
                className={menuItemStyle}
              >
                <Mail className="mr-3 h-5 w-5" />
                <span className="flex-grow text-left">Contact Us</span>
              </button>
            </nav>
            <Button 
              variant="outline" 
              className={`${menuItemStyle} mt-4`}
              onClick={handleDisconnect}
            >
              <LogOut className="mr-3 h-5 w-5" />
              <span className="flex-grow text-left">Disconnect</span>
            </Button>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="col-span-4 space-y-4">
          {/* User Info and Metrics Section */}
          <div className="grid grid-cols-5 gap-4">
            {/* User Info Card */}
            <Card className={cardStyle}>
              <CardContent className="flex flex-col items-start justify-start h-full py-4">
                <Avatar className="w-20 h-20 mb-2">
                  <AvatarImage src="/placeholder-avatar.jpg" alt={mockData.userName} />
                  <AvatarFallback><User className="w-10 h-10 text-[#9298A2]" /></AvatarFallback>
                </Avatar>
                <span className={`text-base text-[#FDFEFD] ${nunito.className}`}>{mockData.userName}</span>
              </CardContent>
            </Card>
            <Card className={cardStyle}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={`text-sm font-medium text-[#FDFEFD] ${nunito.className}`}>Amount Staked</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold text-[#FDFEFD]">{mockData.amountStaked} SOL</div>
                <p className="text-xs text-[#FDFEFD]">
                  $20000.00 USD
                </p>
              </CardContent>
            </Card>
            <Card className={cardStyle}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={`text-sm font-medium text-[#FDFEFD] ${nunito.className}`}>Amount Rewarded</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold text-[#FDFEFD]">{mockData.amountRewarded} SOL</div>
                <div className="flex items-center space-x-2">
                  <p className="text-xs text-[#FDFEFD]">
                    $1000.00 USD
                  </p>
                  <span className="text-xs font-semibold text-[#2CD688]">
                    +{mockData.rewardPercentage}%
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className={cardStyle}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={`text-sm font-medium text-[#FDFEFD] ${nunito.className}`}>Current Epoch Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-[#384152] h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#6772DB] rounded-full"
                    style={{ width: `${mockData.currentEpochProgress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-[#FDFEFD] mt-2">
                  65% Complete
                </p>
              </CardContent>
            </Card>
            <Card className={cardStyle}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={`text-sm font-medium text-[#FDFEFD] ${nunito.className}`}>Auto-Compound Growth</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Replace with actual chart component */}
                <div className="h-[80px] bg-[#384152] rounded-xl flex items-center justify-center text-xs text-[#FDFEFD]">
                  Chart Placeholder
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Metrics and Price Chart */}
          <div className="grid grid-cols-2 gap-4">
            <Card className={cardStyle}>
              <CardHeader>
                <CardTitle className={`text-lg text-[#FDFEFD] ${nunito.className}`}>Validator Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#FDFEFD]">Your APY</span>
                    <span className="font-bold text-[#FDFEFD]">{mockData.apy}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FDFEFD]">Validator Uptime</span>
                    <span className="font-bold text-[#FDFEFD]">{mockData.validatorUptime}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#FDFEFD]">Commission Rate</span>
                    <span className="font-bold text-[#FDFEFD]">{mockData.commissionRate}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className={cardStyle}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Image
                    src="https://github.com/DavidB-77/qubeshare-dash/blob/main/asset/favicon-solana.png"
                    alt="Solana Logo"
                    width={24}
                    height={24}
                  />
                  <CardTitle className={`text-lg text-[#FDFEFD] ${nunito.className}`}>Solana Price Chart</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-[#FDFEFD]">Auto Update</span>
                  <input
                    type="checkbox"
                    checked={autoUpdate}
                    onChange={() => setAutoUpdate(!autoUpdate)}
                    className="toggle toggle-primary bg-[#9298A2] rounded-xl"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-[#FDFEFD]">$32.45</span>
                  <span className="text-xs font-semibold text-[#2CD688]">
                    +{mockData.solanaPriceIncrease}%
                  </span>
                </div>
                <div className="h-[180px] bg-[#0E121D] rounded-xl flex items-center justify-center text-sm text-[#FDFEFD] relative overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sol-chart-graph-pHQjIeNOzzMy5L9pqyKFEF7lELiJqx.png"
                    alt="Solana Price Chart"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute top-2 left-2 bg-[#0E121D] bg-opacity-70 px-2 py-1 rounded-md">
                    <span className="text-[#FDFEFD] font-semibold">+$1,340.20</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transactions Section */}
          <Card className={cardStyle}>
            <CardHeader>
              <CardTitle className={`text-lg text-[#FDFEFD] ${nunito.className}`}>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[#F0F2F3]">
                    <th className="text-left">Type</th>
                    <th className="text-left">Amount</th>
                    <th className="text-left">Date</th>
                  </tr>
                </thead>
                <tbody className="text-[#F0F2F3]">
                  <tr>
                    <td>Epoch Reward</td>
                    <td><span className="text-[#2CD688]">0.5 SOL</span></td>
                    <td>2023-06-01</td>
                  </tr>
                  <tr>
                    <td>Monthly Reward</td>
                    <td><span className="text-[#2CD688]">2.5 SOL</span></td>
                    <td>2023-05-31</td>
                  </tr>
                  <tr>
                    <td>APY Payment</td>
                    <td><span className="text-[#2CD688]">0.25 SOL</span></td>
                    <td>2023-05-15</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Alerts Pop-up */}
      {showAlerts && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleOverlayClick}>
          <Card className={`${cardStyle} w-[calc(50%-1rem)] max-w-2xl`} onClick={(e) => e.stopPropagation()}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className={`text-lg text-[#FDFEFD] ${nunito.className}`}>Alerts</CardTitle>
              <Button
                className="p-1 hover:bg-[#384152] rounded-full transition-colors duration-200"
                variant="ghost"
                onClick={handleCloseAlerts}
              >
                <X className="h-4 w-4 text-[#FDFEFD]" />
              </Button>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {sampleAlerts.map((alert) => (
                  <li key={alert.id} className={`p-2 rounded-lg ${
                    alert.type === 'info' ? 'bg-blue-500 bg-opacity-20' :
                    alert.type === 'success' ? 'bg-green-500 bg-opacity-20' :
                    'bg-yellow-500 bg-opacity-20'
                  }`}>
                    <p className="text-sm text-[#FDFEFD]">{alert.message}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Contact Form Pop-up */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleOverlayClick}>
          <Card className={`${cardStyle} w-[calc(50%-1rem)] max-w-2xl`} onClick={(e) => e.stopPropagation()}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className={`text-lg text-[#FDFEFD] ${nunito.className}`}>Contact Us</CardTitle>
              <Button
                className="p-1 hover:bg-[#384152] rounded-full transition-colors duration-200"
                variant="ghost"
                onClick={handleCloseContactForm}
              >
                <X className="h-4 w-4 text-[#FDFEFD]" />
              </Button>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitContactForm} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#FDFEFD] mb-1">Name</label>
                  <Input id="name" placeholder="Your Name" className="bg-[#384152] text-[#FDFEFD] border-none" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#FDFEFD] mb-1">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-[#384152] text-[#FDFEFD] border-none" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#FDFEFD] mb-1">Message</label>
                  <Textarea id="message" placeholder="Your message here..." className="bg-[#384152] text-[#FDFEFD] border-none" />
                </div>
                <Button type="submit" className="w-full bg-[#8A51F5] hover:bg-[#6A3ED5] text-[#FDFEFD]">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
