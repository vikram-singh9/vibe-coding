export default function HeroBanner() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm mb-2 opacity-90">Best Deal Online on smart watches</p>
            <h1 className="text-4xl font-bold mb-4">SMART WEARABLE.</h1>
            <p className="text-xl mb-6">UP TO 80% OFF</p>
            <div className="flex gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/30"}`} />
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-32 h-40 bg-slate-800 rounded-2xl flex items-center justify-center">
                  <div className="w-24 h-32 bg-gradient-to-b from-blue-400 to-green-400 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute -left-20 -top-20 w-40 h-40 bg-white/5 rounded-full"></div>
        <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-white/5 rounded-full"></div>
      </div>
    </section>
  )
}
