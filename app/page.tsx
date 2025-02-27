import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Programs from "@/components/sections/programs";
import Trainers from "@/components/sections/trainers";
import Testimonials from "@/components/sections/testimonials";
import MotivationCTA from "@/components/sections/motivation-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Programs />
      <MotivationCTA
        title="Transform Your Life Today"
        description="Don't wait for the perfect moment. Start your fitness journey now and become the best version of yourself."
        buttonText="Start Your Transformation"
        variant="primary"
      />

      <Testimonials />
      <MotivationCTA
        title="Your Goals, Our Priority"
        description="Join a community of achievers who push their limits and reach new heights. Expert trainers, world-class facilities, and a supportive environment await you."
        buttonText="Join Our Community"
        variant="dark"
      />

      <Trainers />
      <MotivationCTA
        title="Unlock Your Full Potential"
        description="Experience the perfect blend of premium facilities, expert guidance, and a motivating atmosphere. From state-of-the-art equipment to luxury amenities, we've got everything you need to succeed."
        buttonText="View Membership Plans"
        variant="gradient"
        secondaryButton={{ text: "Schedule a Tour", href: "/contact" }}
      />

      <MotivationCTA
        title="Limited Time Offer"
        description="Join now and get exclusive benefits:"
        buttonText="Claim Offer Now"
        variant="black"
        listItems={[
          "Free Personal Training Session",
          "Complimentary Nutrition Consultation",
          "Access to All Premium Classes",
          "No Enrollment Fee",
        ]}
      />
    </main>
  );
}
