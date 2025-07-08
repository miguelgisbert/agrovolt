import { ArrowRight, Sun, Sprout } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300 rounded-full opacity-15 animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full">
            <Sprout className="w-8 h-8 text-white" />
          </div>
          <div className="text-4xl font-bold text-gray-800">+</div>
          <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full">
            <Sun className="w-8 h-8 text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          <span className="text-green-600">Agro</span>
          <span className="text-yellow-600">Volt</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          Revoluciona tu explotación agrícola con la <span className="font-semibold text-green-600">simbiosis perfecta</span> entre 
          energía solar y agricultura. Protege tus cultivos, ahorra agua y genera energía limpia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
            Soy Agricultor
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
            Soy Inversor
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}