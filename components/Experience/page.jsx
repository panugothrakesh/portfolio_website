"use client";

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import experiencesData from "./data";

export default function Experience() {
  return (
    <div className="text-white font-gilMedium pt-12">
      <VerticalTimeline lineColor="#1e1e1e">
        {experiencesData.map((item, index) => (
          <InViewElement key={index} item={item} index={index} />
        ))}
      </VerticalTimeline>
    </div>
  );
}

function InViewElement({ item, index }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <VerticalTimelineElement
        visible={inView}
        position={index % 2 === 0 ? "left" : "right"}
        style={{
            marginTop: "40px",
            marginBottom: "40px",
            paddingTop: "20px",
            paddingBottom: "20px",
        }}
        contentStyle={{
          background: "#1e1e1e",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
          boxShadow: "none",
          borderRadius: "10px",
        }}
        contentArrowStyle={{ borderRight: "0.5rem solid #1e1e1e" }}
        date={item.date}
        iconStyle={{
          background: "black",
          fontSize: "1.5rem",
          boxShadow: "0 0 0 4px #1e1e1e, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
          marginTop: "20px",
          marginBottom: "20px",
        }}
        icon={item.icon}
      >
        <h3 className="font-gilSemiBold">{item.title}</h3>
        <p>{item.location}</p>
        <p>{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
}
