import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  Heart, 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Star,
  ArrowRight,
  Zap
} from 'lucide-react'

export default function LandingPage() {
  const membershipTiers = [
    {
      name: "Free Explorer",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with your fitness journey",
      features: [
        "Basic workout library",
        "Community access",
        "Progress tracking",
        "Weekly heart health tips"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Heart Pro",
      price: "$29",
      period: "month",
      description: "Unlock personalized training and premium content",
      features: [
        "Personalized training plans",
        "Heart-health focused workouts",
        "1-on-1 trainer consultations",
        "Advanced progress analytics",
        "Nutrition planning",
        "Priority community support"
      ],
      cta: "Start 7-Day Free Trial",
      popular: true
    },
    {
      name: "Elite Champion",
      price: "$79",
      period: "month",
      description: "Complete wellness transformation with expert guidance",
      features: [
        "Everything in Heart Pro",
        "Weekly 1-on-1 coaching calls",
        "Custom meal planning",
        "Supplement recommendations",
        "24/7 trainer support",
        "Exclusive masterclasses",
        "Body composition analysis"
      ],
      cta: "Start 14-Day Free Trial",
      popular: false
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Heart-Health Focused",
      description: "Specialized cardio and endurance training designed by cardiologists for optimal heart health."
    },
    {
      icon: Target,
      title: "Personalized Plans",
      description: "No cookie-cutter workouts. Our AI and expert trainers craft routines that fit your unique goals."
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Join thousands of like-minded individuals on their wellness journey. No egos, just results."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track your progress with detailed analytics and see measurable improvements in your health."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
              <Zap className="w-4 h-4 mr-2" />
              Transform Your Heart Health Today
            </Badge>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Premium Fitness</span>
              <span className="block text-gradient">For Your Heart</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
              Join the exclusive community of heart-healthy fitness enthusiasts. Get personalized training plans, 
              expert guidance, and achieve real results with our scientifically-backed approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gold-button text-lg px-8 py-4">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5">
                Watch Success Stories
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                No commitment
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                7-day free trial
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why <span className="text-gradient">HeartFit Pro</span> Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our holistic approach combines cutting-edge science with personalized care to deliver transformative results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card text-center hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Choose Your <span className="text-gradient">Fitness Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible plans designed to meet you wherever you are in your wellness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative ${
                  tier.popular 
                    ? 'premium-card scale-105 border-2 border-yellow-500/50' 
                    : 'glass-card hover:scale-105'
                } transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gradient">{tier.price}</span>
                    <span className="text-gray-400">/{tier.period}</span>
                  </div>
                  <CardDescription className="mt-4 text-gray-300">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      tier.popular 
                        ? 'gold-button' 
                        : 'bg-white/10 hover:bg-white/20 border border-white/20'
                    }`}
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400">
              All plans include our 100% satisfaction guarantee. 
              <Button variant="link" className="text-yellow-400 p-0 ml-1">
                Learn more about our refund policy
              </Button>
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Trusted by <span className="text-gradient">10,000+</span> Members
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="glass-card text-center">
                <div className="text-4xl font-bold text-gradient mb-2">95%</div>
                <div className="text-gray-300">Members see improved cardiovascular health</div>
              </div>
              <div className="glass-card text-center">
                <div className="text-4xl font-bold text-gradient mb-2">4.9★</div>
                <div className="text-gray-300">Average member satisfaction rating</div>
              </div>
              <div className="glass-card text-center">
                <div className="text-4xl font-bold text-gradient mb-2">6mo</div>
                <div className="text-gray-300">Average time to reach fitness goals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-card">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your <span className="text-gradient">Heart Health</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of members who've already transformed their lives with our heart-focused fitness programs.
            </p>
            <Button size="lg" className="gold-button text-lg px-8 py-4 animate-glow">
              Start Your Free Trial Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}