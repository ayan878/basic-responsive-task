import { PlusCircle } from "lucide-react";

function AddYourOwn() {
  const sections = [
    {
      title: "Add Your Own",
      description:
        "Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page.",
      buttonText: "Add new",
      icon: PlusCircle,
      color: "#10217f",
    },
   
  ];

  return (
    <div className="grid grid-cols-1 gap-4 p-4 mt-8 bg-slate-50">
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

export default AddYourOwn;
