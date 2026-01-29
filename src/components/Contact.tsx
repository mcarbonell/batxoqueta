import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a backend
    console.log('Form submitted:', formData);
    alert('¡Gracias! Mensaje recibido (simulado).');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-bachoqueta tracking-wide uppercase">Contacto</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ¿Hablamos de tu próximo proyecto?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ponte en contacto</h3>
            <p className="text-lg text-gray-600 mb-8">
              Estoy disponible para nuevos proyectos de desarrollo, consultoría en IA y optimización algorítmica. 
              Cuéntame qué necesitas y te responderé lo antes posible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-bachoqueta-accent p-3 rounded-full text-bachoqueta">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-lg font-semibold text-gray-900">info@batxoqueta.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-bachoqueta-accent p-3 rounded-full text-bachoqueta">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Ubicación</p>
                  <p className="text-lg font-semibold text-gray-900">Valencia, España</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bachoqueta focus:border-transparent outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bachoqueta focus:border-transparent outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bachoqueta focus:border-transparent outline-none transition-all"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center space-x-2 bg-bachoqueta hover:bg-bachoqueta-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                <span>Enviar mensaje</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
