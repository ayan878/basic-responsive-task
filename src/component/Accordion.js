import { HiLocationMarker, HiUserGroup, HiShoppingCart } from "react-icons/hi";
import { CalendarCheck } from "lucide-react";

function Accordion() {
  const sections = [
    {
      title: "People",
      description:
        "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
      buttonText: "Connect",
      icon: HiUserGroup,
      color: "#85247d",
    },
    {
      title: "Place",
      description:
        "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
      buttonText: "Meet up",
      icon: HiLocationMarker,
      color: "#475",
    },
    {
      title: "Product",
      description:
        "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
      buttonText: "Get it",
      icon: HiShoppingCart,
      color: "#801",
    },
    {
      title: "Program",
      description:
        "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
      buttonText: "Attend",
      icon: CalendarCheck,
      color: "#21147a",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {sections.map((section, index) => (
        <div
          key={index}
          className="border w-full h-56 flex flex-col justify-between p-4 rounded-md "
          style={{ borderColor: "#DDDDDD" }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-2">
            <section.icon
              className="w-8 h-8 md:w-6 md:h-6"
              style={{
                color: section.title === "Place" ? "green" : section.color,
              }}
            />
            <h1 className="text-md md:text-lg font-semibold text-center md:text-left mt-2 md:mt-0">
              {section.title}
            </h1>
          </div>
          <h2 className="text-md font-thin text-center md:text-left">
            {section.description}
          </h2>
          <button
            className="px-4 py-2 border font-medium rounded-md hover:bg-[#d7c7ea] text-[#8064a2] self-center md:self-start"
            style={{
              borderColor: "#8064a2",
            }}
          >
            {section.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
