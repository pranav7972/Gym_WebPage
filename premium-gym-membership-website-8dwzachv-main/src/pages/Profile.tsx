import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { 
  Heart, 
  Settings, 
  Trophy,

  Target,
  CreditCard,
  Bell,
  Shield,
  User,
  Mail,
  Phone,
  MapPin,
  Edit
} from 'lucide-react'

export default function Profile() {
  const achievements = [
    { name: 'First Workout', date: '2024-01-15', icon: '🎯' },
    { name: 'Heart Champion', date: '2024-02-01', icon: '❤️' },
    { name: '30-Day Streak', date: '2024-02-15', icon: '🔥' },
    { name: 'Community Helper', date: '2024-03-01', icon: '🤝' }
  ]

  const subscriptionHistory = [
    { date: '2024-03-01', plan: 'Heart Pro', amount: '$29.00', status: 'Active' },
    { date: '2024-02-01', plan: 'Heart Pro', amount: '$29.00', status: 'Paid' },
    { date: '2024-01-01', plan: 'Heart Pro', amount: '$29.00', status: 'Paid' }
  ]

  const healthMetrics = [
    { label: 'Resting Heart Rate', value: '58 BPM', change: '-12%', trend: 'down' },
    { label: 'VO2 Max', value: '45.2 ml/kg/min', change: '+8%', trend: 'up' },
    { label: 'Body Weight', value: '165 lbs', change: '-3%', trend: 'down' },
    { label: 'Body Fat %', value: '12.5%', change: '-2%', trend: 'down' }
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-gradient">Profile</span> Settings
          </h1>
          <p className="text-gray-400">
            Manage your account, subscription, and health data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-card text-center">
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/api/placeholder/96/96" />
                  <AvatarFallback className="text-xl">AM</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">Alex Martinez</CardTitle>
                <CardDescription>
                  Member since January 2024
                </CardDescription>
                <Badge className="bg-yellow-500/20 text-yellow-300 mt-2">
                  Heart Pro Member
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Workouts Completed</span>
                    <span className="font-bold">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Current Streak</span>
                    <span className="font-bold text-gradient">12 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Community Points</span>
                    <span className="font-bold">2,340</span>
                  </div>
                </div>
                <Button className="w-full mt-4 gold-button">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-white/20 hover:bg-white/5">
                  <Settings className="h-4 w-4 mr-2" />
                  Account Settings
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/20 hover:bg-white/5">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Billing & Plans
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/20 hover:bg-white/5">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/20 hover:bg-white/5">
                  <Shield className="h-4 w-4 mr-2" />
                  Privacy & Security
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 max-w-2xl bg-white/5 p-1">
                <TabsTrigger value="overview" className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="health" className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400">
                  Health Data
                </TabsTrigger>
                <TabsTrigger value="subscription" className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400">
                  Subscription
                </TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400">
                  Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Personal Information */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-400">Full Name</label>
                        <div className="mt-1 text-white">Alex Martinez</div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-400">Email</label>
                        <div className="mt-1 text-white flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          alex.martinez@email.com
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-400">Phone</label>
                        <div className="mt-1 text-white flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          +1 (555) 123-4567
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-400">Location</label>
                        <div className="mt-1 text-white flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          San Francisco, CA
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-400">Age</label>
                        <div className="mt-1 text-white">32 years old</div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-400">Fitness Goal</label>
                        <div className="mt-1 text-white">Improve cardiovascular health</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Achievements */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="h-5 w-5 mr-2 text-yellow-400" />
                      Recent Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                          <div className="text-2xl">{achievement.icon}</div>
                          <div>
                            <div className="font-medium">{achievement.name}</div>
                            <div className="text-sm text-gray-400">{achievement.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="health" className="space-y-6">
                {/* Health Metrics */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-red-400" />
                      Health Metrics
                    </CardTitle>
                    <CardDescription>
                      Track your progress with key health indicators
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {healthMetrics.map((metric, index) => (
                        <div key={index} className="p-4 rounded-lg bg-white/5 text-center">
                          <div className="text-2xl font-bold text-gradient mb-1">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-400 mb-2">
                            {metric.label}
                          </div>
                          <div className={`text-xs flex items-center justify-center ${
                            metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {metric.trend === 'up' ? '↗' : '↘'} {metric.change}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Health Goals */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2 text-green-400" />
                      Health Goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Resting Heart Rate Goal</span>
                        <span>55 BPM</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <div className="text-xs text-gray-400">85% to goal</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Weekly Workout Goal</span>
                        <span>5 sessions</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                      <div className="text-xs text-gray-400">3/5 this week</div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="subscription" className="space-y-6">
                {/* Current Plan */}
                <Card className="premium-card border-yellow-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Current Subscription
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xl font-bold text-gradient">Heart Pro</div>
                        <div className="text-sm text-gray-400">$29.00/month</div>
                      </div>
                      <Badge className="bg-green-500/20 text-green-300">
                        Active
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Next billing</span>
                        <div className="font-medium">April 1, 2024</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Payment method</span>
                        <div className="font-medium">•••• 4242</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="gold-button">
                        Upgrade to Elite
                      </Button>
                      <Button variant="outline" className="border-white/20 hover:bg-white/5">
                        Manage Billing
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Billing History */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Billing History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {subscriptionHistory.map((bill, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                          <div>
                            <div className="font-medium">{bill.plan}</div>
                            <div className="text-sm text-gray-400">{bill.date}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{bill.amount}</div>
                            <Badge className={`text-xs ${
                              bill.status === 'Active' ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'
                            }`}>
                              {bill.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                {/* Account Settings */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="h-5 w-5 mr-2" />
                      Account Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Email Notifications</div>
                          <div className="text-sm text-gray-400">Receive workout reminders and progress updates</div>
                        </div>
                        <Button variant="outline" size="sm" className="border-white/20">
                          Configure
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Privacy Settings</div>
                          <div className="text-sm text-gray-400">Control who can see your profile and progress</div>
                        </div>
                        <Button variant="outline" size="sm" className="border-white/20">
                          Manage
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Data Export</div>
                          <div className="text-sm text-gray-400">Download your workout data and progress</div>
                        </div>
                        <Button variant="outline" size="sm" className="border-white/20">
                          Export
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Danger Zone */}
                <Card className="glass-card border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-red-400">Danger Zone</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Cancel Subscription</div>
                        <div className="text-sm text-gray-400">You'll lose access to premium features</div>
                      </div>
                      <Button variant="outline" size="sm" className="border-red-500/50 text-red-400 hover:bg-red-500/10">
                        Cancel Plan
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Delete Account</div>
                        <div className="text-sm text-gray-400">Permanently delete your account and all data</div>
                      </div>
                      <Button variant="outline" size="sm" className="border-red-500/50 text-red-400 hover:bg-red-500/10">
                        Delete Account
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}