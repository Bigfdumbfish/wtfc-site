<<<<<<< HEAD
import { Link } from "react-router-dom";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-20 px-4">
        <img src="/wtfc-logo.png" alt="WTFC Logo" className="mx-auto mb-6 h-24" />
        <h1 className="text-4xl font-bold mb-4">Wyatt Thin Film Company LLC (WTFC)</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          WTFC is pioneering scalable thin-film technologies for high-performance energy storage and battery applications.
        </p>
        <Link to="/apply" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
          Apply for Grant Support
        </Link>
      </section>
=======

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-20 px-4">
        <img
          src="/wtfc-logo.png"
          alt="WTFC Logo"
          className="mx-auto mb-6 h-24"
        />
        <h1 className="text-4xl font-bold mb-4">
          Wyatt Thin Film Company LLC (WTFC)
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          WTFC is pioneering scalable thin-film technologies for high-performance
          energy storage and battery applications. Built on over a decade of
          academic and industrial expertise, our mission is to transform
          laboratory-scale materials into commercially viable solutions using our
          proprietary continuous flow fluidized bed reactor.
        </p>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            About WTFC
          </h2>
          <p className="text-md mb-4">
            Founded by Dr. Quinton K. Wyatt and Dr. Matthias J. Young, WTFC
            develops and scales next-generation conductive polymer coatings for
            advanced energy applications. Our proprietary gas-phase deposition
            technologies build on the foundation of ALD, MLD, and oMLD, enabling
            rapid and uniform coatings on complex particles and 3D substrates.
          </p>
          <p className="text-md">
            WTFC's thin films are engineered for maximum electrochemical
            performance, longevity, and sustainability. We aim to eliminate the
            risk of low-quality energy materials by ensuring precision coatings
            that meet industry-grade scalability, affordability, and
            environmental responsibility.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Proprietary Reactor Technology
          </h2>
          <p className="text-md">
            Our core innovation is a custom-built continuous flow fluidized bed
            reactor — designed from scratch using only commercially available
            components. This system allows high-throughput, pressure-controlled
            gas-phase coating of powders with optimized film thickness, ion
            transport, and electronic conductivity.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <p className="text-md">
            WTFC’s mission is to close the gap between breakthrough thin-film
            materials and real-world adoption. We build coating systems that
            support advanced battery development, energy-efficient desalination,
            and next-generation electronics — all while reducing waste and
            enabling sustainable innovation.
          </p>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-600">
        <p>Wyatt Thin Film Company LLC © {new Date().getFullYear()}</p>
        <p>
          Email: <a href="mailto:QWyatt@WyattThinFilmCompany.com" className="underline">QWyatt@WyattThinFilmCompany.com</a>
        </p>
      </footer>
>>>>>>> b7e80c23802a8e569b3f679f5e90a5d749524546
    </main>
  );
}
