import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-yellow-600/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <img src="logo.png" alt="Sculpted Aura Logo" width={50} height={50} />
              <div>
                <h3 className="font-heading font-bold text-xl text-yellow-400">Sculpted Aura</h3>
                <p className="font-body text-amber-200 text-sm">Beauty & Aesthetics</p>
              </div>
            </div>
            <p className="font-body text-amber-100 leading-relaxed max-w-md">
              Premium beauty treatments designed to enhance your natural features while giving you a luxurious, relaxing
              experience.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-yellow-400 mb-4">Services</h4>
            <ul className="space-y-2 font-body text-amber-100">
              <li>
                <a href="#Body-Sculpting-Treatments" className="hover:text-yellow-400 transition-colors">
                  Body Sculpting
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Lash Extensions
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Facials
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Brow Lamination
                </a>
              </li> */}
              <li>
                <a href="#Massage-Therapy" className="hover:text-yellow-400 transition-colors">
                  Massage Therapy
                </a>
              </li>
              <li>
                <a href="#Sculpted-Aura-Packages" className="hover:text-yellow-400 transition-colors">
                  Sculpted Aura
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-yellow-400 mb-4">Contact</h4>
            <div className="space-y-2 font-body text-amber-100">
              <p>Phone: <a href="tel:+1 (954) 393-2634">+1 (954) 393-2634</a></p>
              <p>Email: <a href="mailto:sculptedauraa@gmail.com">sculptedauraa@gmail.com</a></p>
              <p>Address: 2831 W. Cypress Creek Rd., Fort Lauderdale, FL 33309</p>
              <div className="mt-4">
                <p className="font-semibold text-yellow-400">Hours:</p>
                <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
                <p>Sat: 10:00 AM - 6:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-600/20 mt-8 pt-8 text-center">
          <p className="font-body text-amber-200">© 2024 Sculpted Aura. All rights reserved. | Let your aura shine.</p>
           <p className="font-body text-amber-200">
            Design by <a href="https://imperiumadvertising.com/" target="_blank" style={{ color: "#fbbf24", textDecoration: "underline" }}>Imperium Advertising</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
