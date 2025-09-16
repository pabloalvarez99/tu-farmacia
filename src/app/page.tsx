export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">+</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Tu Farmacia</h1>
                <p className="text-sm text-gray-600">Coquimbo, Chile</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Horario: 8:00 - 22:00</p>
              <p className="text-sm text-blue-600 font-medium">+56 51 234 5678</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Tu Salud es Nuestra Prioridad</h2>
          <p className="text-xl mb-8">Farmacia de confianza en el corazón de Coquimbo</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Ver Productos
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Nuestros Servicios</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💊</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Medicamentos</h4>
              <p className="text-gray-600">Amplio catálogo de medicamentos con y sin receta médica</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🩺</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Control de Presión</h4>
              <p className="text-gray-600">Servicio gratuito de control de presión arterial</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Delivery</h4>
              <p className="text-gray-600">Entrega a domicilio en Coquimbo y La Serena</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Visítanos</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">📍</span>
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-gray-600">Av. Costanera 123, Coquimbo<br />Región de Coquimbo, Chile</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">⏰</span>
                  <div>
                    <p className="font-medium">Horarios de Atención</p>
                    <p className="text-gray-600">Lunes a Domingo: 8:00 - 22:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-xl">📞</span>
                  <div>
                    <p className="font-medium">Contacto</p>
                    <p className="text-gray-600">Teléfono: +56 51 234 5678<br />WhatsApp: +56 9 8765 4321</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-4">Consulta Rápida</h4>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Tu nombre" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea 
                  placeholder="¿En qué podemos ayudarte?" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Enviar Consulta
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">+</span>
            </div>
            <span className="text-xl font-bold">Tu Farmacia</span>
          </div>
          <p className="text-gray-400 mb-4">Cuidando tu salud desde 2010</p>
          <p className="text-sm text-gray-500">© 2024 Tu Farmacia Coquimbo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
