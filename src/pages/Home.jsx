export default function Home() {
  return (
    <main className="text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5xl font-bold mb-4">WTFC: Optimal Solutions in Nanocoating’s</h1>
        <p className="text-xl max-w-3xl mx-auto">
          At Wyatt Thin Film Company (WTFC), we're revolutionizing the future of thin-film coatings for energy storage and advanced materials. Our mission is to bring cutting-edge scientific research to real-world applications by developing innovative, scalable coating technologies that enhance the performance of energy storage devices and electronic materials.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">What We Do</h3>
            <p>
              WTFC focuses on thin-film deposition using an advanced continuous-flow coatings reactor. This technology enables us to efficiently coat high-surface-area materials with conductive organic polymers, improving charge storage and stability compared to conventional methods. With experience in ALD, MLD, oMLD, CVD, and PVD systems, we deliver scalable, next-gen thin-film tools.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Why It Matters</h3>
            <p>
              Our coatings maximize charge capacity, cycle life, and efficiency—addressing global demand for high-performance, sustainable energy solutions. With tunable, metal-free polymer films, we lower costs, enhance sustainability, and reduce e-waste.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Join the Innovation</h3>
            <p>
              WTFC is pushing the boundaries of thin-film innovation, scaling advanced materials for batteries, electronics, and beyond. Our coatings deliver uniformity, conductivity, and commercial readiness.
            </p>
          </div>
        </div>
      </section>

      {/* Origins Section */}
      <section className="py-16 px-4 text-left max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">WTFC Origins</h2>
        <p className="mb-4">
          Wyatt Thin Film Company LLC (WTFC) was founded in 2024 by Dr. Quinton Wyatt, a PhD Materials Scientist from the University of Missouri, with a mission to revolutionize battery and energy storage materials through advanced thin-film coating technologies. 
        </p>
        <p className="mb-4">
          Dr. Wyatt’s research in oxidative molecular layer deposition (oMLD), ALD, and MLD uncovered the potential of nanoscale polymer coatings to significantly improve energy materials. WTFC bridges the gap between lab breakthroughs and scalable deployment.
        </p>
        <p className="mb-4">
          Our team combines expertise in materials science, chemical engineering, and energy storage to design coatings that improve efficiency, cycle life, and energy density in batteries and supercapacitors.
        </p>
        <p className="mb-4">
          WTFC’s work targets applications like lithium-ion batteries, solid-state batteries, and supercapacitors. Our polymer films enhance ion transport, reduce degradation, and support fast charging.
        </p>
        <p>
          Our vision is a future powered by efficient, affordable, and sustainable energy systems—enabled by precision thin-film materials.
        </p>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Interested in working together? We’re looking for research collaborators, commercialization partners, and early-stage funders.
        </p>
        <a
          href="mailto:QWyatt@WyattThinFilmCompany.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
        >
          Email QWyatt@WyattThinFilmCompany.com
        </a>
        <p className="mt-4 text-sm">Phone: (281) 546-7668</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p className="text-sm">© {new Date().getFullYear()} Wyatt Thin Film Company LLC – Columbia, MO</p>
        <p className="text-sm">Contact: QWyatt@WyattThinFilmCompany.com</p>
      </footer>
    </main>
  );
}
