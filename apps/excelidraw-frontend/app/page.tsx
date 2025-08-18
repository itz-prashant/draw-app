
import React from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { ArrowRight, Download, Layers, Palette, Share2, Star, Users, Zap } from 'lucide-react';
import { PiPlay } from 'react-icons/pi';
import {Button} from "@repo/ui/button"
import Link from 'next/link';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Excelidraw</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <Button variant='primary' size='lg'>
                Getting started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                ✨ New: Real-time collaboration
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Create Beautiful
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Diagrams</span>
              <br />
              Together
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The ultimate collaborative drawing tool for teams. Create flowcharts, wireframes, 
              and diagrams with your team in real-time. No account required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href={'/signin'}>
                <Button variant='primary' size='lg'>
                  Sign in
                </Button>
              </Link>
               
              <Link href={'/signup'}>
                <Button variant='outline' size='lg'>
                  Sign up
                </Button>
              </Link>
               
            </div>
            
            {/* Demo Canvas */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border">
              <div className="bg-gray-50 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 bg-white rounded-lg shadow-sm border-2 border-dashed border-gray-300">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <Palette className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg">Interactive canvas preview</p>
                      <p className="text-gray-400 text-sm">Draw shapes, add text, collaborate in real-time</p>
                    </div>
                  </div>
                </div>
                {/* Floating elements to show activity */}
                <div className="absolute top-6 right-6 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-600 bg-white px-2 py-1 rounded">3 active users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to collaborate</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed for teams who value speed, simplicity, and seamless collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Collaboration</h3>
              <p className="text-gray-600">Work together with your team simultaneously. See changes as they happen.</p>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Optimized for speed. No lag, no delays. Just smooth drawing experience.</p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Export Anywhere</h3>
              <p className="text-gray-600">Export your diagrams as PNG, SVG, or JSON. Use them wherever you need.</p>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Sharing</h3>
              <p className="text-gray-600">Share your work with a simple link. No accounts or sign-ups required.</p>
            </div>

            <div className="bg-teal-50 p-8 rounded-2xl hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rich Drawing Tools</h3>
              <p className="text-gray-600">Shapes, arrows, text, freehand drawing. Everything you need in one place.</p>
            </div>

            <div className="bg-rose-50 p-8 rounded-2xl hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Beautiful Design</h3>
              <p className="text-gray-600">Clean, intuitive interface that gets out of your way and lets you focus on creating.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Loved by teams worldwide</h2>
            <div className="flex items-center justify-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600">4.9/5 from 1000+ users</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">"Finally, a drawing tool that doesn't get in the way. My team loves how easy it is to brainstorm together."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Sarah Chen</p>
                  <p className="text-sm text-gray-500">Product Manager</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">"The real-time collaboration is seamless. We've replaced our old whiteboarding tools completely."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                  M
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Mike Rodriguez</p>
                  <p className="text-sm text-gray-500">Design Lead</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">"Clean interface, powerful features. Perfect for our remote team's daily standups and planning sessions."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Alex Kim</p>
                  <p className="text-sm text-gray-500">Engineering Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to start creating?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of teams who trust Excelidraw for their collaborative drawing needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all hover:scale-105 flex items-center space-x-2">
              <span>Start Drawing Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all">
              View Examples
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Excelidraw</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                The collaborative drawing tool that brings teams together. Create, share, and collaborate on beautiful diagrams.
              </p>
              <div className="flex space-x-4">
                <BsTwitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <BsGithub className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 Excelidraw. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;