'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  Clock,
  Award,
  TrendingUp,
  Stethoscope,
  Scissors,
  Activity,
  Heart,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Package,
  Zap
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Heart className="w-8 h-8 text-primary-600" fill="currentColor" />
              <span className="text-2xl font-bold text-gray-900">MedPro Supply</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a href="#soluciones" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Soluciones</a>
              <a href="#ventajas" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Ventajas</a>
              <a href="#productos" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Productos</a>
              <a href="#contacto" className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold shadow-lg hover:shadow-xl">
                Solicitar Cotización
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary-100 rounded-full opacity-30 blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent-100 rounded-full opacity-30 blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full mb-6 font-semibold"
              >
                <Star className="w-4 h-4" fill="currentColor" />
                <span>Proveedor Certificado ISO 13485</span>
              </motion.div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Equipamiento Médico de{' '}
                <span className="text-primary-600 relative">
                  Precisión
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute bottom-2 left-0 h-3 bg-accent-200 -z-10"
                  />
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Soluciones integrales en material médico y quirúrgico para instituciones de salud que buscan <strong>excelencia, confiabilidad y resultados</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all font-semibold shadow-xl hover:shadow-2xl flex items-center justify-center group"
                >
                  Solicitar Cotización
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#productos"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-all font-semibold shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Ver Catálogo
                </motion.a>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: '5,000+', label: 'Productos' },
                  { number: '500+', label: 'Clientes B2B' },
                  { number: '24/7', label: 'Soporte' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-primary-600">{stat.number}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  {[
                    { icon: Shield, text: 'Certificación FDA', color: 'bg-primary-100 text-primary-600' },
                    { icon: Clock, text: 'Entrega en 24-48h', color: 'bg-accent-100 text-accent-600' },
                    { icon: Award, text: 'Garantía Extendida', color: 'bg-purple-100 text-purple-600' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.2 }}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className={`${item.color} p-3 rounded-lg`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="font-semibold text-gray-900">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute -top-6 -right-6 bg-accent-500 text-white px-6 py-3 rounded-full font-bold shadow-xl"
                >
                  ¡Cotización en 2h!
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-12"
          >
            {['ISO 13485', 'FDA Approved', 'CE Certified', 'ISO 9001'].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2 text-gray-600"
              >
                <CheckCircle2 className="w-6 h-6 text-accent-500" />
                <span className="font-semibold">{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="soluciones" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Soluciones Integrales para Profesionales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Equipamiento especializado para cada área de su institución médica
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Stethoscope,
                title: 'Diagnóstico',
                description: 'Equipos de última generación para diagnóstico preciso y confiable',
                color: 'from-blue-500 to-primary-600'
              },
              {
                icon: Scissors,
                title: 'Instrumental Quirúrgico',
                description: 'Material quirúrgico de precisión certificado para procedimientos complejos',
                color: 'from-accent-500 to-green-600'
              },
              {
                icon: Activity,
                title: 'Monitoreo',
                description: 'Sistemas avanzados de monitoreo continuo para cuidados intensivos',
                color: 'from-purple-500 to-pink-600'
              },
              {
                icon: Package,
                title: 'Consumibles',
                description: 'Stock permanente de material descartable y consumibles médicos',
                color: 'from-orange-500 to-red-600'
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className={`bg-gradient-to-br ${solution.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section id="ventajas" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Por Qué Elegirnos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos el partner estratégico que su institución necesita
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Respuesta Inmediata',
                description: 'Cotizaciones en menos de 2 horas. Entrega express en 24-48h para pedidos urgentes.',
                highlight: 'Cotización en 2h'
              },
              {
                icon: Shield,
                title: 'Garantía Total',
                description: 'Todos nuestros productos cuentan con certificación internacional y garantía extendida.',
                highlight: 'Certificado FDA'
              },
              {
                icon: Users,
                title: 'Asesoría Especializada',
                description: 'Equipo de expertos en equipamiento médico disponible para asesoría técnica personalizada.',
                highlight: 'Soporte 24/7'
              },
              {
                icon: TrendingUp,
                title: 'Mejores Precios B2B',
                description: 'Descuentos por volumen y condiciones de pago flexibles para instituciones.',
                highlight: 'Ahorre hasta 30%'
              },
              {
                icon: Package,
                title: 'Stock Permanente',
                description: 'Más de 5,000 productos en stock inmediato. Sin esperas ni demoras en sus pedidos.',
                highlight: '5,000+ productos'
              },
              {
                icon: CheckCircle2,
                title: 'Calidad Verificada',
                description: 'Trabajamos únicamente con fabricantes certificados ISO 13485 y proveedores homologados.',
                highlight: 'ISO 13485'
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId={`bg-${index}`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary-100 text-primary-600 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <advantage.icon className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
                      {advantage.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="productos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Categorías Destacadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore nuestro amplio catálogo de equipamiento médico profesional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Equipos de Diagnóstico',
                items: ['Electrocardiógrafos', 'Monitores Multiparamétricos', 'Oxímetros de Pulso', 'Tensiómetros Digitales'],
                image: '🔬'
              },
              {
                category: 'Material Quirúrgico',
                items: ['Sets Instrumentales', 'Pinzas y Clamps', 'Bisturíes y Tijeras', 'Material de Sutura'],
                image: '⚕️'
              },
              {
                category: 'Mobiliario Clínico',
                items: ['Camas Hospitalarias', 'Mesas de Exploración', 'Carros de Curas', 'Camillas de Traslado'],
                image: '🏥'
              },
              {
                category: 'Consumibles Médicos',
                items: ['Guantes Quirúrgicos', 'Mascarillas y Protección', 'Jeringas y Agujas', 'Material de Vendaje'],
                image: '📦'
              },
              {
                category: 'Equipos de Laboratorio',
                items: ['Centrífugas', 'Microscopios', 'Incubadoras', 'Analizadores Clínicos'],
                image: '🧪'
              },
              {
                category: 'Esterilización',
                items: ['Autoclaves', 'Termodesinfectadoras', 'Selladoras', 'Indicadores Biológicos'],
                image: '♨️'
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {product.image}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.category}</h3>
                <ul className="space-y-2">
                  {product.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold flex items-center justify-center group/btn"
                >
                  Ver Catálogo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para Optimizar su Equipamiento Médico?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Más de 500 instituciones confían en nosotros. Únase y reciba una cotización personalizada en menos de 2 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-bold shadow-xl hover:shadow-2xl flex items-center justify-center group"
              >
                Solicitar Cotización Ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="tel:+34900000000"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white px-8 py-4 rounded-lg border-2 border-white hover:bg-white/10 transition-all font-bold flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                Llamar Ahora
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contacte con Nuestros Expertos
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Complete el formulario y nuestro equipo le responderá con una cotización detallada en menos de 2 horas hábiles.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Phone, text: '+34 900 000 000', label: 'Teléfono' },
                  { icon: Mail, text: 'ventas@medprosupply.com', label: 'Email' },
                  { icon: MapPin, text: 'Madrid, España', label: 'Ubicación' }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium">{contact.label}</div>
                      <div className="text-gray-900 font-semibold">{contact.text}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent-50 rounded-xl border border-accent-200">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-accent-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Garantía de Respuesta</h4>
                    <p className="text-gray-600">
                      Nos comprometemos a responder todas las solicitudes en menos de 2 horas hábiles con una cotización detallada y personalizada.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl p-8 border border-gray-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="Ej: Dr. Juan Pérez"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Institución / Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="Ej: Hospital General de Madrid"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="ejemplo@hospital.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ¿Qué equipamiento necesita? *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                    placeholder="Describa el tipo de equipamiento que necesita, cantidades aproximadas y cualquier requerimiento especial..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-600 text-white py-4 rounded-lg hover:bg-primary-700 transition-all font-bold shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  Enviar Solicitud
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  Al enviar este formulario, acepta nuestra política de privacidad y el tratamiento de sus datos.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-8 h-8 text-primary-400" fill="currentColor" />
                <span className="text-xl font-bold">MedPro Supply</span>
              </div>
              <p className="text-gray-400">
                Líder en suministro de equipamiento médico y quirúrgico profesional.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Soluciones</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary-400 transition-colors">Equipos de Diagnóstico</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Material Quirúrgico</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Mobiliario Clínico</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Consumibles</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary-400 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Certificaciones</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary-400 transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Política de Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MedPro Supply. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {['ISO 13485', 'FDA', 'CE'].map((cert) => (
                <span key={cert} className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-400">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
