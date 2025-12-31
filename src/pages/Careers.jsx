import { useState } from 'react'
import Modal from '../components/ui/Modal'

export default function Careers() {
  const [applyOpen, setApplyOpen] = useState(false)
  const [role, setRole] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  return (
    <main className="bg-black min-h-screen">
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Careers at Buildbot</h1>
        <p className="text-gray-300 mb-10 max-w-2xl">
          We're always looking for talented engineers, designers, and problem solvers to help us build the future.
          Explore our open roles and reach out even if you don't see a perfect match — we love meeting great people.
        </p>

        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/5">
            <h2 className="text-xl font-semibold mb-2">Full Stack Developer</h2>
            <p className="text-gray-400 mb-4">React, Node.js, TypeScript, REST/GraphQL, SQL/NoSQL</p>
            <button onClick={() => { setRole('Full Stack Developer'); setApplyOpen(true); }} className="inline-block px-4 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-300">Apply now</button>
          </div>

          <div className="rounded-xl border border-white/10 p-6 bg-white/5">
            <h2 className="text-xl font-semibold mb-2">Support Engineer</h2>
            <p className="text-gray-400 mb-4">Customer support, troubleshooting, incident response, documentation</p>
            <button onClick={() => { setRole('Support Engineer'); setApplyOpen(true); }} className="inline-block px-4 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-300">Apply now</button>
          </div>

          <div className="rounded-xl border border-white/10 p-6 bg-white/5">
            <h2 className="text-xl font-semibold mb-2">Testing Engineer</h2>
            <p className="text-gray-400 mb-4">Automation testing (Playwright/Jest), API/UI testing, test strategy, CI integration</p>
            <button onClick={() => { setRole('Testing Engineer'); setApplyOpen(true); }} className="inline-block px-4 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-300">Apply now</button>
          </div>

          <div className="rounded-xl border border-white/10 p-6 bg-white/5">
            <h2 className="text-xl font-semibold mb-2">DevOps Engineer</h2>
            <p className="text-gray-400 mb-4">CI/CD (GitHub Actions), Docker, Kubernetes, cloud (AWS/Azure/GCP), monitoring</p>
            <button onClick={() => { setRole('DevOps Engineer'); setApplyOpen(true); }} className="inline-block px-4 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-300">Apply now</button>
          </div>
        </div>
      </section>
        {/* Application Modal */}
       <Modal open={applyOpen} onClose={() => setApplyOpen(false)} title={`Apply for ${role}`}>
         <form
           className="space-y-4"
           onSubmit={(e) => {
             e.preventDefault()
             // Here you could send to an API endpoint
             setApplyOpen(false)
           }}
         >
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <label className="block">
               <span className="text-sm font-medium text-gray-700">Name</span>
               <input
                 type="text"
                 value={form.name}
                 onChange={(e) => setForm({ ...form, name: e.target.value })}
                 required
                 className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                 placeholder="Your name"
               />
             </label>
             <label className="block">
               <span className="text-sm font-medium text-gray-700">Email</span>
               <input
                 type="email"
                 value={form.email}
                 onChange={(e) => setForm({ ...form, email: e.target.value })}
                 required
                 className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                 placeholder="you@example.com"
               />
             </label>
           </div>

           <label className="block">
             <span className="text-sm font-medium text-gray-700">Cover letter / Message</span>
             <textarea
               rows={4}
               value={form.message}
               onChange={(e) => setForm({ ...form, message: e.target.value })}
               required
               className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
               placeholder={`Tell us why you're a great fit for ${role}`}
             />
           </label>

           <div className="flex items-center justify-end gap-3 pt-2">
             <button
               type="button"
               onClick={() => setApplyOpen(false)}
               className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
             >
               Cancel
             </button>
             <button
               type="submit"
               className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
             >
               Submit application
             </button>
           </div>
         </form>
       </Modal>
   </main>
  );
}
