import Image from "next/image";
import Introduction from "@/components/Introduction";
import ContactForm from "@/components/ContactForm";
import GradientTopRadient from "@/components/(decoration)/GradientTopRadient";
import DialogContactForm from "@/components/DialogContactForm";
import LinkToNewTab from "@/components/LinkToNewTab";
import SectionHeading from "@/components/SectionHeading";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col mb-8">
      <GradientTopRadient />

      <main className="wrapper px-4 py-16 mb-14  ">
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
              aspects of web/mobile development.
            </p>
            <p>
              Turning a design file into a fully functional and responsive
              website is truly fulfiling, and it motivates me to continuously
              strive for improvement.{" "}
            </p>
          </section>

          <section>
            <h2 className="mt-12 text-base font-medium dark:text-white">
              Toolbox
            </h2>
            <div className="flex flex-wrap gap-x-10">
              <div>
                <h3 className="text-sm font-medium dark:text-white">
                  Frameworks
                </h3>
                <ul className="list-disc text-sm ">
                  <li>React</li>
                  <li>React Native</li>
                  <li>Next.js</li>
                  <li>TailwindCSS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium dark:text-white">
                  Languages
                </h3>
                <ul className="list-disc text-sm ">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>Bash Script</li>
                  <li>HTML/CSS</li>
                  <li>Markdown</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium dark:text-white">
                  Database/Headless CMS
                </h3>
                <ul className="list-disc text-sm ">
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>MangoDB</li>
                  <li>Strapi</li>
                  <li>WordPress</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium dark:text-white">
                  AWS Services
                </h3>
                <ul className="list-disc text-sm ">
                  <li>AWS Amplify</li>
                  <li>EC2/S3/RDS</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium dark:text-white">OS/IDE</h3>
                <ul className="list-disc text-sm ">
                  <li>Linux</li>
                  <li>Vim</li>
                  <li>VS Code</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium dark:text-white">Telecom</h3>
                <ul className="list-disc text-sm ">
                  <li>SS7/SIGTRAN</li>
                  <li>SMS</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <section className="">
          <Projects />

          <h2 className="mt-12 mb-4 text-base font-medium dark:text-white">
            Connect
          </h2>
          <div className="flex flex-col gap-2">
            <LinkToNewTab text="@github" url="https://github.com/antlossway" />
            <DialogContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
