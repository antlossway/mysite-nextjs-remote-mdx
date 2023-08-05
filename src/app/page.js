import Image from "next/image";
import Introduction from "@/components/Introduction";
import ContactForm from "@/components/ContactForm";
import GradientTopRadient from "@/components/(decoration)/GradientTopRadient";
import DialogContactForm from "@/components/DialogContactForm";
import LinkToNewTab from "@/components/LinkToNewTab";

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <GradientTopRadient />

      <main className="wrapper ">
        <Introduction width={80} height={80} />

        <div className="prose mt-8 dark:text-white/80">
          {/* my story */}
          <section>
            <h2 className="text-base font-medium dark:text-white">About me</h2>
            <p>
              I have been working a long time in the backend role, mainly
              network and system administration. I have built platforms with
              REST API and internal dashboard with Python/Perl.
            </p>
            <p>
              In 2023, I decided to start an exciting journey towards frontend
              because I've always been captivated by the visual and user-facing
              aspects of web development.
            </p>
            <p>
              Turning a design file into a fully functional and responsive
              website is truly fulfiling, and it motivates me to continuously
              strive for improvement.{" "}
            </p>
          </section>

          <section>
            <h2 className="mt-12 text-base font-medium dark:text-white">
              Projects
            </h2>
          </section>
        </div>
        <section className="">
          <h2 className="mb-4 text-base font-medium dark:text-white">
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
