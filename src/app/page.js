import Image from "next/image";
import Introduction from "@/components/Introduction";
import ContactForm from "@/components/ContactForm";
import GradientTopRadient from "@/components/(decoration)/GradientTopRadient";

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <GradientTopRadient />

      <main className="wrapper ">
        <Introduction width={80} height={80} />

        <div className="prose mt-8">
          <h2 className="text-base font-medium">About me</h2>
          <p>
            I have been working a long time in the backend role, mainly network
            and system administration. I have also built platforms with REST API
            and internal dashboard with Python/Perl.
          </p>
          <p>
            Since 2023, I decided to move to the frontend because I have always
            been wondering what's on the other side &#x1F609;.
          </p>
          <p>
            Turning a design file into a fully functional and responsive website
            is truly exciting, and the sense of fulfillment it brings motivates
            me to continuously strive for improvement{" "}
          </p>

          <h2 className="mt-12 text-base font-medium">Projects</h2>
        </div>

        <div className="mt-6 mb-24 ">
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
