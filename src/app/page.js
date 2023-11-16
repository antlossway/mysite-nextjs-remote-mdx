import Introduction from "@/components/Introduction";
import GradientTopRadient from "@/components/(decoration)/GradientTopRadient";
import DialogContactForm from "@/components/DialogContactForm";
import LinkToNewTab from "@/components/LinkToNewTab";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col mb-8">
      <GradientTopRadient />

      <main className="wrapper px-4 pt-4 pb-16 mb-14 ">
        <Introduction width={80} height={80} />

        <div className="prose mt-8 dark:text-white/80">
          {/* my story */}
          <section>
            <h2 className="text-base font-medium dark:text-white">About me</h2>
            <p>
              I have been working a long time in the backend role, mainly
              network,SysAdmin,and operation.
            </p>
            <p>
              I have deep dived in the SMS world. You ask what is SMS? It stands
              for "Short Messaging Service", it's the legacy person-to-person
              messaging service on all the mobile phones. I have built
              platforms(SMS gateway) with REST API and internal dashboard with
              Python/Perl and operated it to handle millions of SMS daily.
            </p>

            <p>
              In 2023, I decided to start an exciting journey towards frontend
              because I've always been fascinated by the visual and user-facing
              aspects of web/mobile development. Thanks to my backend
              experience, it makes the new journey a lot easier.
            </p>
            <p>
              I take great pleasure in crafting UIs with React, embracing new
              features offered by Next.js and TailwindCSS to develop visually
              pleasant screens and enhance user experiences.{" "}
            </p>
          </section>

          {/* Turning a design file into a fully functional and responsive website is truly fulfiling, and it motivates me to continuously strive for improvement. */}

          <section>
            <h2 className="mt-12 text-base font-medium dark:text-white">
              Toolbox
            </h2>
            <Skills />
          </section>
        </div>

        {/* use framer motion to animate project cards */}
        <Projects />

        <section className="">
          <h2 className="mt-12 mb-4 text-base font-medium dark:text-white">
            Connect
          </h2>
          <div className="flex flex-col items-start gap-2  ">
            <LinkToNewTab text="@github" url="https://github.com/antlossway" />
            <DialogContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
