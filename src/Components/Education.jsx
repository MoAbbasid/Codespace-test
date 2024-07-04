import React from "react";

const Education = () => {
  const educationData = [
    {
      title: "ML Student",
      description:
        "I'm a ML student studying at Barnett Technical University. I enjoy designing and exploring ML algorithms and systems, the field is going so fast its exciting.",
    },
    {
      title: "Self-taught Web Developer",
      description:
        "I'm also a self-taught web developer and designer. I've learned a lot from Microsoft's workshops and other online resources. I've also been learning a lot from the open source community.",
    },
    {
      title: "Microsoft Learn Student Ambassador",
      description:
        "I'm a Microsoft Learn Student Ambassador. I help students learn about technology and how to use it to solve problems.",
    },
    {
      title: "Barnett Technical University",
      description:
        "I'm currently studying at Barnett Technical University. I'm learning a lot about machine learning and how to use it to solve problems.",
    },
    // Add more education data objects as needed
  ];

  return (
    <section className="padding" id="education">
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
        }}
      >
        {educationData.map((education) => (
          <div key={education.title}>
            <h2>{education.title}</h2>
            <p>{education.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
