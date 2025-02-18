import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Trophy, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            IAS Master
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#courses" className="text-gray-600 hover:text-blue-600">
              Courses
            </Link>
            <Link href="#faculty" className="text-gray-600 hover:text-blue-600">
              Faculty
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-blue-600">
              Testimonials
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </nav>
          <Button>Enroll Now</Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Ace the IAS Exam with Confidence</h1>
              <p className="text-xl mb-6">Join India's premier coaching institute for aspiring civil servants</p>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Start Your Journey
              </Button>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="IAS aspirants studying"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose IAS Master?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Comprehensive Curriculum",
                  description: "Covers all UPSC syllabus topics in-depth",
                },
                {
                  icon: Users,
                  title: "Expert Faculty",
                  description: "Learn from experienced IAS officers and subject experts",
                },
                {
                  icon: Trophy,
                  title: "Proven Track Record",
                  description: "Consistently high success rate in UPSC exams",
                },
                { icon: Star, title: "Personalized Mentoring", description: "One-on-one guidance for every aspirant" },
              ].map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "1000+", label: "Successful Candidates" },
                { number: "15+", label: "Years of Excellence" },
                { number: "50+", label: "Expert Faculty Members" },
                { number: "95%", label: "Success Rate" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-xl">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Prelims Foundation", duration: "4 months", price: "₹40,000" },
                { title: "Mains Intensive", duration: "6 months", price: "₹60,000" },
                { title: "Interview Preparation", duration: "2 months", price: "₹25,000" },
              ].map((course, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">Duration: {course.duration}</p>
                    <p className="text-2xl font-bold text-blue-600 mb-4">{course.price}</p>
                    <Button className="w-full">Enroll Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section id="faculty" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Expert Faculty</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Rajesh Kumar",
                  position: "Ex-IAS Officer",
                  image: "/placeholder.svg?height=150&width=150",
                },
                {
                  name: "Prof. Sunita Sharma",
                  position: "UPSC Topper",
                  image: "/placeholder.svg?height=150&width=150",
                },
                {
                  name: "Mr. Vikram Singh",
                  position: "Subject Expert",
                  image: "/placeholder.svg?height=150&width=150",
                },
              ].map((faculty, index) => (
                <div key={index} className="text-center">
                  <img
                    src={faculty.image || "/placeholder.svg"}
                    alt={faculty.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1">{faculty.name}</h3>
                  <p className="text-gray-600">{faculty.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Priya Patel",
                  rank: "AIR 5",
                  quote:
                    "IAS Master's guidance was instrumental in my success. Their comprehensive approach and mentoring made all the difference.",
                },
                {
                  name: "Rahul Sharma",
                  rank: "AIR 12",
                  quote:
                    "The faculty's expertise and personalized attention helped me tackle the UPSC exam with confidence. Highly recommended!",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-blue-600">Rank: {testimonial.rank}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input type="tel" placeholder="Your Phone" />
                <textarea className="w-full p-2 border rounded-md" rows={4} placeholder="Your Message"></textarea>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">IAS Master</h3>
              <p>Empowering future civil servants</p>
            </div>
            <nav className="flex space-x-4">
              <Link href="#" className="hover:text-blue-400">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-blue-400">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-blue-400">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} IAS Master. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

