import CampusMap from "@/app/components/CampusMap/CampusMap";
import SliderMain from "@/app/components/SliderMain/SliderMain";
import React from "react";

export default function page() {
  const images = ["/baggi.jpg", "/mainImg.jpeg", "/baggi.jpg"];
  return (
    <>
      <SliderMain images={images} heading="Campus and Facilities" />
      <div className="p-10">
        <CampusMap
          heading1="Main buildings"
          paragraph1="The main building of LNCT Indore stands as an architectural marvel and a hub of academic excellence. Designed with a blend of modern aesthetics and functional infrastructure, it houses state-of-the-art classrooms, well-equipped laboratories, and spacious auditoriums. The building reflects the institution's commitment to providing a conducive learning environment, with dedicated spaces for innovation, collaboration, and research. Its impressive facade and meticulously maintained interiors symbolize LNCT's rich legacy and progressive vision, fostering an atmosphere that inspires both students and faculty to excel."
          img1="/building2.png"
          heading2="Indoor Sports Room"
          paragraph2="The indoor sports room at LNCT College is a vibrant space dedicated to fostering physical fitness, teamwork, and recreational activities. Designed to accommodate a variety of indoor games, the facility includes provisions for table tennis, chess, carrom, and other engaging sports. Equipped with quality sports gear and a well-maintained ambiance, the room offers students a much-needed break from academic rigors, encouraging them to stay active and refreshed. The spacious layout and structured seating areas make it an ideal place for friendly matches and competitions, cultivating a spirit of healthy rivalry and camaraderie. This facility reflects LNCT's commitment to holistic student development, balancing academics with physical and mental well-being."
          img2="/indoorsports.jpeg"
        />
        <CampusMap
          heading1="Outdoor Sprots Ground"
          paragraph1="The outdoor sports ground at LNCT College is a sprawling and well-maintained facility that serves as the cornerstone for athletic activities and outdoor games on campus. Spanning a large area, it accommodates a variety of sports such as cricket, football, basketball, and athletics, offering students the opportunity to engage in competitive play and fitness activities. The ground is equipped with professional-grade equipment and marked fields for each sport, ensuring that both recreational and competitive events can be held with ease. Surrounded by lush greenery and providing ample space for students to practice, the outdoor sports ground is a hub for physical activity, team-building, and sporting events, fostering a sense of discipline, leadership, and sportsmanship among students. Its strategic location on campus encourages students to embrace a healthy and active lifestyle, balancing academic pursuits with physical well-being"
          img1="/lnct-sports.jpg"
          heading2="Auditorium"
          paragraph2="Content"
          img2="/baggi.jpg"
        />
        <CampusMap
          heading1="Classrooms"
          paragraph1="Content"
          img1="/baggi.jpg"
          heading2="Lab 1"
          paragraph2="Content"
          img2="/baggi.jpg"
        />
        <CampusMap
          heading1="Lab 2"
          paragraph1="Content"
          img1="/baggi.jpg"
          heading2="Lab 3"
          paragraph2="Content"
          img2="/baggi.jpg"
        />
        <CampusMap
          heading1="Lab 4"
          paragraph1="Content"
          img1="/baggi.jpg"
          heading2="Cafeteria "
          paragraph2="Content"
          img2="/baggi.jpg"
        />
      </div>
    </>
  );
}
