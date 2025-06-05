import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Progress } from '../components/ui/progress'
import { Badge } from '../components/ui/badge'
import { 
  Heart, 
  TrendingUp, 
  Calendar, 
  Target,
  Activity,
  Award,
  Clock,
  Flame
} from 'lucide-react'

export default function Dashboard() {
  // Mock data - will be replaced with real data from Supabase
  const weeklyStats = [
    { day: 'Mon', completed: true, workout: 'Cardio Blast' },
    { day: 'Tue', completed: true, workout: 'Strength Training' },
    { day: 'Wed', completed: false, workout: 'Heart Health Focus' },
    { day: 'Thu', completed: false, workout: 'Recovery Yoga' },
    { day: 'Fri', completed: false, workout: 'HIIT Session' },
    { day: 'Sat', completed: false, workout: 'Endurance Run' },
    { day: 'Sun', completed: false, workout: 'Active Recovery' }
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, <span className="text-gradient">Alex</span>! 👋
          </h1>
          <p className="text-gray-400">
            Let's continue your heart-healthy fitness journey.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weekly Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gradient">2/7</div>
              <Progress value={28.6} className="mt-2" />
              <p className="text-xs text-gray-400 mt-2">
                Great start! Keep going.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Heart Rate Avg</CardTitle>
              <Heart className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142 <span className="text-sm text-gray-400">bpm</span></div>
              <p className="text-xs text-green-400 mt-2">
                ↗ 5% improvement this week
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
              <Flame className="h-4 w-4 text-orange-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,240</div>
              <p className="text-xs text-gray-400 mt-2">
                This week
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Streak</CardTitle>
              <Award className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gradient">12 days</div>
              <p className="text-xs text-gray-400 mt-2">
                Personal best!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Workout */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="premium-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Today's Workout</CardTitle>
                    <CardDescription>Heart Health Focus - 45 minutes</CardDescription>
                  </div>
                  <Badge className="bg-yellow-500/20 text-yellow-300">
                    Recommended
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg flex items-center justify-center border border-yellow-500/20">
                  <div className="text-center">
                    <Activity className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Cardio Endurance Circuit</h3>
                    <p className="text-gray-300 text-sm">
                      A heart-pumping workout designed to improve cardiovascular health
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      45 min
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-1" />
                      Intermediate
                    </div>
                    <div className="flex items-center">
                      <Flame className="h-4 w-4 mr-1" />
                      350-450 cal
                    </div>
                  </div>
                  <Button className="gold-button">
                    Start Workout
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Schedule */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  This Week's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {weeklyStats.map((day, index) => (
                    <div 
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                        day.completed 
                          ? 'bg-green-500/10 border border-green-500/20' 
                          : 'bg-white/5 border border-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          day.completed 
                            ? 'bg-green-500 text-black' 
                            : 'bg-white/10 text-gray-400'
                        }`}>
                          {day.completed ? '✓' : day.day.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium">{day.day}</div>
                          <div className="text-sm text-gray-400">{day.workout}</div>
                        </div>
                      </div>
                      {!day.completed && (
                        <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/5">
                          Start
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-white/20 hover:bg-white/5">
                  <Heart className="h-4 w-4 mr-2" />
                  Log Heart Rate
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/20 hover:bg-white/5">
                  <Target className="h-4 w-4 mr-2" />
                  Update Goals
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/20 hover:bg-white/5">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Session
                </Button>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-yellow-500/10">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    🏆
                  </div>
                  <div>
                    <div className="text-sm font-medium">First Week Complete!</div>
                    <div className="text-xs text-gray-400">2 days ago</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-green-500/10">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    💪
                  </div>
                  <div>
                    <div className="text-sm font-medium">Heart Rate Goal</div>
                    <div className="text-xs text-gray-400">5 days ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upgrade Prompt */}
            <Card className="premium-card border-yellow-500/30">
              <CardHeader>
                <CardTitle className="text-lg">Unlock Premium</CardTitle>
                <CardDescription>
                  Get personalized training plans and expert guidance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full gold-button">
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}