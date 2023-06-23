import Image from 'next/image'
import Introduction from '@/components/Introduction'
import ContactForm from '@/components/ContactForm'


export default function Home() {
  return (
    <>
      <main className="min-h-screen wrapper py-6 flex flex-col ">
        <div>
          <Introduction width={100} height={100} />
        </div>

        <div className='flex-1 [&>p]:mt-6 '>
          <p>
            place holder for projects
          </p>
          <p>
            place holder for projects
          </p>
          <p>
            place holder for projects
          </p>
          <p>
            place holder for projects
          </p>
          <p>
            place holder for projects
          </p>
                    <p>
            place holder for projects
          </p>
                    <p>
            place holder for projects
          </p>
                    <p>
            place holder for projects
          </p>
        </div>

        <div className='mt-6 mb-20 '>
          <ContactForm />
        </div>
      </main>
    </>
  )
}
