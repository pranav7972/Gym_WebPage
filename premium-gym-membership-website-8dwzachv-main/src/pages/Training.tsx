import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { 
  Heart, 
  Clock, 
  Target,
  Flame,
  Play,
  Lock,
  Star,
  TrendingUp
} from 'lucide-react'

export default function Training() {
  const workoutCategories = [
    {
      id: 'cardio',
      name: 'Cardio & Heart Health',
      description: 'Specialized workouts to strengthen your cardiovascular system',
      workouts: [
        {
          title: 'Morning Heart Boost',
          duration: '20 min',
          difficulty: 'Beginner',
          calories: '180-220',
          premium: false,
          description: 'Gentle cardio to start your day with energy'
        },
        {
          title: 'HIIT Cardio Circuit',
          duration: '30 min',
          difficulty: 'Intermediate',
          calories: '300-400',
          premium: true,
          description: 'High-intensity intervals for maximum heart benefits'
        },
        {
          title: 'Endurance Builder',
          duration: '45 min',
          difficulty: 'Advanced',
          calories: '400-550',
          premium: true,
          description: 'Build lasting cardiovascular endurance'
        }
      ]
    },
    {
      id: 'strength',
      name: 'Heart-Smart Strength',
      description: 'Resistance training optimized for cardiovascular health',
      workouts: [
        {
          title: 'Upper Body Flow',
          duration: '25 min',
          difficulty: 'Beginner',
          calories: '150-200',
          premium: false,
          description: 'Gentle upper body strengthening'
        },
        {
          title: 'Full Body Circuit',
          duration: '40 min',
          difficulty: 'Intermediate',
          calories: '250-350',
          premium: true,
          description: 'Complete strength training with cardio elements'
        },
        {
          title: 'Power & Endurance',
          duration: '50 min',
          difficulty: 'Advanced',
          calories: '350-450',
          premium: true,
          description: 'Advanced strength training for athletes'
        }
      ]
    },
    {
      id: 'recovery',
      name: 'Recovery & Wellness',
      description: 'Active recovery and mindfulness for complete wellness',
      workouts: [
        {
          title: 'Gentle Yoga Flow',
          duration: '30 min',
          difficulty: 'Beginner',
          calories: '100-150',
          premium: false,
          description: 'Relaxing yoga for recovery days'
        },
        {
          title: 'Meditation & Breathwork',
          duration: '15 min',
          difficulty: 'All Levels',
          calories: '50-80',
          premium: true,
          description: 'Stress reduction and mental clarity'
        },
        {
          title: 'Deep Stretch Session',
          duration: '35 min',
          difficulty: 'All Levels',
          calories: '80-120',
          premium: true,
          description: 'Improve flexibility and reduce tension'
        }
      ]
    }
  ]

  const personalizedPlans = [
    {
      title: 'Heart Health Beginner',
      description: 'Perfect for starting your cardiovascular fitness journey',
      duration: '4 weeks',
      sessions: '3 per week',
      focus: 'Building endurance gradually',
      premium: false
    },
    {
      title: 'Cardio Warrior',
      description: 'Intensive heart-strengthening program for experienced athletes',
      duration: '8 weeks',
      sessions: '5 per week',
      focus: 'Maximum cardiovascular performance',
      premium: true
    },
    {
      title: 'Heart Recovery Plus',
      description: 'Specialized program for post-cardiac rehabilitation',
      duration: '12 weeks',
      sessions: '4 per week',
      focus: 'Safe, monitored progression',
      premium: true
    }
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-gradient">Training</span> Library
          </h1>
          <p className="text-gray-400">
            Discover heart-healthy workouts designed by expert trainers and cardiologists.
          </p>
        </div>

        <Tabs defaultValue="workouts" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md bg-white/5 p-1">
            <TabsTrigger value="workouts" className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400">
              Workout Library
            </TabsTrigger>
            <TabsTrigger value="plans" className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400">
              Training Plans
            </TabsTrigger>
          </TabsList>

          <TabsContent value="workouts">
            <div className="space-y-12">
              {workoutCategories.map((category) => (
                <div key={category.id}>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.workouts.map((workout, index) => (
                      <Card key={index} className={`${workout.premium ? 'premium-card' : 'glass-card'} group hover:scale-105 transition-all duration-300`}>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg">{workout.title}</CardTitle>
                              <CardDescription className="mt-2">
                                {workout.description}
                              </CardDescription>
                            </div>
                            {workout.premium && (
                              <Badge className="bg-yellow-500/20 text-yellow-300 ml-2">
                                <Star className="w-3 h-3 mr-1" />
                                Pro
                              </Badge>
                            )}
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {workout.duration}
                            </div>
                            <div className="flex items-center">
                              <Target className="h-4 w-4 mr-1" />
                              {workout.difficulty}
                            </div>
                            <div className="flex items-center">
                              <Flame className="h-4 w-4 mr-1" />
                              {workout.calories}
                            </div>
                          </div>
                          
                          <Button 
                            className={`w-full ${workout.premium ? 'gold-button' : 'bg-white/10 hover:bg-white/20 border border-white/20'}`}
                            disabled={workout.premium}
                          >
                            {workout.premium ? (
                              <>
                                <Lock className="h-4 w-4 mr-2" />
                                Upgrade to Access
                              </>
                            ) : (
                              <>
                                <Play className="h-4 w-4 mr-2" />
                                Start Workout
                              </>
                            )}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="plans">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">
                  Personalized <span className="text-gradient">Training Plans</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Structured programs designed to help you achieve your heart health goals with progressive, 
                  science-backed training methods.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {personalizedPlans.map((plan, index) => (
                  <Card key={index} className={`${plan.premium ? 'premium-card' : 'glass-card'} hover:scale-105 transition-all duration-300`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{plan.title}</CardTitle>
                        {plan.premium && (
                          <Badge className="bg-yellow-500/20 text-yellow-300">
                            <Star className="w-3 h-3 mr-1" />
                            Pro
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="mt-2">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Duration:</span>
                          <span>{plan.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Sessions:</span>
                          <span>{plan.sessions}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Focus:</span>
                          <span>{plan.focus}</span>
                        </div>
                      </div>
                      
                      <Button 
                        className={`w-full ${plan.premium ? 'gold-button' : 'bg-white/10 hover:bg-white/20 border border-white/20'}`}
                        disabled={plan.premium}
                      >
                        {plan.premium ? (
                          <>
                            <Lock className="h-4 w-4 mr-2" />
                            Upgrade Required
                          </>
                        ) : (
                          <>
                            <TrendingUp className="h-4 w-4 mr-2" />
                            Start Plan
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Upgrade CTA */}
              <div className="mt-12">
                <Card className="premium-card text-center border-yellow-500/30">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Unlock <span className="text-gradient">Premium Training</span>
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      Get access to personalized plans, advanced workouts, and 1-on-1 coaching
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center justify-center space-x-2">
                        <Heart className="h-4 w-4 text-red-400" />
                        <span>Personalized plans</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span>Expert guidance</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-green-400" />
                        <span>Progress tracking</span>
                      </div>
                    </div>
                    <Button size="lg" className="gold-button">
                      Start 7-Day Free Trial
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}