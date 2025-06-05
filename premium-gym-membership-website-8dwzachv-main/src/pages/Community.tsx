import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { 
  Heart, 
  MessageCircle, 

  Trophy,
  Users,
  TrendingUp,
  Calendar,
  Star,
  Lock
} from 'lucide-react'

export default function Community() {
  const featuredPosts = [
    {
      id: 1,
      author: 'Sarah M.',
      avatar: '/api/placeholder/40/40',
      title: '6 Month Heart Health Transformation!',
      content: 'Just completed my 6-month journey with HeartFit Pro and the results are incredible! My resting heart rate dropped from 78 to 58 BPM...',
      likes: 24,
      comments: 8,
      badge: 'Heart Champion',
      premium: false,
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      author: 'Mike R.',
      avatar: '/api/placeholder/40/40', 
      title: 'Weekly Check-in: HIIT Progress',
      content: 'Week 3 of the advanced HIIT program and feeling stronger than ever! The personalized plan has been a game-changer...',
      likes: 18,
      comments: 12,
      badge: 'Elite Member',
      premium: true,
      timeAgo: '4 hours ago'
    },
    {
      id: 3,
      author: 'Emma L.',
      avatar: '/api/placeholder/40/40',
      title: 'Nutrition Tips That Actually Work',
      content: 'After struggling with post-workout nutrition, I found these simple tips that have improved my recovery time significantly...',
      likes: 31,
      comments: 15,
      badge: 'Nutrition Expert',
      premium: true,
      timeAgo: '6 hours ago'
    }
  ]

  const challenges = [
    {
      title: '30-Day Heart Health Challenge',
      description: 'Complete 30 days of cardio-focused workouts',
      participants: 1247,
      daysLeft: 12,
      reward: 'Golden Heart Badge',
      premium: false
    },
    {
      title: 'Elite Endurance Quest',
      description: 'Advanced 6-week endurance building program',
      participants: 432,
      daysLeft: 25,
      reward: 'Elite Champion Status',
      premium: true
    },
    {
      title: 'Mindful Movement Month',
      description: 'Combine cardio with mindfulness practices',
      participants: 823,
      daysLeft: 8,
      reward: 'Zen Warrior Badge',
      premium: true
    }
  ]

  const leaderboard = [
    { rank: 1, name: 'Alex Thompson', points: 2847, streak: 45, avatar: '/api/placeholder/32/32' },
    { rank: 2, name: 'Maria Garcia', points: 2634, streak: 38, avatar: '/api/placeholder/32/32' },
    { rank: 3, name: 'James Wilson', points: 2521, streak: 42, avatar: '/api/placeholder/32/32' },
    { rank: 4, name: 'Lisa Chen', points: 2398, streak: 35, avatar: '/api/placeholder/32/32' },
    { rank: 5, name: 'David Park', points: 2287, streak: 29, avatar: '/api/placeholder/32/32' }
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-gradient">Community</span> Hub
          </h1>
          <p className="text-gray-400">
            Connect with fellow heart-health enthusiasts and share your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <Tabs defaultValue="feed" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 max-w-lg bg-white/5 p-1">
                <TabsTrigger value="feed" className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400">
                  Community Feed
                </TabsTrigger>
                <TabsTrigger value="challenges" className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400">
                  Challenges
                </TabsTrigger>
                <TabsTrigger value="experts" className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400">
                  Expert Corner
                </TabsTrigger>
              </TabsList>

              <TabsContent value="feed">
                <div className="space-y-6">
                  {/* Create Post Prompt */}
                  <Card className="glass-card">
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="/api/placeholder/40/40" />
                          <AvatarFallback>YU</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <Button variant="outline" className="w-full justify-start text-gray-400 border-white/20 hover:bg-white/5">
                            Share your progress, tips, or ask questions...
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Featured Posts */}
                  {featuredPosts.map((post) => (
                    <Card key={post.id} className={`${post.premium ? 'premium-card' : 'glass-card'} hover:scale-[1.01] transition-all duration-300`}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={post.avatar} />
                              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-semibold">{post.author}</span>
                                <Badge className="bg-yellow-500/20 text-yellow-300 text-xs">
                                  {post.badge}
                                </Badge>
                                {post.premium && (
                                  <Badge className="bg-purple-500/20 text-purple-300 text-xs">
                                    <Star className="w-3 h-3 mr-1" />
                                    Pro
                                  </Badge>
                                )}
                              </div>
                              <span className="text-sm text-gray-400">{post.timeAgo}</span>
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-lg mt-4">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 mb-4">{post.content}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400">
                              <Heart className="h-4 w-4 mr-2" />
                              {post.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              {post.comments}
                            </Button>
                          </div>
                          {post.premium && (
                            <Button size="sm" variant="outline" className="border-white/20" disabled>
                              <Lock className="h-4 w-4 mr-2" />
                              Premium Content
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="challenges">
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold">
                      Active <span className="text-gradient">Challenges</span>
                    </h2>
                    <p className="text-gray-400">
                      Join community challenges to stay motivated and earn exclusive rewards.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {challenges.map((challenge, index) => (
                      <Card key={index} className={`${challenge.premium ? 'premium-card' : 'glass-card'} hover:scale-105 transition-all duration-300`}>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg">{challenge.title}</CardTitle>
                              <CardDescription className="mt-2">
                                {challenge.description}
                              </CardDescription>
                            </div>
                            {challenge.premium && (
                              <Badge className="bg-yellow-500/20 text-yellow-300 ml-2">
                                <Star className="w-3 h-3 mr-1" />
                                Pro
                              </Badge>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Participants:</span>
                              <span className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                {challenge.participants.toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Days left:</span>
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {challenge.daysLeft}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Reward:</span>
                              <span className="flex items-center text-yellow-400">
                                <Trophy className="h-4 w-4 mr-1" />
                                {challenge.reward}
                              </span>
                            </div>
                          </div>
                          
                          <Button 
                            className={`w-full ${challenge.premium ? 'gold-button' : 'bg-white/10 hover:bg-white/20 border border-white/20'}`}
                            disabled={challenge.premium}
                          >
                            {challenge.premium ? 'Upgrade to Join' : 'Join Challenge'}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="experts">
                <div className="space-y-6">
                  <Card className="premium-card text-center border-yellow-500/30">
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        <span className="text-gradient">Expert Corner</span> - Premium Feature
                      </CardTitle>
                      <CardDescription className="text-lg mt-2">
                        Get direct access to certified trainers and cardiologists
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center justify-center space-x-2">
                          <Heart className="h-4 w-4 text-red-400" />
                          <span>Ask certified cardiologists</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span>Weekly Q&A sessions</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-green-400" />
                          <span>Personalized advice</span>
                        </div>
                      </div>
                      <Button size="lg" className="gold-button">
                        Upgrade to Access Expert Corner
                      </Button>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-50">
                    <Card className="glass-card">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>DR</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">Dr. Robert Hayes</CardTitle>
                            <CardDescription>Certified Cardiologist</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 mb-4">
                          "Understanding heart rate zones for optimal cardiovascular training..."
                        </p>
                        <Button variant="outline" className="w-full border-white/20" disabled>
                          <Lock className="h-4 w-4 mr-2" />
                          Premium Only
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="glass-card">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>MS</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">Maria Santos</CardTitle>
                            <CardDescription>Master Trainer</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 mb-4">
                          "5 common mistakes in cardio training and how to avoid them..."
                        </p>
                        <Button variant="outline" className="w-full border-white/20" disabled>
                          <Lock className="h-4 w-4 mr-2" />
                          Premium Only
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-yellow-400" />
                  Weekly Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((user) => (
                    <div key={user.rank} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        user.rank === 1 ? 'bg-yellow-500 text-black' :
                        user.rank === 2 ? 'bg-gray-400 text-black' :
                        user.rank === 3 ? 'bg-amber-600 text-black' :
                        'bg-white/10 text-white'
                      }`}>
                        {user.rank}
                      </div>
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{user.name}</div>
                        <div className="text-xs text-gray-400">{user.points} pts</div>
                      </div>
                      <div className="text-xs text-yellow-400">
                        {user.streak}🔥
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Active Members</span>
                  <span className="font-bold text-gradient">12,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Workouts This Week</span>
                  <span className="font-bold">34,521</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Success Stories</span>
                  <span className="font-bold">2,156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Expert Posts</span>
                  <span className="font-bold text-yellow-400">89</span>
                </div>
              </CardContent>
            </Card>

            {/* Upgrade Prompt */}
            <Card className="premium-card border-yellow-500/30">
              <CardHeader>
                <CardTitle className="text-lg">Join Premium Community</CardTitle>
                <CardDescription>
                  Access exclusive discussions, expert Q&As, and advanced challenges
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