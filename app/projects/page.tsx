import React from "react";
import CaseStudies from "../../components/CaseStudies";
import cyberworks from "../../images/projects/cyberworks/dashboard.png";
import pillar from "../../images/projects/pillar.jpg";
import car from "../../images/projects/car.png";
import handtec from "../../images/projects/handtec.png";
import camoradaHomepage from "../../images/projects/merchant-recycling/camorada-home.jpg";
import type {Metadata} from "next";


export const metadata: Metadata = {
  title: "Our Projects"
}

export default function Projects() {
  return (
    <>
        

        <CaseStudies
          title="Our Projects"
          description="Our team has worked on a wide variety of projects. Below is just a handful."
          cases={[ 
            {
              image: car,
              title: "Compare and Recycle",
              description:
                "The UK's number 1 recycling comparison site. We helped build a scalable platform to handle thousands of requests and improve customer satisfaction.",
              link: "/projects/compare-and-recycle",
            },
            {
              image: pillar,
              title: "Living Pillars",
              description:
                "We are helping to improve our urban environments with sensors that monitor and maintain plants in living pillars. We already have them around London and Liverpool.",
              link: "/projects/living-pillars",
            },
            {
              image: camoradaHomepage,
              title: "Recycling Merchant Websites",
              description:
                "Are you a recycling merchant in need of a website? Let us know! We are using our industry experience to produce cutting edge websites for recycling merchants.",
              link: "/projects/merchant-recycling",
            },
            {
              image: pillar,
              title: "Clean Room Sensors",
              description:
                "We have developed and produced sensors that record particulate matter levels in the air.",
              link: "/pages/404",
            },
            {
              image: handtec,
              title: "Handtec Recycling System",
              description: "",
              link: "/projects/handtec",
            },
            {
              image: cyberworks,
              title: "Cyberworks 3",
              description:
                "A popular open source tool which allows you to manage Arma 3 Life servers with ease. Used by hundreds of communities to manage players and aid community support.",
              link: "/projects/cyberworks",
            },
            // {
            //   image: cyberworks,
            //   title: "Competitive Price Tracking",
            //   description:
            //     "PBSL",
            //   link: "/",
            // },
            // {
            //   image: cyberworks,
            //   title: "Copia Digital Work",
            //   description:
            //     "We did some stuff",
            //   link: "/",
            // },
            // {
            //   image: cyberworks,
            //   title: "Copia Digital Work",
            //   description:
            //     "We did some stuff",
            //   link: "/",
            // },
          ]}
        />
    </>
  );
}