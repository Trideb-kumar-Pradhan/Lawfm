// import React, { useState } from "react";
import React from "react";

import styles from "./FAQ.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Plus from "../../Assets/Plus.png";

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.mainGrid}>
      <div>
        <h1 className={styles.h1}>FAQ</h1>
        <p className={styles.p}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className={styles.Acc}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={styles.summary}
          >
            <div>
              <Typography>Do I need a personal injury report?</Typography>
            </div>
            <div className={styles.add}>
              {expanded === "panel1" ? <></> : <img src={Plus} alt="Plus" />}
            </div>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Typography className={styles.type}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={styles.summary}
          >
            <div>
              <Typography>How much is my case worth?</Typography>
            </div>
            <div className={styles.add}>
              {expanded === "panel2" ? <></> : <img src={Plus} alt="Plus" />}
            </div>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Typography className={styles.type}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={styles.summary}
          >
            <Typography>What should I do right after car accidect</Typography>
            <div className={styles.add}>
              {expanded === "panel3" ? <></> : <img src={Plus} alt="Plus" />}
            </div>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Typography className={styles.type}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={styles.summary}
          >
            <Typography>How much is my case worth?</Typography>
            <div className={styles.add}>
              {expanded === "panel4" ? <></> : <img src={Plus} alt="Plus" />}
            </div>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Typography className={styles.type}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;