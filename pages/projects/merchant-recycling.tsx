import Footer from "../../components/Footer";
import React from "react";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Cta from "../../components/Cta";
import FeaturesZigzag from "../../components/FeaturesZigzag";
import s20adminarea from "../../images/projects/merchant-recycling/s20-admin-area.jpg";

function MerchantPlatform() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo title="Recycling Merchant Platform" />
      <Header />
      <main className="flex-grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Recycling Merchant Websites"
          image={s20adminarea}
          description="We are working with recycling merchants as well as using our industry experience to produce cutting edge websites for recycling merchants."
        />
        <FeaturesZigzag
          title="What can it do?"
          description="Our websites are built with the users in mind"
          features={[
            {
              title: "Built for the customer",
              description:
                "Using our industry experience we have built features designed to make it as easy as possible for the customers to place orders and keep track of the status.",
              images: [{url: s20adminarea, alt: ""}],
              items: ["Real time text and email updates", "Fast and responsive experience", "Streamlined checkout process"],
            },
            {
              title: "Built for the merchants",
              description:
                "Although we want the best possible customer experience, it's important to also focus on making the admin area as easy to use as possible. Based on years of feedback we try and add in everything you would need.",
              images: [{url: s20adminarea, alt: ""}],
              items: ["Full audit logs", "Order note system", "Live chat support"],
              right: true,
            },
            {
              title: "Fully Customisable",
              description:
                "Our unique system allows merchants to change their websites without needing to reach out to our team every time.",
              images: [{url: s20adminarea, alt: ""}, {url: bth, alt: ""}],
              items: ["Dynamic Text Messages", "Dynamic Email Templates", "CMS System for editing content"],
            },
          ]}
        />
        <Cta
          title=" Find out why we are the recommended integration partner for Compare and Recycle."
          description="Feel free to contact us if you are interested or want to know more!"
          buttonText="Contact Us"
          buttonLink="/contact"
          buttonInternal={true}
        />
      </main>
      <Footer />
    </div>
  );
}

export default MerchantPlatform;