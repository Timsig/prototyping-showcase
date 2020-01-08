import React from "react"
import Headertext from "../components/header_text"

// import "../styles/nexus-styles.scss"

import Qtext from "../components/q_textinput"
import Qyesno from "../components/q_yesno"
import Qbuttons from "../components/q_buttons"
import Qrevealer from "../components/q_revealer"
import Qcheckbox from "../components/q_checkbox"
import Qselect from "../components/q_select"
import Qselectclass from "../components/q_select-class"
import Qdate from "../components/q_date"
import Qnumbuttons from "../components/q_numbuttons"
import Qprepop from "../components/q_prepop"
import Footer from "../components/footer"

import Navbutton from "../components/molecules/navbutton"

const introPageNexus = () => (
  <React.Fragment>
    <div className="container">
      <Headertext headline="Available components" />
      <main>
        <div className="questions-wrapper">
          <Qtext question="Free text question" />
          <Qyesno question="A yes or no question" />
          <Qbuttons 
            id="buttonQuestion"
            question="A question with multiple options"
            options={["Option 1", "Option 2", "Option 3", "Or as many as you like"]} 
          />
          <Qselect 
            id="selectQuestion"
            question="A dropdown select"
            options={["Option 1", "Option 2", "Option 3", "Or as many as you like"]} 
          />
          <Qcheckbox
            id="checkboxQuestion"
            question="A check list"
            options={["First", "Second", "Third", "Fourth"]}
          />
          <Qdate id="DOB" question="Date input" />
          <Qnumbuttons
            id="numButtons"
            question="Number buttons"
            options={["1", "2", "3", "More than 3"]}
          />
          <Qrevealer
            id="Address"
            question="A question that reveals another element, incorporating inline validation (eg. postcode)"
            selectId="address"
            selectQ="Please choose from these options"
            selectOptions={["1 Your Road, Anytown", "2 Your Road, Anytown", "3 Your Road, Anytown", "4 Your Road, Anytown"]}
          />
          <section className="prepop-questions">
            <h3>Prepopulated questions look like this:</h3>
            <Qprepop
              id="prepop"
              textbefore="There is some textbefore"
              options={[
                "an assumption (>75%)",
                "a changed assumption",
                "another option",
                "a final option",
              ]}
              textafter="and some text after"
            />
          </section>
        </div>
      </main>
      <Footer>
        
        <div className="navrow">
          <Navbutton rank="primary" cta="A primary button" />
          <Navbutton rank="secondary" cta="A secondary button" />
          
        </div>
      </Footer>
     </div>
  </React.Fragment>
)

export default introPageNexus