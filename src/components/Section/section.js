import React from "react"
import sectionStyles from "./section.module.scss"

export default function Section({ children, color }) {
  return (

    <section
      className={
        color === 'about' ? sectionStyles.sectionAbout :
          color === 'hero' ? sectionStyles.sectionHero :
            color === 'white' ? sectionStyles.sectionWhite : ''
      }
    >
      {children}
    </section >
  )
}